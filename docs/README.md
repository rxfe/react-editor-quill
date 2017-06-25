# react-editor-quill

> Accessible rich editor component for React.JS

We maintain that accessibility is a key component of any modern web application.  As such, we have created this modal in such a way that it fulfills the accessibility requirements of the modern web.  We seek to keep the focus on accessibility while providing a functional, capable modal component for general use.

## General Usage

The following is an example of using react-editor-quill specifying all the possible props and options:

```js
import ReactEditor from 'react-editor-quill';

<ReactEditor
  value={this.state.value}
  defaultValue={this.state.value}
  onChange={(text, delta, source, editor) => {}}
  onPaste={(event) => {}}
  onChangeSelection={(range, source, editor) => {}}
  onSelectImage={(file) => {}}
/>
```

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install react-editor-quill
```


## License

MIT
