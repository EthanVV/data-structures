var Queue = function() {
  var someInstance = {};
  var storage = {};

  someInstance.enqueue = function(value) {
    storage[someInstance.size() + someInstance.removed] = value;
  };

  someInstance.dequeue = function() {
    var holder = storage[someInstance.removed];
    delete storage[someInstance.removed];
    someInstance.removed++;
    return holder;
  };

  someInstance.removed = 0;

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
