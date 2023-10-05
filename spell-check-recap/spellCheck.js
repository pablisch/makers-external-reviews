const spellCheck = (phrase) => {
  if (phrase === "") throw new Error("No input error");
  if (typeof phrase !== 'string') throw new Error("Arg error");
  const wordbank = ["one", "two", "three"];
  const phraseWords = phrase.split(" ")
  // console.log('phraseWords are', phraseWords);

  const correctedWords = phraseWords.map((word) => {
    if (wordbank.includes(word.toLowerCase())) {
      return word;
    } else {
      return `~${word}~`
    }
  })
  // console.log('correctedWords are', correctedWords);
  return correctedWords.join(" ")

}

module.exports = spellCheck;