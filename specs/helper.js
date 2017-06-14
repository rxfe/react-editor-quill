// The following eslint overrides should be removed when refactoring can occur

/* eslint react/no-render-return-value: "warn" */
import React from 'react';
import ReactDOM from 'react-dom';
import Editor from '../src/components/Editor';

const divStack = [];

export function renderEditor (props, children, callback) {
  const myProps = {
    ...props
  };
  const currentDiv = document.createElement('div');
  divStack.push(currentDiv);
  document.body.appendChild(currentDiv);
  return ReactDOM.render(
    <Editor {...myProps}>{children}</Editor>
  , currentDiv, callback);
}

export const unmountEditor = () => {
  const currentDiv = divStack.pop();
  ReactDOM.unmountComponentAtNode(currentDiv);
  document.body.removeChild(currentDiv);
};

export const emptyDOM = () => {
  while (divStack.length) {
    unmountEditor();
  }
};
