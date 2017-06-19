import React from 'react';
import ReactDOM from 'react-dom';
import 'quill/dist/quill.snow.css';
import Editor from '../../lib/';
import Count from '../../lib/plugins/count/';
import Meniton from '../../lib/plugins/mention/';
import './app.css';

const formatter = data => data.map(item => ({
  text: `${item}`
}));
const defaultModules = {
  toolbar: [
    [{ font: [] }, { size: [] }],
    [{ align: [] }, 'direction'],
    [{ header: 1 }, { header: 2 }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image'],
    ['clean']
  ]
};
const source = (new Array(20).fill(1)).map((i, j) => (`${j}asdfghjkl`));
const plugins = [<Count limit={100} />,
  <Meniton source={source} formatter={formatter} />,
  <Meniton delimiter="#" mentionFormatter={data => `#${data.text}#`} source={source} formatter={formatter} insertMode="TEXT_NODE" />];
const appElement = document.getElementById('example');


ReactDOM.render(<div>
  <Editor plugins={plugins} defaultValue="@" modules={defaultModules} />
  <Editor plugins={plugins} defaultValue="#" modules={defaultModules} />
</div>, appElement);
