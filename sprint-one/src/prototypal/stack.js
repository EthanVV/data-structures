var Stack = function() {
  var resultStack = Object.create(stackMethods);
  resultStack.storage = {};
  return resultStack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.size()] = value;
  },
  pop: function() {
    var holder = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return holder;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};