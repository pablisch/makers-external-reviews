const grades = (gradeList) => {
  const gradeArray = gradeList.split(", ");
  const validGrades = ["green", "amber", "red"];
  const resultArray = []
  validGrades.forEach((grade) => {
    const count = gradeArray.filter((current) => current === grade).length;
    // console.log(grade, count)
    if (count > 0) {
      resultArray.push(`${grade}:${count}`)
    }
  })
  // console.log(`resultArray = ${resultArray}`)
  return resultArray.join("\n")
}

module.exports = grades;