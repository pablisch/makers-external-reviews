const grades = (gradeList) => {
  const gradeArray = gradelist.split(", ");
  const validGrades = ["green", "amber", "red"];
  const gradeCounts = []
  validGrades.forEach((grade) => {
    gradeCounts.push(gradeArray.filter((current) => current === grade).length);
  })
  console.log(`grades = ${gradeCounts}`)
}

module.exports = grades;