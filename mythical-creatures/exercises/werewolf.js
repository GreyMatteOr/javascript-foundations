class Werewolf {
  constructor(name, human = true, wolf = false, ) {
    this.name = name
    this.human = human
    this.wolf = wolf
    this.hungry = wolf
  }
  transform() {
    this.human = !this.human
    this.wolf = !this.wolf
    this.hungry = this.wolf
  }

  eat(victim) {
    if (this.human || !this.hungry) {
      return "BARF! WHY WOULD I EAT " + victim.name.toUpperCase() + "?"
    }
    if (this.hungry) {
      this.human = true
      this.wolf = false
      this.hungry = false
      return "YUM I DEVOURED THEM"
    }
    return "BARF! WHY WOULD I EAT " + victim.name.toUpperCase() + "?"
  }
}

module.exports = Werewolf
