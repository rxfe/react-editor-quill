import React, { Component, PropTypes } from 'react';
import Quill from 'quill';
import isQuillHasModule from '../../utils/hasModule';
import Panel from './Panel';
import ButtonBlot from './ButtonBlot';

const Delta = Quill.import('delta');

const KEYCODE = {
  DOWN: 40,
  UP: 38,
  ESC: 27,
  TAB: 9,
  ENTER: 13,
  CTRL: 17,
  BACKSPACE: 8,
  DELETE: 46
};
function parseStrByDelimiter (str = '', delimiter = '@') {
  const idx = str.lastIndexOf(delimiter);
  let ret;
  if (idx !== -1) {
    ret = str.substring(idx + 1);
  } else {
    ret = false;
  }
  return ret;
}

class QuillMention extends Component {
  constructor (props) {
    super(props);
    this.state = {
      mentionList: [],
      cursorPosition: {
        x: 0,
        y: 0,
      },
      panelVisible: false,
      panelIdx: 0,
    };
    this.selectItem = this.selectItem.bind(this);
  }
  componentWillMount () {
    if (!isQuillHasModule(Quill, 'formats/mention')) {
      Quill.register({ 'formats/mention': ButtonBlot });
    }
    if (isQuillHasModule(Quill, 'modules/mentions')) {
      return;
    }
    this.quill = this.props.quill;
    this.quill.on('selection-change', this.handleDefaultKeyup.bind(this));
    this.quill.root.addEventListener('blur', this.hidePanel.bind(this));
    this.quill.root.addEventListener('keydown', this.onKeydown.bind(this));
    this.quill.keyboard.bindings[13].unshift({ key: 13, shiftKey: null, handler: this.handleEnter.bind(this) });
    this.quill.root.addEventListener('keyup', (e) => {
      this.onKeyup(e);
      // this.onPanelKeyup(e)
    });
  }

  componentDidMount () {
    this.STORE = {};
  }
  componentDidUpdate (prevProps, prevState) {
    if (prevState.mentionList.length !== this.state.mentionList.length) {
      this.setState({ // eslint-disable-line
        panelVisible: this.state.mentionList.length > 0,
      });
    }
    if (!prevState.panelVisible && this.state.panelVisible) {
      this.setState({ // eslint-disable-line
        panelIdx: 0,
      });
    }
  }
  onPanelKeyup (e) {
    const { panelVisible, panelIdx, mentionList } = this.state;
    if (panelVisible) {
      const count = mentionList.length;
      switch (e.keyCode) {
        case KEYCODE.UP:
          this.setState({
            panelIdx: panelIdx === 0 ? count - 1 : panelIdx - 1,
          });
          break;
        case KEYCODE.DOWN:
          this.setState({
            panelIdx: panelIdx === count - 1 ? 0 : panelIdx + 1,
          });
          break;
        case KEYCODE.ENTER:
          // this.selectItem(mentionList[panelIdx]);
          break;
        default:
          this.setState({
            mentionList: [],
          });
          break;
      }
    }
  }
  onKeydown (e) {
    const { panelVisible } = this.state;
    this.onPanelKeyup(e);
    switch (e.keyCode) {
      case KEYCODE.UP:
      case KEYCODE.DOWN:
        if (panelVisible) {
          e.stopPropagation();
          e.preventDefault();
        }
        break;
      case KEYCODE.ENTER:
        if (panelVisible) {
          e.stopPropagation();
          e.preventDefault();
        }
        break;
      default:
        break;
    }
  }
  onKeyup (e) {
    const { panelVisible } = this.state;
    switch (e.keyCode) {
      case KEYCODE.UP:
      case KEYCODE.DOWN:
        if (panelVisible) {
          e.preventDefault();
        }
        break;
      case KEYCODE.ENTER:
        break;
      default:
        this.handleDefaultKeyup(e);
        break;
    }
  }

  setPanelPos (pos) {
    const client = this.quill.container.parentNode.getBoundingClientRect();
    const position = {
      x: pos.left - client.left,
      y: (pos.top - client.top) + 20,
    };
    this.setState({
      cursorPosition: position,
    });
  }
  handleEnter () {
    const { panelVisible, panelIdx, mentionList } = this.state;
    if (panelVisible) {
      this.selectItem(mentionList[panelIdx]);
      return false;
    }
    return true;
  }
  matcher (str) {
    const { source, matchRange } = this.props;
    this.setState({
      panelVisible: false,
      mentionList: [],
    });
    if (str.length >= matchRange[0] && str.length <= matchRange[1]) {
      if (Array.isArray(source)) {
        this.next(source.filter(item => item.indexOf(str) !== -1));
      } else {
        source(str, this.next.bind(this));
      }
    }
  }

