const gradeCount = (grade, array) => {
  return array.filter(item => item === grade).length;
}

module.exports = gradeCount;