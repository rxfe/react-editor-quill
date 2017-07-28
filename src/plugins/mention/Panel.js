import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class Panel extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.any),
    style: PropTypes.objectOf(PropTypes.any),
    idx: PropTypes.number,
    onSelect: PropTypes.func,
    formatter: PropTypes.func,
    placeholder: PropTypes.string,
    notfound: PropTypes.string,
    isLoading: PropTypes.bool,
    matcherStr: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    loadingRender: PropTypes.func
  };
  static defaultProps = {
    prefixCls: '',
    list: [],
    style: {},
    idx: 0,
    onSelect: () => {},
    formatter: '',
    placeholder: '请输入内容',
    notfound: '无数据'
  };
  componentDidUpdate (prevProps) {
    if (prevProps.matcherStr === false && this.props.matcherStr) {
      if (this.panel) this.panel.scrollTop = 0;
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
      idx,
      formatter,
      prefixCls,
      placeholder,
      notfound,
      matcherStr,
      isLoading,
      loadingRender
    } = this.props;
    const clsObj = {};
    clsObj[`${prefixCls}-panel`] = true;
    clsObj[`${prefixCls}-panel-visible`] = matcherStr !== false;
    const cls = classNames(clsObj);
    const tips = matcherStr ? notfound : placeholder;
    const itemPrefixCls = `${prefixCls}-panel-item`;
    const loadingEl = loadingRender
      ? loadingRender()
      : (<div className="loading-spinner">
        <svg viewBox="25 25 50 50" className="circular">
          <circle cx="50" cy="50" r="20" fill="none" className="path" />
        </svg>
      </div>);
    return (
      <div className={cls} style={style} ref={e => this.panel = e}>
        {!list.length
          ? <div className={`${itemPrefixCls} ${itemPrefixCls}-tips`}>
            {isLoading ? loadingEl : tips}
          </div>
          : <ul>
            {list.map((item, index) => {
              const itemClsObj = {};
              itemClsObj[itemPrefixCls] = true;
              itemClsObj[`${itemPrefixCls}-current`] = idx === index;
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
          </ul>}
      </div>
    );
  }
}
