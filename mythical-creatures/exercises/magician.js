class Magician {
  constructor(args = {}) {
    this.name = args['name'] ? args['name'] : 'Merlin'
    this.topHat = args['topHat'] == undefined ? true : args['topHat']
    this.spellCount = args['spellCount'] ? args['spellCount']: 0
    this.confident = (this.spellCount >= 3)
  }
  incantation(str) {
    this.spellCount++
    return str.toUpperCase() + '!'
  }

  cast() {
    this.spellCount++
    this.confident = (this.spellCount >= 3)
    return this.topHat ? 'PULL RABBIT FROM TOP HAT' : 'PULL DOVE FROM SLEEVE'
  }
  performShowStopper() {
    return this.confident ? 'WOW! The magician totally just sawed that person in half!' : 'Oh no! Practice more before attempting this trick!'
  }
}

module.exports = Magician
