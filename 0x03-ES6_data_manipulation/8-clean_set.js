export default function cleanSet(set, startString) {
  let arr = []
  let text = '';
  if (startString && typeof startString === 'string') {
    const newArr = [...set].filter((element) => element.startsWith(startString));
    newArr.forEach((element) => arr.push(element.slice(startString.length)));
  }
text = arr.join('-');
  return text;
}
