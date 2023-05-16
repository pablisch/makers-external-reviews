const filter = (freqArray) => {
  // if (freqArray == []) {
  //   throw "no frequencies supplied"
  // }
  console.log(freqArray == [50])
  if (freqArray[0] < 40) {
    return [40];
  } else if (freqArray[0] > 1000) {
    return [1000]
  } else {
    return [50];
  }
  
}

module.exports = filter;