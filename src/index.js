class Sorter {
  constructor() {
    this.storage = [];
    this.intermediateStorage = [];
    this.otherFunction; 
  }

  add(element) {
    this.storage.push(element)
  }

  at(index) {
    return this.storage[index];
  }

  get length() {
    return this.storage.length;
  }

  toArray() {
    return this.storage;
  }

  sort(indices) {
    indices.sort((a, b) => a - b);
    indices.forEach(element => this.intermediateStorage.push(this.storage[element]) );
    this.otherFunction ? this.intermediateStorage.sort(this.otherFunction) : this.intermediateStorage.sort((a, b) => a - b);
    this.intermediateStorage.forEach( (element, index) => this.storage[indices[index]] = element);
    this.intermediateStorage.length = 0;
  }

  setComparator(compareFunction) {
    this.otherFunction = compareFunction;
  }
}

module.exports = Sorter;