class Scrabble {
  constructor(word) {
    this.points = {
      A: 1,
      E: 1,
      I: 1,
      O: 1,
      U: 1,
      L: 1,
      N: 1,
      R: 1,
      S: 1,
      T: 1,
      D: 2,
      G: 2,
      B: 3,
      C: 3,
      M: 3,
      P: 3,
      F: 4,
      H: 4,
      V: 4,
      W: 4,
      Y: 4,
      K: 5,
      J: 8,
      X: 8,
      Q: 10,
      Z: 10
    }
    this.word = word
  }

  score() {
    if (typeof this.word !== 'string') {
      return 0
    }
    const regex = /([A-Z{}[\]])/g
    const splitString = this.word.toUpperCase().split('')
    let isValidWord = true
    let total = 0
    let multiplier = 1
    splitString.forEach((element) => {
      if (
        !isValidWord ||
        !element.match(regex) ||
        (multiplier <= 1 && element === ']') ||
        (multiplier <= 1 && element === '}')
      ) {
        isValidWord = false
        return
      }

      if (this.points[element]) {
        total += this.points[element] * multiplier
      }

      multiplier = this.wordMultiplier(element, multiplier)
    })

    isValidWord = isValidWord && multiplier === 1

    const finalScore = isValidWord ? total : 0

    return finalScore
  }

  wordMultiplier(letter, multiplier) {
    if (letter === '{') {
      return multiplier * 2
    }

    if (letter === '[') {
      return multiplier * 3
    }

    if (letter === '}') {
      return multiplier / 2
    }

    if (letter === ']') {
      return multiplier / 3
    }

    return multiplier
  }
}

module.exports = Scrabble
