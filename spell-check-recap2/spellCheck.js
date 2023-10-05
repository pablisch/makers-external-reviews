const spellCheck = (phrase) => {
  const wordbank = ["one", "two", "three"];

  if (phrase === "") throw new Error("empty string input error");
  if (typeof phrase !== 'string') throw new Error("non-string input error");

  const phraseArray = phrase.split(" ");

  const correctedArray = phraseArray.map((word) => {
    if (wordbank.includes(word.toLowerCase())) {
      return word;
    } else {
      return `~${word}~`;
    }
  })
  return correctedArray.join(" ");
}

module.exports = spellCheck;