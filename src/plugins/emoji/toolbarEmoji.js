import React from 'react';
import ReactDOM from 'react-dom';
import defaultEmojiList from './emojiList';
import EmojiContainer from './emojiContainer';
/*
  eslint-disable no-param-reassign
*/
export default class ToolbarEmoji {
  constructor (quill, emojiList = defaultEmojiList) {
    this.quill = quill;
    this.toolbar = quill.getModule('toolbar');
    const emojiBtns = this.toolbar.container.getElementsByClassName('ql-emoji');
    // this.toolbar.addHandler('emoji', () => {});
    if (emojiBtns) {
      [].slice.call(emojiBtns).forEach((emojiBtn) => {
        const value = {
          activeIndex: 0,
          isShow: false
        };
        emojiBtn.innerHTML = `<svg viewbox="0 0 18 18"><circle class="ql-fill" cx="7" cy="7" r="1"></circle><circle class="ql-fill" cx="11" cy="7" r="1"></circle><path class="ql-stroke" d="M7,10a2,2,0,0,0,4,0H7Z"></path><circle class="ql-stroke" cx="9" cy="9" r="6"></circle></svg>`; // eslint-disable-line
        emojiBtn.onclick = function (e) {
          debugger
          value.isShow = true;
          quill.focus();
        };
        const container = document.createElement('div');
        ReactDOM.render(<EmojiContainer value={value} emojiList={emojiList} />, container);
        emojiBtn.append(container);
      });
    }
  }
}
