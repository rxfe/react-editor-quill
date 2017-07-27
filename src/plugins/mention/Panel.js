import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class Panel extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.any),
    style: PropTypes.objectOf(PropTypes.any),
    idx: PropTypes.number,
    visible: PropTypes.bool.isRequired,
    onSelect: PropTypes.func,
    formatter: PropTypes.func
  };
  static defaultProps = {
    prefixCls: '',
    list: [],
    style: {},
    idx: 0,
    onSelect: () => {},
    formatter: ''
  };
  componentDidUpdate (prevProps) {
    if (prevProps.visible === false && this.props.visible === true) {
      this.panel.scrollTop = 0;
    }
    if (this.props.idx !== prevProps.idx) {
      this.maybeScrollItemIntoView();
    }
  }
  maybeScrollItemIntoView () {
    const panel = this.panel;
    const current = this[`item-${this.props.idx}`];
    if (panel && current) {
      const clientHeight = panel.clientHeight;
      const curClientHeight = current.clientHeight;
      const offsetTop = current.offsetTop;
      const scrollTop = panel.scrollTop;
      const range = Math.abs(offsetTop - scrollTop) + curClientHeight;
      if (range > clientHeight || scrollTop > offsetTop) {
        panel.scrollTop = offsetTop;
      }
    }
  }
  render () {
    const {
      onSelect,
      list,
      style,
      visible,
      idx,
      formatter,
      prefixCls
    } = this.props;
    const clsObj = {};
    clsObj[`${prefixCls}-panel`] = true;
    clsObj[`${prefixCls}-panel-visible`] = visible;
    const cls = classNames(clsObj);
    return (
      <ul className={cls} style={style} ref={e => this.panel = e}>
        {list.map((item, index) => {
          const itemClsObj = {};
          itemClsObj[`${prefixCls}-panel-item`] = true;
          itemClsObj[`${prefixCls}-panel-item-current`] = idx === index;
          const itemCls = classNames(itemClsObj);
          return (
            <li // eslint-disable-line
              className={itemCls}
              key={item.id || index}
              ref={e => this[`item-${index}`] = e}
              onClick={() => onSelect(item)}
            >
              <div>
                {formatter(item)}
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}
