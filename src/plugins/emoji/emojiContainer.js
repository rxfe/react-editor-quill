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
            onClick={e => clickItem(item, e)}
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
    value: PropTypes.objectOf(PropTypes.any),
    defaultValue: PropTypes.objectOf(PropTypes.any),
    emojiList: PropTypes.arrayOf(PropTypes.any).isRequired,
    onChangeToolbarItem: PropTypes.func,
    onChangeShow: PropTypes.func
  };
  static defaultProps = {
    onChangeToolbarItem: noop,
    onChangeShow: noop,
    isShow: false,
    activeIndex: 0
  };
  constructor (props) {
    super(props);
    this.state = {
      value: props.value || props.defaultValue
    };
    this.changeToolbarItem = this.changeToolbarItem.bind(this);
  }
  componentWillReceiveProps (nextProps) {
    debugger
    if (!isEqual(nextProps.value, this.state.value)) {
      this.setState({
        value: nextProps.value
      });
      return true;
    }
    return false;
  }
  changeToolbarItem (item, activeIndex, ...arg) {
    this.setState({
      activeIndex
    });
    this.props.onChangeToolbarItem(item, activeIndex, ...arg);
  }
  toggleShow () {
    const isShow = !this.state.isShow;
    this.setState({
      isShow
    });
    this.props.onChangeShow(isShow);
  }
  render () {
    const { emojiList, clickItem } = this.props;
    const { activeIndex, isShow } = this.state.value;
    const cls = classnames({
      'emoji-container': true,
      show: isShow
    });
    return (
      <div className={cls}>
        <EmojiToolbar
          emojiList={emojiList}
          activeIndex={activeIndex}
          changeToolbarItem={this.changeToolbarItem}
        />
        <EmojiPanel emojiItems={emojiList[activeIndex]} clickItem={clickItem} />
      </div>
    );
  }
}
