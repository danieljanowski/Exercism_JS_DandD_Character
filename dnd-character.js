//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (score) => {
  if (score < 3) { throw new Error("Ability scores must be at least 3")}
  else if (score > 18) { throw new Error("Ability scores can be at most 18")}
  else return(Math.floor((score - 10)/2));
};

export class Character {
  static rollAbility() {
    const rolls = [];
    for (let i = 0; i < 4; i++) {
      rolls.push(Math.floor((Math.random() * 6) + 1));
    }
    rolls.sort().shift();
    return rolls.reduce( function sum(total, num){return total + num}, 0 );
  }
  strength = Character.rollAbility();
  dexterity = Character.rollAbility();
  constitution = Character.rollAbility();
  intelligence = Character.rollAbility();
  wisdom = Character.rollAbility();
  charisma = Character.rollAbility();
  hitpoints = 10 + abilityModifier(this.constitution);


  get strength() {
    return this.strength;
  }

  get dexterity() {
    return this.dexterity;
  }

  get constitution() {
    return this.constitution;
  }

  get intelligence() {
    return this.intelligence;
  }

  get wisdom() {
    return this.wisdom;
  }

  get charisma() {
    return this.charisma;
  }

  get hitpoints() {
    return this.hitpoints;
  }
}
