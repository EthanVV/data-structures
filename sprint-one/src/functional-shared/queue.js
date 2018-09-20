var Queue = function() {
  var resultQueue = {
    storage: {}
  }

  _.extend(resultQueue, queueMethods);
  return resultQueue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.size() + this.removed] = value;
  },
  dequeue: function() {
    var holder = this.storage[this.removed];
    delete this.storage[this.removed];
    this.removed++;
    return holder;
  },
  size: function() {
    return Object.keys(this.storage).length;
  },
  removed: 0
};