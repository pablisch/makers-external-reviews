const spellCheck = (phrase) => {
  const wordBank = ["one", "two", "three"];
  if (wordBank.includes(phrase)) {
    return phrase
  } else {
    return `~${phrase}~`
  }
}

module.exports = spellCheck;