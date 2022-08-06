export default function hasValuesFromArray(set, array) {
  let resp = true;
  array.forEach((element) => {
    if (!set.has(element)) {
      resp = false;
    }
  });
  return resp;
}
