import Quill from 'quill';

const ImageBlot = Quill.import('formats/image');

const ATTRIBUTES = ['alt', 'height', 'width', 'class'];

class Image extends ImageBlot {
  static formats (domNode) {
    return ATTRIBUTES.reduce((formats, attribute) => {
      if (domNode.hasAttribute(attribute)) {
        formats[attribute] = domNode.getAttribute(attribute);
      }
      return formats;
    }, {});
  }

  format (name, value) {
    if (ATTRIBUTES.indexOf(name) > -1) {
      if (value) {
        this.domNode.setAttribute(name, value);
      } else {
        this.domNode.removeAttribute(name);
      }
    } else {
      super.format(name, value);
    }
  }
}
Image.blotName = 'newImage';
Image.tagName = 'IMG';

export default Image;
