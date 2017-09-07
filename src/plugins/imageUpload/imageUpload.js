import Quill from 'quill';
import { PropTypes } from 'react';
import isQuillHasModule from '../../utils/hasModule';
import ImageBlot from './imageBlot';

const Delta = Quill.import('delta');

if (!isQuillHasModule(Quill, 'formats/newImage')) {
  Quill.register({
    'formats/newImage': ImageBlot
  });
}
function insertImage (file) {
  if (!this.validator(file)) return null;
  const editor = this.quill;
  const dateTime = new Date().getTime().toString();
  const range = editor.getSelection(true);
  const scrollTop = this.quill.scrollingContainer.scrollTop;
  setTimeout(() => {
    this.quill.selection.update(Quill.sources.SILENT);
    // range.length contributes to delta.length()
    // 更新编辑器内容
    editor.updateContents(
      new Delta().retain(range.index).delete(range.length).insert(
        { newImage: this.defaultImg },
        {
          alt: dateTime,
          width: this.defaultWidth,
          height: this.defaultHeight,
          class: this.defaultImgPrefixCls
        }
      ),
      'user'
    );
    this.quill.setSelection(
      range.index - range.length + 1,
      Quill.sources.SILENT
    );
    this.quill.scrollingContainer.scrollTop = scrollTop;
    this.quill.selection.scrollIntoView();
  }, 1);
  return this.uploadFile(file).then(({ src, width, height, alt }) => {
    const delta = editor.getContents();
    let imgIndex = 0;
    let isStop = false;
    delta.forEach((op) => {
      if (!isStop) {
        imgIndex += op.insert.length || 1;
      }
      if (op.attributes && op.attributes.alt === dateTime) {
        isStop = true;
      }
    });
    // const currentRange = editor.getSelection(true);
    editor.updateContents(
      new Delta()
        .retain(imgIndex - 1)
        .delete(1)
        .insert({ image: src }, { width, height, alt }),
      'user'
    );
    // editor.setSelection(currentRange.index + 1);
    return src;
  });
}

function handlerPaste (evt) {
  const clipboardData = evt.clipboardData;
  if (!clipboardData || !clipboardData.items) return;
  for (let i = 0; i < clipboardData.items.length; i++) {
    const item = clipboardData.items[i];
    if (item.kind === 'file' && item.type.match(/^image\//i)) {
      evt.stopPropagation();
      evt.preventDefault();
      const file = item.getAsFile(); // 获取文件后可直接上传
      insertImage.call(this, file);
    }
  }
}
function handlerImage () {
  const container = this.quill.getModule('toolbar').container;
  let fileInput = container.querySelector('input.ql-image[type=file]');
  if (fileInput == null) {
    fileInput = document.createElement('input');
    fileInput.setAttribute('type', 'file');
    fileInput.setAttribute(
      'accept',
      'image/png, image/gif, image/jpeg, image/bmp, image/x-icon'
    );
    fileInput.classList.add('ql-image');
    fileInput.addEventListener('change', () => {
      if (fileInput.files != null && fileInput.files[0] != null) {
        const file = fileInput.files[0];
        insertImage.call(this, file);
      }
    });
    container.appendChild(fileInput);
  }
  fileInput.click();
}
export default function ImageUpload (props) {
  const quill = props.quill;
  const toolbar = quill.getModule('toolbar');
  if (props.uploadFile) {
    quill.root.addEventListener('paste', handlerPaste.bind(props));
    toolbar.addHandler('image', handlerImage.bind(props));
  }
  return null;
}
ImageUpload.propTypes = {
  uploadFile: PropTypes.func.isRequired,
  validator: PropTypes.func,
  defaultImgPrefixCls: PropTypes.string
  // quill: PropTypes.objectOf(PropTypes.any).isRequired,
};
ImageUpload.defaultProps = {
  defaultImg: 'http://file.digitaling.com/eImg/uimages/20150907/1441607669881619.gif',
  defaultWidth: 200,
  defaultHeight: 150,
  defaultImgPrefixCls: 'loading-img',
  validator: () => true
};
