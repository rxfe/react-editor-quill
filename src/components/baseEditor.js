import React from 'react';
import Quill from 'quill';

export default class BaseEditor extends React.Component {

  hookEditor (editor) {
    // Expose the editor on change events via a weaker,
    // unprivileged proxy object that does not allow
    // accidentally modifying editor state.
    const unprivilegedEditor = this.makeUnprivilegedEditor(editor);

    this.handleTextChange = (delta, oldDelta, source) => {
      if (this.onEditorChangeText) {
        this.onEditorChangeText(
          editor.root.innerHTML, delta, source,
          unprivilegedEditor
        );
        this.onEditorChangeSelection(
          editor.getSelection(), source,
          unprivilegedEditor
        );
      }
    };

    this.handleSelectionChange = function (range, oldRange, source) {
      if (this.onEditorChangeSelection) {
        this.onEditorChangeSelection(
          range, source,
          unprivilegedEditor
        );
      }
    }.bind(this);

    editor.on('text-change', this.handleTextChange);
    editor.on('selection-change', this.handleSelectionChange);
  }

  unhookEditor (editor) {
    editor.off('selection-change');
    editor.off('editor-change');
  }

  setEditorReadOnly (editor, value) {
    if (value) {
      editor.disable();
    } else {
      editor.enable();
    }
  }

  /*
  Replace the contents of the editor, but keep
  the previous selection hanging around so that
  the cursor won't move.
  */
  setEditorContents (editor, value) {
    const sel = editor.getSelection();
    editor.clipboard.dangerouslyPasteHTML(value || '');
    if (sel) this.setEditorSelection(editor, sel);
  }

  setEditorSelection (editor, r) {
    const range = r;
    if (range) {
      // Validate bounds before applying.
      const length = editor.getLength();
      range.index = Math.max(0, Math.min(range.index, length - 1));
      range.length = Math.max(0, Math.min(range.length, (length - 1) - range.index));
    }
    editor.setSelection(range);
  }

  createEditor ($el, config) {
    const editor = new Quill($el, config);
    this.hookEditor(editor);
    return editor;
  }
  /*
  Returns an weaker, unprivileged proxy object that only
  exposes read-only accessors found on the editor instance,
  without any state-modificating methods.
  */
  makeUnprivilegedEditor (editor, ...arg) {
    const {
      getLength,
      getText,
      getContents,
      getSelection,
      getBounds
    } = editor;
    return {
      getLength () { return getLength.apply(editor, arg); },
      getText () { return getText.apply(editor, arg); },
      getContents () { return getContents.apply(editor, arg); },
      getSelection () { return getSelection.apply(editor, arg); },
      getBounds () { return getBounds.apply(editor, arg); },
    };
  }

}
