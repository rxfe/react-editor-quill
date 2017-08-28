import Quill from 'quill';

const ATTRIBUTES = ['data-id'];

const Embed = Quill.import('blots/embed');
class ButtonBlot extends Embed {
  static create (value) {
    const node = super.create(value);
    node.value = value;
    node.setAttribute('type', 'button');
    node.setAttribute('tabindex', '-1');
    return node;
  }
  static formats (domNode) {
    return ATTRIBUTES.reduce((formats, attribute) => {
      if (domNode.hasAttribute(attribute)) {
        formats[attribute] = domNode.getAttribute(attribute);
      }
      return formats;
    }, {});
  }

  static value (domNode) {
    return domNode.value;
  }
  format (name, value) {
    if (ATTRIBUTES.indexOf(name) > -1 && value) {
      this.domNode.setAttribute(name, value);
    } else {
      super.format(name, value);
    }
  }
}

ButtonBlot.blotName = 'mention';
ButtonBlot.tagName = 'input';
ButtonBlot.className = 'quill-mention-node';
export default ButtonBlot;
