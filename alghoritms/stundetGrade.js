function gradingStudents(grades) {
  // Write your code here
  const limitRounding = 38;
  const rounded = grades.map((grade) => {
    if (grade < limitRounding) return grade;

    const gradeRounded = Math.ceil(grade / 5) * 5;
    return gradeRounded - grade < 3 ? gradeRounded : grade;
  });

  console.log(rounded);
  return rounded;
}

const grades = [73, 67, 38, 33];

gradingStudents(grades);