  next (matchResult) {
    let result = matchResult;
    if (this.props.formatter) {
      result = this.props.formatter(result);
    }
    this.setState({
      mentionList: result,
    });
  }
  runMatcher (str) {
    if (this.matchTimer) {
      clearTimeout(this.matchTimer);
    }
    this.matchTimer = setTimeout(() => {
      this.matcher(str);
    }, this.props.delay);
  }
  hidePanel () {
    setTimeout(() => {
      this.setState({
        panelVisible: false
      });
    }, 200);
  }
  handleDefaultKeyup (e) {
    if (!e) {
      this.hidePanel();
      return;
    }
    const { delimiter } = this.props;
    const sel = this.quill.selection;
    const quillRange = this.quill.getSelection(true);
    if (quillRange.length > 0) {
      return;
    }
    const nativeRange = sel.getNativeRange();
    if (!nativeRange || !nativeRange.native) {
      return;
    }
    const range = nativeRange.native;
    if (range.commonAncestorContainer.nodeType === 3) {
      const cloneRange = range.cloneRange();
      cloneRange.setStart(range.commonAncestorContainer, 0);
      const originStr = cloneRange.toString();
      const str = parseStrByDelimiter(originStr, delimiter);
      this.runMatcher(str);
      if (str !== false) {
        const theRange = sel.lastRange;
        const bound = sel.getBounds(theRange.index);
        this.setPanelPos(bound);
        const length = str.length + 1;
        this.STORE.bookmark = { index: sel.lastRange.index - length, length };
      }
    }
  }
  insertWithElementNode (mentionContent) {
    this.quill.off('selection-change');
    if (this.STORE.bookmark) {
      this.quill.selection.setRange(this.STORE.bookmark);
    }
    this.quill.on('selection-change', this.handleDefaultKeyup.bind(this));
    const range = this.quill.getSelection(true);
    this.quill.updateContents(new Delta()
      .retain(range.index)
      .delete(range.length)
      .insert({ mention: mentionContent })
      .insert(' '));
    this.quill.setSelection(range.index + 2, 0);
  }

  insertWithTextNode (mentionContent) {
    this.quill.off('selection-change');
    if (this.STORE.bookmark) {
      this.quill.selection.setRange(this.STORE.bookmark);
    }
    this.quill.on('selection-change', this.handleDefaultKeyup.bind(this));
    const range = this.quill.getSelection(true);
    this.quill.updateContents(new Delta()
      .retain(range.index)
      .delete(range.length)
      .insert(mentionContent)
      .insert(' '));
    this.quill.setSelection(range.index + mentionContent.length + 1, 0);
  }
  insert (mentionContent) {
    const { insertMode } = this.props;
    switch (insertMode) {
      case 'TEXT_NODE':
        this.insertWithTextNode(mentionContent);
        break;
      case 'ELEMENT_NODE':
      default:
        this.insertWithElementNode(mentionContent);
        break;
    }
  }
  insertMentionData (mentionData) {
    const { mentionFormatter, onAdd } = this.props;
    const insertContent = mentionFormatter(mentionData);
    this.insert(insertContent);
    onAdd(insertContent, mentionData);
  }

  selectItem (data) {
    this.insertMentionData(data);
    this.setState({
      mentionList: [],
    });
  }
  render () {
    const panelPosition = {
      left: this.state.cursorPosition.x,
      top: this.state.cursorPosition.y,
    };
    const { prefixCls, panelFormatter } = this.props;
    return (<div ref={target => (this.targetEl = target)}>
      <Panel
        prefixCls={prefixCls}
        visible={this.state.panelVisible}
        idx={this.state.panelIdx}
        list={this.state.mentionList}
        onSelect={this.selectItem}
        formatter={panelFormatter}
        style={panelPosition}
        ref={panel => (this.panel = panel)}
      />
    </div>);
  }
}
QuillMention.displayName = 'QuillMention';
/* eslint-disable */
QuillMention.propTypes = {
  delimiter: React.PropTypes.string,
  /**
   * @i18n {zh-CN} class前缀
   * @i18n {en-US} class prefix
   */
  prefixCls: React.PropTypes.string,
  /**
   * @i18n {zh-CN} 定义数据源
   * @i18n {en-US} data source for mention content
   */
  source: PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.func,
  ]),
  /**
   * @i18n {zh-CN} 数据源查询延时
   * @i18n {en-US} debounce of the request to data source
   */
  delay: PropTypes.number,
  /**
   * @i18n {zh-CN} 匹配字符区间
   * @i18n {en-US} only match the string after delimiter which the length in this range
   */
  matchRange: PropTypes.arrayOf(PropTypes.number),
  /**
   * @i18n {zh-CN} 数据源格式化匹配
   * @i18n {en-US} format the data form source
   */
  formatter: PropTypes.func,
  /**
   * @i18n {zh-CN} 自定义插入的mention内容
   * @i18n {en-US} customize the insert content with this function | function
   */
  mentionFormatter: PropTypes.func,
  /**
   * @i18n {zh-CN} 自定义选择列表
   * @i18n {en-US} customize the panel display
   */
  panelFormatter: PropTypes.func,
  /**
   * @i18n {zh-CN} 发生变化后的触发
   * @i18n {en-US} trigger when editor content change
   * @param {data} xxxxxx
   */
  onChange: PropTypes.func,
  /**
   * @i18n {zh-CN} 添加mention后触发
   * @i18n {en-US} Callback invoked when a mention has been added
   */
  onAdd: PropTypes.func,
  /**
   * @i18n {zh-CN} `ELEMENT_NODE` 插入button, `TEXT_NODE` 插入纯字符串
   * @i18n {en-US} `ELEMENT_NODE`
   * will insert mention content with a button, `TEXT_NODE` will insert with a text node
   */
  insertMode: PropTypes.oneOf(['ELEMENT_NODE', 'TEXT_NODE']),
  quill: PropTypes.objectOf(PropTypes.any)
}
QuillMention.defaultProps = {
  delimiter: '@',
  prefixCls: 'quill-mention',
  source: [],
  delay: 100,
  matchRange: [0, 20],
  formatter: data => data,
  mentionFormatter: data => `@${data.text}`,
  panelFormatter: data => `${data.text}`,
  onChange: () => {},
  onAdd: () => {},
  insertMode: 'ELEMENT_NODE',
}
export default QuillMention
