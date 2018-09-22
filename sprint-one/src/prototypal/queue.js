var Queue = function() {
  var resultQueue = Object.create(queueMethods);
  resultQueue.storage = {};
  resultQueue.numRemoved = 0;
  return resultQueue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.size() + this.numRemoved] = value;
  },
  dequeue: function() {
    var holder = this.storage[this.numRemoved];
    delete this.storage[this.numRemoved];
    this.numRemoved++;
    return holder;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};