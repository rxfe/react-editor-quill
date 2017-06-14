import Quill from 'quill';

const Cursor = Quill.import('blots/cursor');
const restore = Cursor.prototype.restore;
Cursor.prototype.restore = function () {
  // if (this.selection.composing) return
  try {
    const tempComposing = this.selection.composing;
    this.selection.composing = false;
    restore.call(this);
    this.selection.composing = tempComposing;
  } catch (err) {
    console.log(err);
    return // eslint-disable-line
  }
};

export default Cursor;
