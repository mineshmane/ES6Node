var async = require('async');
// create a queue object with concurrency 1
var q = async.priorityQueue((task, callback) => {
  console.log('Hello ' + task.name);
  callback();
}, 1);

// assign a callback
q.drain = () => {
  console.log('All items have been processed');
};

// add some items to the queue with priority
q.push({ name: 'foo' }, 3, (err) => {
  console.log('Finished processing foo');
});

q.push({ name: 'bar' }, 2, (err) => {
  console.log('Finished processing bar');
});

// add some items to the queue (batch-wise) which will have same priority
q.push([{ name: 'baz' }, { name: 'bay' }, { name: 'bax' }], 1, (err) => {
  console.log('Finished processing item');
});