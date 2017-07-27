import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Quill from 'quill';
import defaultEmojiList from './emojiList';
import EmojiContainer from './emojiContainer';
import ToolbarEmoji from './toolbarEmoji';

const Image = Quill.import('formats/image');
class EmojiBlot extends Image {}
EmojiBlot.blotName = 'emoji';
EmojiBlot.tagName = 'img';
Quill.register({
  'formats/emoji': EmojiBlot
});
const Delta = Quill.import('delta');
export default class Emoji extends React.Component {
  static propTypes = {
    emojiList: PropTypes.arrayOf(PropTypes.any),
    quill: PropTypes.objectOf(PropTypes.any)
  };
  static defaultProps = {
    emojiList: defaultEmojiList
  };
  constructor (props) {
    super(props);
    this.quill = props.quill;
    this.state = {
      isShow: false,
      activeIndex: 0
    };
    this.handleClickButton = this.handleClickButton.bind(this);
    this.handleClickItem = this.handleClickItem.bind(this);
    this.handleOutSideClick = this.handleOutSideClick.bind(this);
    this.handleChangeToolbar = this.handleChangeToolbar.bind(this);
    ToolbarEmoji(this.quill, this.handleClickButton);
  }
  componentDidMount () {
    this.$el = ReactDOM.findDOMNode(this.emojiContainer); // eslint-disable-line
    document.body.addEventListener('click', this.handleOutSideClick);
  }
  componentWillUnmount () {
    document.body.removeEventListener('click', this.handleOutSideClick);
  }
  handleOutSideClick (e) {
    if (!this.$el.contains(e.target)) {
      this.setState({
        isShow: false
      });
    }
  }
  handleClickButton (e, $button) {
    e.stopPropagation();
    if (!this.state.isShow) {
      this.position = {
        top: $button.offsetTop + 30,
        left: $button.offsetLeft - this.$el.clientWidth / 2 + 15
      };
    }
    this.setState({
      isShow: !this.state.isShow
    });
  }
  handleClickItem (item, type) {
    const editor = this.quill;
    const range = editor.getSelection(true);
    // 更新编辑器内容
    editor.updateContents(
      new Delta().retain(range.index).delete(range.length).insert(
        { image: item.src },
        {
          alt: item.alt,
          width: type.width,
          height: type.height
        }
      ),
      'user'
    );
    this.quill.setSelection(
      range.index - range.length + 1,
      Quill.sources.SILENT
    );
  }
  handleChangeToolbar (item, activeIndex) {
    this.setState({
      activeIndex
    });
  }
  render () {
    const { emojiList } = this.props;
    const { isShow, activeIndex } = this.state;
    return (
      <EmojiContainer
        style={this.position}
        ref={target => this.emojiContainer = target}
        isShow={isShow}
        onClickItem={this.handleClickItem}
        onChangeToolbarItem={this.handleChangeToolbar}
        activeIndex={activeIndex}
        emojiList={emojiList}
      />
    );
  }
}
