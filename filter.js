const filter = (freqArray, min = 40, max = 1000) => {
  if (freqArray.length === 0) {
    throw "no frequencies supplied"
  } else if (!Array.isArray(freqArray)) {
    throw "Frequency input must be an array"
  } else if (freqArray.some(isNaN)) {
    throw "Only integers are allowed"
  }
  const outputArray = freqArray.map((freq) => {
    if (freq > max) {
      return max
    } else if (freq < min) {
      return min
    } else {
      return freq
    }
  })
  console.log(`freqArray = ${freqArray}`)
  console.log(`outputArray = ${outputArray}`)
  return outputArray;
}

module.exports = filter;