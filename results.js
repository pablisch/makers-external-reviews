class Results {
  constructor(grades) {
    this.grades = grades
    this.gradesArray = grades.split(', ')
  }

  countResultsOfAGrade(grade) {
    return this.gradesArray.filter(item => item.toUpperCase() === grade.toUpperCase()).length
  }

  collectCounts() {
    return {
      green: this.countResultsOfAGrade("Green"),
      amber: this.countResultsOfAGrade("Amber"),
      red: this.countResultsOfAGrade("Red"),
    }
    
  }
}

module.exports = Results;