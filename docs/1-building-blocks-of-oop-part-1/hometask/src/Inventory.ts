import { Item } from "./Item";
export class Inventory {
  items: Item[];

  addItem(item: Item): void {
    this.items.push(item);
  }

  sort(): void {
    this.items.sort((a, b) => (a.value > b.value ? 1 : -1));
  }

  // TODO: Inventory.sort(comparator: ItemComparator)

  toString(): string {
    return this.items.map((item) => item.name).join(", ");
  }
}
