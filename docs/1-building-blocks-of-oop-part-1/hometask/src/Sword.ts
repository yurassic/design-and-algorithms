import { Weapon } from "./Weapon";

export class Sword extends Weapon {
  constructor(
    ...args: [
      baseDamage: number,
      baseDurability: number,
      damageModifier: number,
      durabilityModifier: number,
      name: string,
      value: number,
      weight: number
    ]
  ) {
    super(...args);
    this.name = "sword";
  }

  polish(): void {
    // TODO:
    this.damageModifier = this.MODIFIER_CHANGE_RATE;
  }
}
