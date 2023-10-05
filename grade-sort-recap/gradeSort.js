const gradeSort = (grades) => {
  if (grades === "") return "No grades entered";

  const possibleGrades = ["Green", "Amber", "Red"];
  const possibleGradesLower = ["green", "amber", "red"];
  const sortedGrades = [];
  const gradesArray = grades.split(", ")

  const gradesCount = gradesArray.reduce((acc, curr) => {
    const grade = curr.toLowerCase();
    if (!possibleGradesLower.includes(grade)) throw new Error("Invalid grade entry error");
    if (!acc[grade]) acc[grade] = 0;
    acc[grade]++;

    return acc;
  }, {});

  // console.log('gradesCount:', gradesCount)
  
  possibleGrades.map((grade) => {
    const gradeCount = grade.toLowerCase();
    if (gradesCount[gradeCount]) sortedGrades.push(`${grade}: ${gradesCount[gradeCount]}`);
  })
  
  return sortedGrades.join("\n")
}

module.exports = gradeSort;