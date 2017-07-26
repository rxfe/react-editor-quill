import React, { Component, PropTypes } from 'react';

export default class HelloWorld extends Component {
  static propTypes = {
    quill: PropTypes.objectOf(PropTypes.any)
  }
  constructor (props) {
    super(props);
    this.state = {
      value: 'hello world!'
    };
  }
  render () {
    return (<span>{this.state.value}</span>);
  }
}
