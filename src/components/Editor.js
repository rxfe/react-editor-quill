import React, { PropTypes as T } from 'react';
import ReactDOM from 'react-dom';
import isEqual from 'lodash.isequal';
import BaseEditor from './BaseEditor';

export default class Editor extends BaseEditor {
  static propTypes = {
    id: T.string,
    className: T.string,
    theme: T.string,
    style: T.objectOf(T.any),
    readOnly: T.bool,
    value: T.oneOfType([T.string, T.array]),
    defaultValue: T.oneOfType([T.string, T.array]),
    placeholder: T.string,
    bounds: T.oneOfType([T.string, T.element]),
    onKeyPress: T.func,
    onKeyDown: T.func,
    onKeyUp: T.func,
    onChange: T.func,
    onChangeSelection: T.func,
    modules: T.objectOf(T.any),
    formats: T.arrayOf(T.any),
    plugins: T.arrayOf(T.any),
    children: T.element
  }
  static dirtyProps = [
    'modules',
    'formats',
    'bounds',
    'theme',
    'children',
    'plugins'
  ]
  /*
  Changing one of these props should cause a regular update.
  */
  static cleanProps = [
    'id',
    'className',
    'style',
    'placeholder',
    'onKeyPress',
    'onKeyDown',
    'onKeyUp',
    'onChange',
    'onChangeSelection',
  ]
  static defaultProps = {
    theme: 'snow',
    modules: {}
  }
  constructor (props) {
    super(props);
    const value = this.isControlled()
        ? this.props.value
        : this.props.defaultValue;
    this.state = {
      generation: 0,
      value
    };
  }
  componentWillReceiveProps (nextProps, nextState) {
    const editor = this.editor;

    // If the component is unmounted and mounted too quickly
    // an error is thrown in setEditorContents since editor is
    // still undefined. Must check if editor is undefined
    // before performing this call.
    if (!editor) return false;

    // Update only if we've been passed a new `value`.
    // This leaves components using `defaultValue` alone.
    if ('value' in nextProps) {
      // NOTE: Seeing that Quill is missing a way to prevent
      //       edits, we have to settle for a hybrid between
      //       controlled and uncontrolled mode. We can't prevent
      //       the change, but we'll still override content
      //       whenever `value` differs from current state.
      debugger
      if (!isEqual(nextProps.value, this.getEditorContents())) {
        this.setEditorContents(editor, nextProps.value);
      }
    }

    // We can update readOnly state in-place.
    if ('readOnly' in nextProps) {
      if (nextProps.readOnly !== this.props.readOnly) {
        this.setEditorReadOnly(editor, nextProps.readOnly);
      }
    }

    // If we need to regenerate the component, we can avoid a detailed
    // in-place update step, and just let everything rerender.
    if (this.shouldComponentRegenerate(nextProps, nextState)) {
      return this.regenerate();
    }
    return false;
  }
  componentDidMount () {
    this.editor = this.createEditor(
      this.getEditingArea(),
      this.getEditorConfig()
    );
    if (this.props.plugins) {
      this.renderPlugins(this.editor);
    }
    // Restore editor from Quill's native formats in regeneration scenario
    if (this.quillDelta) {
      this.editor.setContents(this.quillDelta);
      this.editor.setSelection(this.quillSelection);
      this.editor.focus();
      this.quillDelta = null;
      this.quillSelection = null;
      return;
    }
    if (this.state.value) {
      this.setEditorContents(this.editor, this.state.value);
    }
  }
  componentWillUnmount () {
    const editor = this.getEditor();
    if (editor) {
      this.unhookEditor(editor);
      this.editor = null;
    }
  }
  shouldComponentUpdate (nextProps, nextState) {
    // If the component has been regenerated, we already know we should update.
    if (this.state.generation !== nextState.generation) {
      return true;
    }

    // Compare props that require React updating the DOM.
    return Editor.cleanProps.some(prop =>
      // Note that `isEqual` compares deeply, making it safe to perform
      // non-immutable updates, at the cost of performance.
      !isEqual(nextProps[prop], this.props[prop])
    );
  }

