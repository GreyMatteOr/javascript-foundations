class Centaur {
  constructor(args = {}) {

    this.name = args.name ? args.name : 'Chester'
    this.breed = args.type ? args.type : 'Percheron'
    this.cranky = args.cranky ? args.cranky : false
    this.standing = args.standing ? args.cranky : true
    this.layingDown = args.layingDown ? args.layingDown : false
    this.count = 0
  }

  shoot() {
    this.count++
    this.cranky = this.count >= 3
    return this.cranky || this.layingDown ? 'NO!' : 'Twang!!!'
  }

  run() {
    this.count++
    this.cranky = this.count >= 3
    return this.cranky || this.layingDown ? 'NO!' : 'Clop clop clop clop!!!'
  }

  layDown() {
    this.standing = false
    this.layingDown = true
  }

  standUp() {
    this.standing = true
    this.layingDown = false
  }


  sleep() {
    if (this.standing) {
      return 'NO!'
    }
    this.cranky = false
    this.count = 0
    return 'ZZZZ'
  }

  drinkPotion() {
    if (!this.standing) {
      return 'Not while I\'m laying down!'
    }
    this.cranky = !this.cranky
    this.count = 0
  }
}

module.exports = Centaur
