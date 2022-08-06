export default function getStudentsByLocation(arrList, city) {
  if (typeof arrList === 'object') {
    return arrList.filter((obj) => obj.location === city);
  }
  return [];
}
