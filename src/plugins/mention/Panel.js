
import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Panel = ({ onSelect, list, style, visible, idx, formatter, prefixCls }) => {
  const clsObj = {};
  clsObj[`${prefixCls}-panel`] = true;
  clsObj[`${prefixCls}-panel-visible`] = visible;
  const cls = classNames(clsObj);
  window.setTimeout(() => {
    try {
      const panel = document.querySelector('.kuma-mention-panel-visible');
      const current = document.querySelector('.kuma-mention-panel-item-current');
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
    } catch (error) {
      console.warn(error);
    }
  }, 0);
  return (
    <ul className={cls} style={style}>
      {
        list.map((item, index) => {
          const itemClsObj = {};
          itemClsObj[`${prefixCls}-panel-item`] = true;
          itemClsObj[`${prefixCls}-panel-item-current`] = idx === index;
          const itemCls = classNames(itemClsObj);
          return (
            <li // eslint-disable-line
              className={itemCls}
              key={item.id || index}
              onClick={() => onSelect(item)}
            >
              <div dangerouslySetInnerHTML={{ __html: formatter(item) }} />
            </li>
          );
        })
      }
    </ul>
  );
};

Panel.displayName = 'quill-mention-panel';
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

export default Panel;
