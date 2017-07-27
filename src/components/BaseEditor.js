import React from 'react';
import Quill from 'quill';
import isEqual from 'lodash.isequal';

export default class BaseEditor extends React.Component {
  setEditorSelection (editor, r) {
    const range = r;
    if (range) {
      // Validate bounds before applying.
      const length = editor.getLength();
      range.index = Math.max(0, Math.min(range.index, length - 1));
      range.length = Math.max(
        0,
        Math.min(range.length, length - 1 - range.index)
      );
    }
    editor.setSelection(range);
  }
  /*
  Replace the contents of the editor, but keep
  the previous selection hanging around so that
  the cursor won't move.
  */
  setEditorContents (editor, value) {
    if (typeof value === 'string' && value === editor.root.innerHTML) return;
    const delta = this.convertHtml(value);
    if (isEqual(delta, this.convertHtml(editor.root.innerHTML))) return;
    const sel = editor.getSelection();
    editor.setContents(delta || []);
    if (sel) this.setEditorSelection(editor, sel);
  }

  setEditorReadOnly (editor, value) {
    if (value) {
      editor.disable();
    } else {
      editor.enable();
    }
  }
  createEditor ($el, config) {
    const editor = new Quill($el, config);
    this.hookEditor(editor);
    return editor;
  }
  hookEditor (editor) {
    // Expose the editor on change events via a weaker,
    // unprivileged proxy object that does not allow
    // accidentally modifying editor state.
    const unprivilegedEditor = this.makeUnprivilegedEditor(editor);

    this.handleTextChange = (delta, oldDelta, source) => {
      if (this.onEditorChangeText) {
        this.onEditorChangeText(
          editor.root.innerHTML,
          editor.getContents(),
          delta,
          oldDelta,
          source,
          unprivilegedEditor
        );
        this.onEditorChangeSelection(
          editor.getSelection(),
          source,
          unprivilegedEditor
        );
      }
    };

    this.handleSelectionChange = function (range, oldRange, source) {
      if (this.onEditorChangeSelection) {
        this.onEditorChangeSelection(range, source, unprivilegedEditor);
      }
    }.bind(this);
    this.handlePaste = function (e) {
      this.onPaste(e);
    }.bind(this);
    this.handleFocus = function (e) {
      this.onFocus(e);
    }.bind(this);
    this.handleBlur = function (e) {
      this.onBlur(e);
    }.bind(this);
    editor.on('text-change', this.handleTextChange);
    editor.on('selection-change', this.handleSelectionChange);
    editor.root.addEventListener('paste', this.handlePaste);
    editor.root.addEventListener('focus', this.handleFocus);
    editor.root.addEventListener('blur', this.handleBlur);
  }

  unhookEditor (editor) {
    editor.off('selection-change');
    editor.off('editor-change');
    editor.root.removeEventListener('paste', this.handlePaste);
    editor.root.removeEventListener('focus', this.handleFocus);
    editor.root.removeEventListener('blur', this.handleBlur);
  }

  /*
  Returns an weaker, unprivileged proxy object that only
  exposes read-only accessors found on the editor instance,
  without any state-modificating methods.
  */
  makeUnprivilegedEditor (editor) {
    const { getLength, getText, getContents, getSelection, getBounds } = editor;
    return {
      getLength (...arg) {
        return getLength.apply(editor, arg);
      },
      getText (...arg) {
        return getText.apply(editor, arg);
      },
      getContents (...arg) {
        return getContents.apply(editor, arg);
      },
      getSelection (...arg) {
        return getSelection.apply(editor, arg);
      },
      getBounds (...arg) {
        return getBounds.apply(editor, arg);
      }
    };
  }
}
