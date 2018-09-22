class Stack {

  constructor() {
    this.storage = {};
  }
  push(value) {
    this.storage[this.size()] = value;
  }
  pop() {
    var result = this.storage[this.size() -1];
    delete this.storage[this.size() -1];
    return result;
  }
  size() {
     return Object.keys(this.storage).length;
  }
  
}