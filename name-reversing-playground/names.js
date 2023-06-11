const namesShuffle = (names) => {
  return names.split(" ").reverse().join(" ")
}

const getChar = (num) => {
  return String.fromCharCode(num)
}

module.exports = {namesShuffle, getChar};