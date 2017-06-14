import React from 'react';
import ReactDOM from 'react-dom';
import 'quill/dist/quill.snow.css';
import Editor from '../../lib/';
import HelloWorld from '../../lib/plugins/hello-world/';
import Meniton from '../../lib/plugins/mention/';
import './app.css';

const formatter = data => data.map(item => ({
  text: `${item}`
}));
const defaultModules = {
  toolbar: [
    [{ font: [] }, { size: [] }],
    // [{ font: [] }, { align: [] }, 'direction'],
    [{ align: [] }],
    [{ header: 1 }, { header: 2 }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image'],
    ['clean']
  ]
};
const source = ['11111111111', '22222222222', '333333333333', '444444444444'];
const plugins = [<HelloWorld />,
  <Meniton source={source} formatter={formatter} module={defaultModules} />,
  <Meniton delimiter="#" source={source} formatter={formatter} module={defaultModules} />];
const appElement = document.getElementById('example');


ReactDOM.render(<div style={{ position: 'relative' }} >
  <Editor plugins={plugins} />
</div>, appElement);
