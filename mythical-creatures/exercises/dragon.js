class Dragon {
  constructor(name, rider, color, timesEaten, hungry = (timesEaten >= 3)) {
    this.name = name
    this.rider = rider
    this.color = color
    this.hungry = hungry
    this.timesEaten = timesEaten;
  }
  eat() {
    this.timesEaten++;
    this.timesEaten >= 3 ? this.hungry = false : ''
  }
}

module.exports = Dragon
