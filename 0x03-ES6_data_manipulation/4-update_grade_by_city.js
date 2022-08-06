export default function updateStudentGradeByCity(arrList, city, newGrades) {
  const newlist = [];
  for (let grade of newGrades) {
    let list = arrList.filter((obj) => obj.id === grade.studentId)
      .map((obj) => obj.grade = grade.grade);
    newlist.push(list);
  }
  return newlist;
}
