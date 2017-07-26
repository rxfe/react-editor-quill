import React, { PropTypes } from 'react';
import classnames from 'classnames';
import isEqual from 'lodash.isequal';
import defaultEmojiList from './emojiList';

const noop = () => {};

/*
  eslint-disable jsx-a11y/no-static-element-interactions
 */

function EmojiToolbar (props) {
  const { emojiList, changeToolbarItem, activeIndex } = props;
  return (
    <div className="emoji-toolbar">
      {emojiList.map((item, index) => (
        <div
          className={`toolbar-item ${activeIndex === index ? 'active' : ''}`}
          key={item.type}
          onClick={(e) => {
            if (activeIndex !== index) {
              changeToolbarItem(item, index, emojiList, e);
            }
          }}
        >
          <img src={item.src} alt={item.title} title={item.title} />
        </div>
      ))}
      <div className="arrow-down" />
    </div>
  );
}
function EmojiPanel (props) {
  const { emojiItems, clickItem } = props;
  return (
    <div className="emoji-panel">
      <div className={`emoji-list ${emojiItems.className}`}>
        {emojiItems.children.map(item => (
          <span
            className="emoji-item"
            onClick={e => clickItem(item, emojiItems, e)}
            key={item.title}
            title={item.title}
          >
            <img src={item.src} alt={item.alt} />
          </span>
        ))}
      </div>
    </div>
  );
}
export default class EmojiContainer extends React.Component {
  static propTypes = {
    isShow: PropTypes.bool.isRequired,
    activeIndex: PropTypes.number.isRequired,
    onClickItem: PropTypes.func,
    emojiList: PropTypes.arrayOf(PropTypes.any).isRequired,
    onChangeToolbarItem: PropTypes.func,
    onChangeShow: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.any)
  };
  static defaultProps = {
    onChangeToolbarItem: noop,
    onChangeShow: noop,
    onClickItem: noop,
    isShow: false,
    activeIndex: 0,
    style: {}
  };
  constructor (props) {
    super(props);
    this.changeToolbarItem = this.changeToolbarItem.bind(this);
  }
  changeToolbarItem (...arg) {
    this.props.onChangeToolbarItem(...arg);
  }
  toggleShow () {
    const isShow = !this.state.isShow;
    this.props.onChangeShow(isShow);
  }
  render () {
    const { activeIndex, isShow, emojiList, onClickItem, style } = this.props;
    const cls = classnames({
      'emoji-container': true,
      show: isShow
    });
    return (
      <div className={cls} style={style}>
        <EmojiToolbar
          emojiList={emojiList}
          activeIndex={activeIndex}
          changeToolbarItem={this.changeToolbarItem}
        />
        <EmojiPanel emojiItems={emojiList[activeIndex]} clickItem={onClickItem} />
      </div>
    );
  }
}
