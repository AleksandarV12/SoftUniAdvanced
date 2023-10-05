function createHeroes() {
  const heroes = [];

  function createFighter(name) {
    const fighter = {
      name,
      health: 100,
      stamina: 100,
      fight() {
        if (this.stamina > 0) {
          console.log(`${this.name} slashes at the foe!`);
          this.stamina--;
        } else {
          console.log(`${this.name} is out of stamina.`);
        }
      },
    };
    heroes.push(fighter);
    return fighter;
  }

  function createMage(name) {
    const mage = {
      name,
      health: 100,
      mana: 100,
      cast(spell) {
        if (this.mana > 0) {
          console.log(`${this.name} cast ${spell}`);
          this.mana--;
        } else {
          console.log(`${this.name} is out of mana.`);
        }
      },
    };
    heroes.push(mage);
    return mage;
  }

  return {
    fighter: createFighter,
    mage: createMage,
  };
}
let create = createHeroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();
console.log(scorcher2.stamina);
console.log(scorcher.mana);
