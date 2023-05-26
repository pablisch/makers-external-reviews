const spellCheck = (phrase) => {
  const wordBank = ["one", "two", "three"];
  const phraseArray = phrase.split(" ");
  console.log(phraseArray)
  const outputArray = phraseArray.map(word => {
    if (wordBank.includes(word)) { // if wordBank contains word
      return word
    }
    return `~${word}~` // if wordBank does not contain word
  })
  return outputArray.join(" ")
}

module.exports = spellCheck;