/* eslint-env mocha */

// The following eslint overrides should be removed when refactoring can occur

/* eslint react/no-find-dom-node: "warn",
          react/no-render-return-value: "warn"
*/
/* eslint-disable */
import TestUtils from 'react-dom/test-utils';
import React from 'react';
import sinon from 'sinon';
import expect from 'expect';
import ReactDOM from 'react-dom';
import Editor from '../src/components/Editor';
import { renderEditor, unmountEditor, emptyDOM } from './helper';

const Simulate = TestUtils.Simulate;

function getDefaultProps () {
  return {
  };
}


describe('Editor', () => {
  afterEach('check if test cleaned up rendered editor', emptyDOM);
  it('can be initially', () => {
    const component = renderEditor(getDefaultProps(), <span>hello</span>);
    expect(component.editor.getText().trim()).toEqual('hello');
  });
});
