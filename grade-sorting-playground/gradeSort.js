const gradeCount = require('./gradeCount')

const gradeSort = (grades) => {
  const gradesArray = grades.split(", ")
  const greenCount = gradeCount("green", gradesArray);
  const amberCount = gradeCount("amber", gradesArray);
  const redCount = gradeCount("red", gradesArray);
  const gradesCounted = []
  if (greenCount > 0) {
    const green = `green:${greenCount}`;
    gradesCounted.push(green);
  }
  if (amberCount > 0) {
    const amber = `amber:${amberCount}`;
    gradesCounted.push(amber);
  }
  if (redCount > 0) {
    const red = `red:${redCount}`;
    gradesCounted.push(red);
  }
  const result = gradesCounted.join("\n");
  // console.log(`result = "${result}"`);
  return result;
}

module.exports = gradeSort;