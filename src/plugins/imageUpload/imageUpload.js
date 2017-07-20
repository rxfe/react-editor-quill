import Quill from 'quill';

const Delta = Quill.import('delta');

function handlerPaste (evt) {
  const editor = this.quill;
  const clipboardData = evt.clipboardData;
  if (!clipboardData || !clipboardData.items) return;
  for (let i = 0; i < clipboardData.items.length; i++) {
    const item = clipboardData.items[i];
    if (item.kind === 'file' && item.type.match(/^image\//i)) {
      evt.stopPropagation();
      evt.preventDefault();
      const file = item.getAsFile(); // 获取文件后可直接上传
      const reader = new FileReader();
      reader.onload = (event) => {
        const range = editor.getSelection(true);
        const result = event.target.result;
        const dateTime = new Date().getTime().toString();
        // 更新编辑器内容
        editor.updateContents(
          new Delta()
            .retain(range.index)
            .delete(range.length)
            .insert({ image: this.defaultImg }, { alt: dateTime }),
          'user'
        );
        editor.setSelection(range.index + 1);
        setTimeout(() => {
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
          editor.updateContents(
            new Delta()
              .retain(imgIndex - 1)
              .delete(1)
              .insert({ image: result }),
            'user'
          );
        }, 5000);
      };
      reader.readAsDataURL(file);
    }
  }
}
export default function imageUpload (props) {
  console.log(props.quill);
  const quill = props.quill;
  quill.root.addEventListener('paste', handlerPaste.bind(props));
  return null;
}
imageUpload.defaultProps = {
  defaultImg: 'http://img.lanrentuku.com/img/allimg/1212/5-121204193R5-50.gif'
};
