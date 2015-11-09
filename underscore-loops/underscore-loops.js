var helloArr = ['bonjour', 'hello', 'hola'];

_.each(helloArr, function(val, index) {
  console.log(val);
  console.log(index);
});

//var checkValue = function(arr, val) {
//  for (var i = 0; i < arr.length; i++) {
//    if (arr[i] === val) return true;
//  }
//};

var checkValue = function(arr, val) {
  var isTrue = false;
  _.each(arr, function(item) {
    if (item === val) isTrue = true;
  });
  return isTrue;
};

console.log(checkValue(helloArr, 'hello'));

var input = {
  two: 2,
  four: 4,
  three: 3,
  twelve: 12
};

var output = [];

for (var k in input) {
  output.push(input[k]);
}

console.log(output);

output = _.map(input, function(val) {
  return val;
});

console.log(output);

input = [9,8,7,6,5,2];

output = _.filter(input, function(val) {
  return val % 2 === 0;
});

console.log(output);
