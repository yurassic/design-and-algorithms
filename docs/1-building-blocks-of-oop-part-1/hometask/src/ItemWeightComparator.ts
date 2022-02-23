import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class ItemWeightComparator implements ItemComparator {
  public compare(first: Item, second: Item) {
    if (first < second) {
      return 1;
    } else if (first > second) {
      return -1;
    } else {
      first.compareTo(second);
    }
  }
}
