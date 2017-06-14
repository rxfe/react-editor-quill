/* eslint-disable */
import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class Panel extends React.Component {
  render () {
    const { onSelect, list, style, visible, idx, formatter, prefixCls } = this.props;
    const clsObj = {};
    clsObj[`${prefixCls}-panel`] = true;
    clsObj[`${prefixCls}-panel-visible`] = visible;
    const cls = classNames(clsObj);
    return (
      <ul className={cls} style={style}>
        {
          list.map((item, index) => {
            const itemClsObj = {};
            itemClsObj[`${prefixCls}-panel-item`] = true;
            itemClsObj[`${prefixCls}-panel-item-current`] = idx === index;
            const itemCls = classNames(itemClsObj);
            return (<li
              className={itemCls}
              key={item.id || index}
              onClick={() => onSelect(item)}
            >
              <div dangerouslySetInnerHTML={{ __html: formatter(item) }} />
            </li>);
          })
        }
      </ul>
    );
  }
}
Panel.displayName = 'uxcore-mention-panel';
Panel.propTypes = {
  prefixCls: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.any),
  style: PropTypes.objectOf(PropTypes.any),
  idx: PropTypes.number,
  visible: PropTypes.bool.isRequired,
  onSelect: PropTypes.func,
  formatter: PropTypes.func,
};
Panel.defaultProps = {
  prefixCls: '',
  list: [],
  style: {},
  idx: 0,
  onSelect: () => {},
  formatter: '',
};
