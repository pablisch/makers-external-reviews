const capitalise = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const gradeSort = (gradesInput) => {
  if (gradesInput === '') return "There was no grades provided"
  if (typeof gradesInput !== 'string') throw new Error("Invalid input type error: Not a string")
  const gradesInputSplit = gradesInput.split(/,\s*/)
  const gradesInputSanitised = gradesInputSplit.map(grade => grade.trim())
  const gradesArray = gradesInputSanitised.map(grade => capitalise(grade));

  const possibleGrades = ["Green", "Amber", "Red"];
  const countedGradesArray = [];

  possibleGrades.map((grade) => {
    const gradeCounter = gradesArray.reduce((count, current) => {
      if (grade === current) count++;
      return count;
    }, 0)
    if (gradeCounter > 0) countedGradesArray.push(`${grade}: ${gradeCounter}`)
  })

  return countedGradesArray.join("\n");
}

module.exports = gradeSort;