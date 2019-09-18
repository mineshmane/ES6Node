var async = require('async');
console.log('race started ');

//syntax for race module                callback
// async.race([functon1,funxtion2,...],(error,result))
async.race([
    //unnamed functions

    (callback) => {
        console.log(" first function");

        setTimeout(() => {
            callback(null, 'one');
        }, 3000);
    },
    (callback) => {
        console.log(' second function');

        setTimeout(() => {
            callback(null, 'two');
        }, 1000);
    },
    (callback) => {
        console.log('third fyunction');

        setTimeout(() => {
            callback(null, 'three');
        }, 2000);
    }
],
    // main callback
    (err, result) => {
        // the result will be equal to 'two' as it finishes earlier than the other 2
        console.log('callback');

        if (err) {
            console.log(err);


        }
        console.log('The result is ', result);
    });