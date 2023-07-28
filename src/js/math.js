import Character from './character';

class MathClass extends Character {
  constructor(name, type) {
    super(name, type);
    this.attackPower = 0;
    this.distance = 0;
    this.stoned = false;
  }

  get attack() {
    if (this.distance === 0) {
      return 0;
    }

    const attackDistanceModifier = 100 - (this.distance - 1) * 10;
    const attackPower = (this.attackPower * attackDistanceModifier) / 100;

    if (this.stoned) {
      const stonedAttack = attackPower - Math.log2(this.distance) * 5;
      return Math.round(stonedAttack);
    }

    return Math.round(attackPower);
  }

  set attack(value) {
    this.Attack = value;
  }

  get stoned() {
    return this.Stoned;
  }

  set stoned(value) {
    this.Stoned = value;
  }
}

export default MathClass;
