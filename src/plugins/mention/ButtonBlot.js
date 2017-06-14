import Quill from 'quill';

const Embed = Quill.import('blots/embed');
class ButtonBlot extends Embed {
  static create (value) {
    const node = super.create(value);
    node.value = value;
    node.setAttribute('type', 'button');
    node.setAttribute('tabindex', '-1');
    return node;
  }
  // static formats(domNode) {
  //   return ATTRIBUTES.reduce(function(formats, attribute) {
  //     if (domNode.hasAttribute(attribute)) {
  //       formats[attribute] = domNode.getAttribute(attribute);
  //     }
  //     return formats;
  //   }, {})
  // }

  static value (domNode) {
    return domNode.value;
  }
  format (name, value) {
    if (name === 'mention' && value) {
      this.domNode.dataset.value = value;
    } else {
      super.format(name, value);
    }
  }
}

ButtonBlot.blotName = 'mention';
ButtonBlot.tagName = 'input';
ButtonBlot.className = 'kuma-mention-node';
export default ButtonBlot;
