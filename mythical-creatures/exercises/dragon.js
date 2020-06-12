class Dragon {
  constructor ( name, rider, color, hungry = true) {
    this.name = name
    this.rider = rider
    this.color = color
    this.hungry = hungry
    this.timesEaten = 0;
  }
  eat(){
    this.timesEaten++;
    this.timesEaten >=3 ? this.hungry = false : ''
  }
}

module.exports = Dragon
