class Queue {
  
  constructor() {
    this.storage = {};
    this.removed = 0;
  }
  enqueue(value) {
    this.storage[this.size() + this.removed] = value
  }
  dequeue() {
    var result = this.storage[this.removed];
    delete this.storage[this.removed];
    this.removed++;
    return result;
  }
  size() {
    return Object.keys(this.storage).length;
  }

}
