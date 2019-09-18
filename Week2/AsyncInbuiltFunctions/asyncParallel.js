
var async = require('async');
async.parallel([
  (callback) => {
    setTimeout(() => {
      console.log('Task One first ');
      callback(null, 1);
    }, 200);
  },
  (callback) => {
    setTimeout(() => {
      console.log('Task Two first ');
      callback(null, 2);
    }, 3000);
  }
],
  (err, results) => {
    if (err) {
      console.log(err);
      
    }
    console.log(results);
    // the results array will equal [1, 2] even though
    // the second function had a shorter timeout.
  });

// an example using an object instead of an array
async.parallel({
  task1: (callback) => {
    setTimeout(() => {
      console.log('Task One second ');
      callback(null, 1);
    }, 2000);
  },
  task2: (callback) => {
    setTimeout(() => {
      console.log('Task Two second ');
      callback(null, 2);
    }, 100);
  }
}, (err, results) => {
  console.log(results);
  // results now equals to: { task1: 1, task2: 2 }
});