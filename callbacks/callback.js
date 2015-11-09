var funcCaller = function(func, arg) {
  return func(arg);
};

//var firstVal = function(arr, func) {
//  func(arr[0], 0, arr);
//};

var firstVal = function(list, func) {
  if (Array.isArray(list)) {
    func(list[0], 0, list);
  }
  else {
    for (var k in list) {
      func(list[k], k, list);
    }
  }
};
