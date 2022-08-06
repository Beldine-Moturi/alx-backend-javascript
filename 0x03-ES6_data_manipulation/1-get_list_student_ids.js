export default function getListStudentIds(arrList) {
  if (typeof arrList === 'object') {
    return arrList.map((obj) => obj.id);
  }
  return [];
}
