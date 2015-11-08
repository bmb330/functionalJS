//var nonsense = function(str) {
//  var blab = function() {
//    alert(str);
//  };
//
//  blab();
//};

//var nonsense = function(str) {
//  var blab = function() {
//    alert(str);
//  };
//
//  setTimeout(blab, 2000);
//};

var nonsense = function(str) {
  var blab = function() {
    alert(str);
  };

  return blab;
};

var blabLater = nonsense('yahyah');
var blabAgainLater = nonsense('yadayada');

var lastNameTrier = function(firstName) {

  var innerFunction = function(lastName) {
    console.log(firstName, lastName);
  };

  return innerFunction;
};

var firstNameFarmer = lastNameTrier('Farmer');
firstNameFarmer('Brown');
firstNameFarmer('Jane');
firstNameFarmer('Lynne');

var storyWriter = function() {
  var story = "";

  return {
    addWords: function(words) { story += words + ''; return story.trim(); },
    erase: function() { story = ""; }
  };
};

var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'

var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
storyOfMyLife.erase(); // ''

