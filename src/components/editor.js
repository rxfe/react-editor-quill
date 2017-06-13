import React from 'react';
import BaseEditor from './baseEditor';

export default class Editor extends BaseEditor {
  constructor () {

  }
  focus () {
    this.editor.focus();
  }
  onEditorChangeText (value, delta, source, editor) {
    if (value !== this.getEditorContents()) {
      this.setState({ value });
      if (this.props.onChange) {
        this.props.onChange(value, delta, source, editor);
      }
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
  render () {
    return (<div>123</div>);
  }
}
