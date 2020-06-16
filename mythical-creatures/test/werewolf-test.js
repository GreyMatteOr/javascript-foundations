var assert = require('chai').assert;
var Werewolf = require('../exercises/werewolf');
var Victim = require('../exercises/victim');

describe('Werewolf', function() {

  it('should be a function', function() {
    assert.isFunction(Werewolf);
  });

  it('should instantiate our good friend, Werewolf', function() {
    var larry = new Werewolf();

    assert.instanceOf(larry, Werewolf);
  });

  it('should have a name', function() {
    var werewolf = new Werewolf('Jeff');
    var werewolf2 = new Werewolf('Sal');

    assert.equal(werewolf.name, 'Jeff');
    assert.equal(werewolf2.name, 'Sal');
  });

  it('should default to human form', function() {
    var werewolf = new Werewolf('Casey');

    assert.equal(werewolf.human, true);
  });

  it('should not be in human form after transforming', function() {
    var werewolf = new Werewolf('Scott');

    werewolf.transform();

    assert.equal(werewolf.human, false);
  });

  it('should show assert wolf form after transforming', function() {
    var werewolf = new Werewolf('Lousia');

    assert.equal(werewolf.wolf, false);

    werewolf.transform();

    assert.equal(werewolf.wolf, true);
  });

  it('should show what form its in', function() {
    var werewolf = new Werewolf('Lousia');

    assert.equal(werewolf.wolf, false);

    werewolf.transform();
    werewolf.transform();

    assert.equal(werewolf.wolf, false);
    assert.equal(werewolf.human, true);

    werewolf.transform();

    assert.equal(werewolf.wolf, true);
    assert.equal(werewolf.human, false);
  });

  it('should start off not hungry', function() {
    var fred = new Werewolf('Fred')

    assert.equal(fred.hungry, false)
  });

  it('should become hungry after changing into werewolf form', function() {
    var ted = new Werewolf('Ted')

    assert.equal(ted.hungry, false)

    ted.transform()

    assert.equal(ted.hungry, true)
  });

  it('should be able to eat(victim) once hungry', function() {
    var ned = new Werewolf('Ned')
    var victim = new Victim('Vulfbaet')
    assert.equal(ned.eat(victim), "BARF! WHY WOULD I EAT VULFBAET?")

    ned.transform();

    assert.equal(ned.eat(victim), "YUM I DEVOURED THEM")
  });

  it('should not be hungry after changing back to human form', function() {
    var sed = new Werewolf('Cedric')
    var victim = new Victim('Vulfbaet')
    sed.transform();
    assert.equal(sed.hungry, true)
    sed.eat(victim);
    assert.equal(sed.hungry, false);
  });

  it('should transform back to human form after eating', function() {
    var red = new Werewolf('Red')
    var victim = new Victim('Vulfbaet')
    red.transform();
    assert.equal(red.wolf, true)
    red.eat(victim);
    assert.equal(red.wolf, false)
    assert.equal(red.human, true)
  });

  it('should not be able to eat a victim while in human form', function() {
    var ged = new Werewolf('Gedian')
    var victim = new Victim('Vulfbaet')
    ged.transform()
    ged.human = true
    assert.equal(ged.eat(victim), "BARF! WHY WOULD I EAT VULFBAET?")
  });
});

describe('Victim', function() {

  it('should be a function', function() {
    assert.isFunction(Victim);
  });

  it('should instantiate our good friend, Victim', function() {
    var victim = new Victim();

    assert.instanceOf(victim, Victim);
  });

  it('should have a name', function() {
    var victim = new Victim('Leta');

    assert.equal(victim.name, 'Leta');
  });
});
