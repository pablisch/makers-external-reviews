const spellCheck = (phrase) => {
  const wordBank = ["one", "two", "three"];
  const phraseArray = phrase.split(" ");
  console.log(phraseArray)
  const outputArray = []
  phraseArray.forEach(word => {
    if (wordBank.includes(word)) {
      outputArray.push(word)
    } else {
      outputArray.push(`~${word}~`)
    }
  })
  return outputArray.join(" ")
}

module.exports = spellCheck;