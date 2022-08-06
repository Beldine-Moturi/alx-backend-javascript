export default function setFromArray(array) {
  const set = new Set();
  for (const one of array) {
    set.add(one);
  }
  return set;
}
