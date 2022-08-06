export default function cleanSet(set, startString) {
  const arr = [];
  if (startString.length !== 0) {
    for (const one of set) {
      if (one.includes(startString, 0)) {
        arr.push(one.slice(startString.length));
        // console.log(str);
      }
    }
    return arr.join('-');
  }
  return '';
}
