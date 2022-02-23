import { Item } from "./Item";

export class Weapon extends Item {
  MODIFIER_CHANGE_RATE = 0.05;
  baseDamage: number;
  damageModifier: number;
  baseDurability: number;
  durabilityModifier: number;

  constructor(
    baseDamage: number,
    baseDurability: number,
    damageModifier: number,
    durabilityModifier: number,
    ...args: [name: string, value: number, weight: number]
  ) {
    super(...args);
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
    this.damageModifier = damageModifier;
    this.durabilityModifier = durabilityModifier;
  }

  getDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  getDurability(): number {
    return this.baseDurability + this.durabilityModifier;
  }

  toString(): string {
    return (
      super.toString() +
      `Damage: ${this.getDamage()}, Durability: ${this.getDurability()}`
    );
  }

  use(): string {
    const damage = this.getDamage();
    const breaksMessage =
      damage - this.MODIFIER_CHANGE_RATE < 0 ? "The hammer breaks." : "";
    return damage > 0
      ? `You use the ${this.name}, dealing ${damage} points of damage. ${breaksMessage}`
      : `You can't use the ${this.name}, it is broken.`;
  }
}
