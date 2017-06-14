import Quill from 'quill';
import Editor from './components/Editor';
import Cursor from './utils/CursorFiexd';

const Parchment = Quill.import('parchment');

Quill.register({ 'blots/cursor': Cursor }, true);
Parchment.register(Cursor);
const QuillStyle = Parchment.Attributor.Style;
const styleOptions = { scope: Parchment.Scope.INLINE };
Quill.register(new QuillStyle('size', 'font-size', styleOptions), true);
Quill.register(new QuillStyle('font', 'font-family', styleOptions), true);

export default Editor;

export { Quill };
