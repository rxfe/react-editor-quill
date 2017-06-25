import React from 'react';
import ReactDOM from 'react-dom';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import Editor from '../../lib/';
import Count from '../../lib/plugins/count/';
import Meniton from '../../lib/plugins/mention/';
import './app.css';

const Delta = Quill.import('delta');
const formatter = data =>
  data.map(item => ({
    text: `${item}`
  }));
const defaultModules = {
  toolbar: [
    [{ font: [] }, { size: [] }],
    [{ align: [] }, 'direction'],
    [{ header: 1 }, { header: 2 }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' }
    ],
    ['link', 'image'],
    ['clean']
  ]
};
const source = new Array(20).fill(1).map((i, j) => `${j}asdfghjkl`);
const plugins = [
  <Count limit={100} />,
  <Meniton source={source} formatter={formatter} />,
  <Meniton
    delimiter="#"
    mentionFormatter={data => `#${data.text}#`}
    source={source}
    formatter={formatter}
    insertMode="TEXT_NODE"
  />
];
const appElement = document.getElementById('example');
function handlerPaste (evt) {
  const editor = this.editor;
  const clipboardData = evt.clipboardData;
  if (!clipboardData || !clipboardData.items) return;
  for (let i = 0; i < clipboardData.items.length; i++) {
    const item = clipboardData.items[i];
    if (item.kind === 'file' && item.type.match(/^image\//i)) {
      const file = item.getAsFile(); // 获取文件后可直接上传
      const reader = new FileReader();
      reader.onload = function (event) {
        const range = editor.getSelection(true);
        // 更新编辑器内容
        editor.updateContents(new Delta()
          .retain(range.index)
          .delete(range.length)
          .insert({ image: event.target.result })
        , 'user');
      };
      reader.readAsDataURL(file);
    }
  }
}
function hanleSelectImage (file) {
  console.log(file);
}
ReactDOM.render(
  <div>
    <Editor plugins={plugins} defaultValue="@" modules={defaultModules} onPaste={handlerPaste} onSelectImage={hanleSelectImage} />
    <Editor plugins={plugins} defaultValue="#" modules={defaultModules} />
  </div>,
  appElement
);
