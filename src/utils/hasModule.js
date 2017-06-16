export default function (quill, modulePath) {
  let result;
  try {
    result = quill.imports[modulePath];
  } catch (err) {
    result = null;
  }
  return !!result;
}
