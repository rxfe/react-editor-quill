import Quill from 'quill';
import Editor from './components/Editor';

const Parchment = Quill.import('parchment');
const QuillStyle = Parchment.Attributor.Style;
const styleOptions = { scope: Parchment.Scope.INLINE };
Quill.register(new QuillStyle('size', 'font-size', styleOptions), true);
Quill.register(new QuillStyle('font', 'font-family', styleOptions), true);

export default Editor;

export { Quill };
