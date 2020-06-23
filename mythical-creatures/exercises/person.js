class Person{
  constructor(name = 'Hercules', stoned = false){
    this.name = name
    this.stoned = stoned

  }
  lookAtMedusa(){
    this.stoned = true
  }
  release(){
    this.stoned = false
  }
}

module.exports = Person
