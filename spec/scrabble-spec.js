// Note: you shouldn't need to change anything in this file.

Scrabble = require('../src/scrabble')
let scrabble;

describe("Scrabble", function() {
  it('returns 0 for empty words', function() {
    scrabble = new Scrabble('')

    expect(scrabble.score()).toEqual(0)
  })

  it('returns 0 for whitespace', function() {
    scrabble = new Scrabble(" \t\n")

    expect(scrabble.score()).toEqual(0)
  })

  it('returns 0 for null', function() {
    scrabble = new Scrabble(null)

    expect(scrabble.score()).toEqual(0)
  })

  it('scores short word', function() {
    scrabble = new Scrabble('a')

    expect(scrabble.score()).toEqual(1)
  })

  it('scores short word', function() {
    scrabble = new Scrabble('f')

    expect(scrabble.score()).toEqual(4)
  })

  it('scores a simple word', function() {
    scrabble = new Scrabble('street')

    expect(scrabble.score()).toEqual(6)
  })

  it('scores a more complicated word', function() {
    scrabble = new Scrabble('quirky')

    expect(scrabble.score()).toEqual(22)
  })

  it('scores a case-insensitive word', function() {
    scrabble = new Scrabble('OXYPHENBUTAZONE')

    expect(scrabble.score()).toEqual(41)
  })

  it('returns 6 for double letter o', () => {
    scrabble = new Scrabble('d{o}g')
    expect(scrabble.score()).toEqual(6)
  })

  it('returns 6 for triple letter o', () => {
    scrabble = new Scrabble('d[o]g')
    expect(scrabble.score()).toEqual(7)
  })

  it('returns 0 for invalid multiplier', () => {
    scrabble = new Scrabble('d{og')
    expect(scrabble.score()).toEqual(0)
  })

  it('returns 0 for invalid multiplier', () => {
    scrabble = new Scrabble('do}g')
    expect(scrabble.score()).toEqual(0)
  })
})

describe('word multipliers', () => {
  it('returns 10 for double letter o', () => {
    scrabble = new Scrabble('{dog}')
    expect(scrabble.score()).toEqual(10)
  })

  it('returns 15 for triple letter o', () => {
    scrabble = new Scrabble('[dog]')
    expect(scrabble.score()).toEqual(15)
  })

  it('returns 0 for invalid multiplier', () => {
    scrabble = new Scrabble('{dog')
    expect(scrabble.score()).toEqual(0)
  })
  it('returns 0 for invalid multiplier', () => {
    scrabble = new Scrabble('dog}')
    expect(scrabble.score()).toEqual(0)
  })
})

describe('edge cases', () => {
  it('returns 18 for letter and word multiplier', () => {
    scrabble = new Scrabble('{[d]og}')
    expect(scrabble.score()).toEqual(18)
  })

  it('returns 30 for two word multipliers', () => {
    scrabble = new Scrabble('[{dog}]')
    expect(scrabble.score()).toEqual(30)
  })
  it('returns 9 for two end letter multipliers', () => {
    scrabble = new Scrabble('{d}o{g}')
    expect(scrabble.score()).toEqual(9)
  })

  it('returns 0 for incorrect tokens', () => {
    scrabble = new Scrabble('|d|og')
    expect(scrabble.score()).toEqual(0)
  })
})
