import React from 'react';
import ReactDOM from 'react-dom';
import 'quill/dist/quill.snow.css';
import Editor from '../../lib/';

const appElement = document.getElementById('example');


ReactDOM.render(<Editor />, appElement);
