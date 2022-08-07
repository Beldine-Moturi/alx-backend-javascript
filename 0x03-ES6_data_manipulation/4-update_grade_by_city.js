export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const newList = getListStudents.filter((obj) => obj.location === city).map((element) => {
    const grade = newGrades.find((obj) => obj.studentId === element.id);
    element.grade = grade !== undefined ? grade.grade: 'N/A';
    return element;
  });
  return newList;
} 
