class Hobbit {
  constructor(name, age = 0, adult = (age >= 33), old = (age >= 101), hasRing = (name == 'Frodo')) {
    this.name = name
    this.age = age
    this.adult = adult
    this.old = old
    this.hasRing = hasRing
  }
  celebrateBirthday() {
    this.age++
    if (this.age >= 33) {
      this.adult = true
    }
    if (this.age >= 101) {
      this.old = true
    }
  }
}
module.exports = Hobbit
