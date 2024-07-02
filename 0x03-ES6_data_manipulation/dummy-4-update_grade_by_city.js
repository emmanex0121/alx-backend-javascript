export default function updateStudentGradeByCity(stdList, city, newGrades) {
  const filterByCity = stdList.filter((studentByCity) => studentByCity.location === city);

  const assignGrades = filterByCity.map((student) => {
    const gradeRecord = newGrades.find((grade) => grade.studentId === student.id);
    if (gradeRecord) {
      student.grade = gradeRecord.grade;
    } else {
      student.grade = 'N/A';
    }
    return student;
  });

  return assignGrades;
}
