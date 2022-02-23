import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
  numberOfSlices: number;
  slicesEaten: number;

  constructor(
    name: string,
    value: number,
    weight: number,
    spoiled: boolean,
    numberOfSlices: number
  ) {
    super(name, value, weight, spoiled);
    this.numberOfSlices = numberOfSlices;
  }

  eat(): string {
    if (this.slicesEaten > this.numberOfSlices) {
      this.slicesEaten++;

      if (this.slicesEaten >= this.numberOfSlices) {
        this.setConsumed(true);
      }

      return "You eat slice of pizza";
    } else {
      return "";
    }
  }
}
