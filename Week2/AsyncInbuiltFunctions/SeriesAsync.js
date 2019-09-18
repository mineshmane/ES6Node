var async = require('async');
// an example using an object instead of an array
async.series({
  task1: start = (callback) => {
    setTimeout(() => {
      console.log('Task One');
      callback(null, 1);
    }, 200);
  },

  task3: first = (callback) => {
    setTimeout(() => {
      console.log('mineshtask complteed');
      callback(null, 3);
    }, 1000);
  },
  task2: last = (callback) => {
    setTimeout(() => {
      console.log('Task Two');
      callback(null, 2);
    }, 100);
  },
},
  (err, results) => {
    if (err) {
      console.log(err);

    }
    console.log(results);
    // results now equals to: { task1: 1, task2: 2 }
  });
