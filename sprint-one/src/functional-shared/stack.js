var Stack = function() {
  var resultStack = {
    storage: {}
  }

  _.extend(resultStack, stackMethods);
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