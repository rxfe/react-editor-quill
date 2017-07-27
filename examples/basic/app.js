import React from 'react';
import ReactDOM from 'react-dom';
import 'quill/dist/quill.snow.css';
import { map } from 'lodash';
import Editor from '../../lib/';
import Count from '../../lib/plugins/count/';
import Meniton from '../../lib/plugins/mention/';
import ImageUpload from '../../lib/plugins/imageUpload';
import deltaToHtml from '../../lib/utils/deltaToHtml';
import Emoji from '../../lib/plugins/emoji';
import './app.css';
import '../../styles/mention.css';
import '../../styles/emoji.css';

const formatter = data =>
  data.map(item => ({
    text: `${item}`
  }));
const defaultModules = {
  toolbar: [
    [{ font: [] }, { size: [] }],
    [{ align: [] }, 'direction'],
    [{ header: 1 }, { header: 2 }],
    ['bold', 'italic', 'underline', 'strike', 'emoji'],
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
const source = map(new Array(20), (item, index) => `${index}-quill`);
const appElement = document.getElementById('example');

class App extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      source: [],
      value: ''
    };
  }
  handleClick () {
    console.log(this.target.getEditor().getContents());
  }
  render () {
    const plugins = [
      <Emoji />,
      <Count limit={100} />,
      <Meniton
        source={(str, next) => {
          next(source.filter(item => item.indexOf(str) > -1));
        }}
        formatter={formatter}
      />,
      <Meniton
        delimiter="#"
        mentionFormatter={data => `#${data.text}#`}
        source={this.state.source}
        formatter={formatter}
        insertMode="TEXT_NODE"
      />,
      <ImageUpload
        uploadFile={file =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
              const result = event.target.result;
              setTimeout(() => {
                resolve({ src: result });
              }, 1000);
            };
            reader.onerror = (error) => {
              reject(error);
            };
            reader.readAsDataURL(file);
          })}
      />
    ];
    return (
      <div>
        <Editor
          plugins={plugins}
          onChange={(value, delta) => this.setState({ value })}
          modules={defaultModules}
          ref={target => this.target = target}
          value={this.state.value}
        />
        <Editor plugins={plugins} defaultValue="#" modules={defaultModules} />
        <div
          dangerouslySetInnerHTML={{ __html: deltaToHtml([{ insert: '123' }]) }}
        />
        <button onClick={this.handleClick}>
          123
        </button>
      </div>
    );
  }
}
ReactDOM.render(<App />, appElement);
