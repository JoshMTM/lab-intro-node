class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  //should add a single value to SortedList

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    });
  }

  get(pos) {
    if (pos <= this.items.length - 1) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items.length > 0) {
      let sortedArray = this.items.sort((a, b) => {
        if (a > b) {
          return -1;
        } else {
          return 1;
        }
      });
      return sortedArray[0];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.items.length > 0) {
      let sortedArray = this.items.sort((a, b) => {
        if (a < b) {
          return -1;
        } else {
          return 1;
        }
      });
      return sortedArray[0];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if (this.items.length > 0) {
      return this.items.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
    } else {
      return 0;
    }
  }

  avg() {
    if (this.items.length > 0) {
      return this.sum() / this.items.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
