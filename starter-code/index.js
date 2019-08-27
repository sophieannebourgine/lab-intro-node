class SortedList {
  constructor(arr = []) {
    this.items = arr;
    this.length = arr.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }
  get(pos) {
    if (pos > this.length - 1) throw new Error("OutOfBounds");
    return this.items[pos];
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }
  sum() {
    if (this.length === 0) return 0;
    return this.items.reduce((accumulator, curr) => accumulator + curr);
  }
  average() {
    if (this.length == 0) throw new Error("EmptySortedList");
    return this.sum() / this.length;
  }
}
module.exports = SortedList;