  shouldComponentRegenerate (nextProps) {
    // Whenever a `dirtyProp` changes, the editor needs reinstantiation.
    return Editor.dirtyProps.some(prop =>
      // Note that `isEqual` compares deeply, making it safe to perform
      // non-immutable updates, at the cost of performance.
      !isEqual(nextProps[prop], this.props[prop])
    );
  }

  /*
  If we could not update settings from the new props in-place, we have to tear
  down everything and re-render from scratch.
  */
  componentWillUpdate (nextProps, nextState) {
    if (this.state.generation !== nextState.generation) {
      this.componentWillUnmount();
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.generation !== prevState.generation) {
      this.componentDidMount();
    }
  }

  getEditorConfig () {
    return {
      bounds: this.props.bounds,
      formats: this.props.formats,
      modules: this.props.modules,
      placeholder: this.props.placeholder,
      readOnly: this.props.readOnly,
      theme: this.props.theme,
    };
  }

  getEditor () {
    return this.editor;
  }

  getEditingArea () {
    return ReactDOM.findDOMNode(this.editingArea); // eslint-disable-line
  }

  getEditorContents () {
    return this.state.value;
  }

  getEditorSelection () {
    return this.state.selection;
  }
  convertHtml (html) {
    if (Array.isArray(html)) return html;
    return this.editor.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">${html}<p><br></p></div>`);
  }
  renderPlugins (quill) {
    if (!this.pluginsTarget) return;
    ReactDOM.render(
      (
        <div>
          {
            React.Children.map(this.props.plugins, (plugin) => {
              const cp = {
                quill
              };
              return React.cloneElement(plugin, cp);
            })
          }
        </div>
      ),
    this.pluginsTarget);
  }
  /*
  Regenerating the editor will cause the whole tree, including the container,
  to be cleaned up and re-rendered from scratch.
  */
  regenerate () {
    // Cache selection and contents in Quill's native format to be restored later
    this.quillDelta = this.editor.getContents();
    this.quillSelection = this.editor.getSelection();
    this.setState({
      generation: this.state.generation + 1,
    });
  }
  /*
    We consider the component to be controlled if `value` is being sent in props.
  */
  isControlled () {
    return 'value' in this.props;
  }
  focus () {
    this.editor.focus();
  }
  onEditorChangeText (value, delta, source, editor) {
    debugger
    if (delta.ops !== this.getEditorContents()) {
      this.setState({ value: delta.ops }, () => {
        if (this.props.onChange) {
          this.props.onChange(value, delta, source, editor);
        }
      });
    }
  }
  onEditorChangeSelection (range, source, editor) {
    const s = this.getEditorSelection() || {};
    const r = range || {};
    if (r.length !== s.length || r.index !== s.index) {
      this.setState({ selection: range });
      if (this.props.onChangeSelection) {
        this.props.onChangeSelection(range, source, editor);
      }
    }
  }
  /*
  Renders an editor area, unless it has been provided one to clone.
  */
  renderEditingArea () {
    const self = this;
    const children = this.props.children;

    const properties = {
      key: this.state.generation,
      ref (element) { self.editingArea = element; },
    };

    const customElement = React.Children.count(children)
      ? React.Children.only(children)
      : null;

    const editingArea = customElement
      ? React.cloneElement(customElement, properties)
      : React.DOM.div(properties);

    return editingArea;
  }
  render () {
    return (
      <div
        id={this.props.id}
        style={{ position: 'relative', ...this.props.style }}
        key={this.state.generation}
        className={['quill'].concat(this.props.className).join(' ')}
      >
        {this.renderEditingArea()}
        <div ref={target => (this.pluginsTarget = target)} />
      </div>
    );
  }
}
