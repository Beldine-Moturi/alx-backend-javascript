export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const newList = getListStudents.filter((obj) => obj.location === city);
  newList.forEach(element => {
    const grade = newGrades.find((obj) => obj.studentId === element.id);
    element.grade = grade !== undefined ? grade.grade: 'N/A';
  });
  return newList;
} 
