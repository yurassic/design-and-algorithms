import { Comparable } from "./Comparable";

let id = 0;

export abstract class Item implements Comparable<Item> {
  id: number;
  value: number;
  name: string;
  weight: number;

  constructor(name: string, value: number, weight: number) {
    this.id = id++;
    this.name = name;
    this.value = value;
    this.weight = weight;
  }

  public compareTo(other: Item): number {
    if (this.value > other.getValue()) {
      return 1;
    } else if (this.value < other.getValue()) {
      return -1;
    } else {
      return this.name.localeCompare(other.getName());
    }
  }

  getId(): number {
    return this.id;
  }

  getValue(): number {
    return this.value;
  }

  getName(): string {
    return this.name;
  }

  getWeight(): number {
    return this.weight;
  }

  setValue(price: number): void {
    this.value = price;
  }

  setName(name: string): void {
    this.name = name;
  }

  setWeight(weight: number): void {
    this.weight = weight;
  }

  toString() {
    return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
  }

  static reset(): void {
    id = 0;
  }
}
