export default function createInt8TypedArray(length, position, value) {
  if (position >= 0 && position < length) {
    const view = new DataView(new ArrayBuffer(length));
    view.setInt8(position, value);
    return view;
  }
  throw Error('Position outside range');
}
