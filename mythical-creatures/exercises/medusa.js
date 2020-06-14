class Medusa {
  constructor(name = 'Mary', statues = []) {
    this.name = name;
    this.statues = statues;
  }
  stare(victim) {
    this.statues.push(victim);
    victim.lookAtMedusa();
    while (this.statues.length > 3) {
      this.statues.shift().release()
    }
  }
  shareSelf() {
    console.log(this.statues)
  }
}

module.exports = Medusa
