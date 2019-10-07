
var rx = require('rxjs')
const observable = new rx.Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.next(7);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
    subscriber.next(45);// after complete() not possible  run next function 
  }, 2000);
});

console.log('just before subscribe');
observable.subscribe({
  next(x) { console.log('got value ' + x); },
  error(err) { console.error('something wrong occurred: ' + err); },// it show error if any error comes 
  complete() { console.log('done'); },// after complte nothing aany next or any function calling 
  next(y) { console.log(" got value ", y) }// it will not print after complete function 
});
console.log('just after subscribe');