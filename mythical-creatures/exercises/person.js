class Person{
  constructor(name = 'Hercules', stoned = false){
    this.name = name
    this.stoned = stoned
    this.ID = Math.random() * 10000;

  }
  lookAtMedusa(){
    this.stoned = true
    this.ID = Math.random() * 10000;
  }
  release(){
    this.stoned = false
    this.ID = Math.random() * 10000;
  }
}

module.exports = Person
