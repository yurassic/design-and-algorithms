import { Item } from "./Item";

export class Consumable extends Item {
  consumed: boolean;
  spoiled: boolean;

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);
    this.spoiled = spoiled;
    this.consumed = false;
  }

  eat(): string {
    return `You eat the ${this.name}.${
      this.isSpoiled() ? "\nYou feel sick." : ""
    }`;
  }

  use(): string {
    return this.isConsumed()
      ? `There is nothing left of the ${this.name} to consume.`
      : this.eat();
  }

  isConsumed(): boolean {
    return this.consumed;
  }

  setConsumed(consumed: boolean): void {
    this.consumed = consumed;
  }

  isSpoiled(): boolean {
    return this.spoiled;
  }
}
