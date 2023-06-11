const spellCheck = (phrase) => {
  const wordBank = ["one", "two", "three"];
  const outputArray = phrase.split(" ").map(word => {
    if (wordBank.includes(word)) {
      return word
    }
    return `~${word}~`
  })
  return outputArray.join(" ")
}

module.exports = spellCheck;