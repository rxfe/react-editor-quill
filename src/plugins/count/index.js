import React, { Component, PropTypes } from 'react';

function getLength (ops = []) {
  let length = 0;
  ops.forEach((delta) => {
    if (delta.insert && (typeof delta.insert === 'string')) {
      length += delta.insert.replace(/\s/g, '').length;
    } else {
      length += 1;
    }
  });
  return length;
}

const Label = ({ count, limit }) => {
  const overCount = limit - count;
  return (
    <span>
      {`已经输入${count}个字符,
        ${overCount < 0 ? `超出了${Math.abs(overCount)}` : `还能输入${overCount}`}
      个字符`}
    </span>
  );
};
Label.propTypes = {
  count: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired
};

export default class Count extends Component {
  static propTypes = {
    quill: PropTypes.objectOf(PropTypes.any),
    limit: PropTypes.number,
    children: PropTypes.element
  }
  constructor (props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentWillMount () {
    this.props.quill.on('text-change', () => {
      const count = getLength(this.props.quill.getContents());
      this.setState({
        count
      });
    });
  }
  renderChildren () {
    const { count } = this.state;
    const { limit } = this.props;
    const child = this.props.children || <Label count={count} limit={limit} />;
    const cp = {
      limit,
      count
    };
    return React.cloneElement(child, cp);
  }
  render () {
    return (
      <div>
        {this.renderChildren()}
      </div>
    );
  }
}
