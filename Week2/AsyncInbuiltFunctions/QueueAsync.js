// create a queue object with concurrency 2
var async = require('async');
var q = async.queue((task, callback) => {
  console.log('Hello ' + task.name);
  callback();
}, 10);


// assign a callback
q.drain = (err) => {
  if (err) {
    console.log(err);

  }
  console.log('All items have been processed');
};

// add some items to the queue
q.push({ name: 'foo' }, (err) => {
  if (err) {
    console.log(err);

  }
  console.log('Finished processing foo');
});

q.push({ name: 'bar' }, (err) => {
  if (err) {
    console.log(err);


  }
  console.log('Finished processing bar');
});
q.push({ name: 'mineash' }, (err) => {
  if (err) {
    return console.log('error in adding tasks to queue', err);
  }
  console.log('pushed to queue!');
});
// add some items to the queue (batch-wise)
q.push([{ name: 'baz' }, { name: 'bay' }, { name: 'bax' }], (err) => {
  if (err) {
    console.log(err);

  }
  console.log('Finished processing item');
});

// add some items to the front of the queue
q.unshift({ name: 'bar' }, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Finished processing bar');
});

// var q = async.queue(function (task, callback) {
//   (task, callback);
// }, 10);
