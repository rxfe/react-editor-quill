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
    console.log(this.props.quill);
  }
  render () {
    return (<span>{this.state.value}</span>);
  }
}
