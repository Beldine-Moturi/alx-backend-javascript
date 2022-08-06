export default function getStudentIdsSum(arrList) {
  if (typeof arrList === 'object') {
    return arrList.map((obj) => obj.id)
      .reduce((prevVal, currVal) => prevVal + currVal);
  }
  return [];
}
