import React from 'react';
import ReactDOM from 'react-dom';

const appElement = document.getElementById('example');

class App extends React.Component {
  render () {
    return (<span>123</span>);
  }
}

ReactDOM.render(<App />, appElement);
