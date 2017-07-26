import ToolbarEmoji from './toolbarEmoji';

export default function Emoji (props) {
  const quill = props.quill;
  const item = new ToolbarEmoji(quill);
  console.log(quill, item);
  return null;
}
