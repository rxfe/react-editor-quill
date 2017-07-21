import Quill from 'quill';

const tempCont = document.createElement('div');

function deltaToHtml (delta) {
  const editor = new Quill(tempCont);
  editor.setContents(delta);
  return editor.root.innerHTML;
}
export default deltaToHtml;
