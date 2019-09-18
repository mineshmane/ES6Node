var async = require('async');

// Or, with named functions:
//syntax for water fall
// async.waterfall(function1,function2,...(err, result));
async.waterfall([
    doSomething,
    doMore,
    insertRow,
    yetAnotherOperation,
    somethingElse,
], (err, result) => {
    // result now equals 'Task1 and Task2 completed'
    if (err) {
        console.log(err);

    } else {
        console.log(result);
    }

});


doSomething = (call) => {
    let param = 10;
    if (param + 20 == 30) {
        setTimeout(() => {
            call(null, param + 20);
        }, 5000);
        // call(null, param + 20)
    } else {
        call("Error")
    }
}
doMore = (param, call) => {
    if (param + 20 == 50) {
        setTimeout(() => {
            call(null, param + 20);
        }, 5000);
    } else {
        call("Error")
    }
}
insertRow = (param, call) => {
    if (param + 20 == 70) {
        setTimeout(() => {
            call(null, param + 20);
        }, 5000);
    } else {
        call("Error")
    }
}
yetAnotherOperation = (param, call) => {
    if (param + 20 == 90) {
        setTimeout(() => {
            call(null, param + 20);
        }, 5000);
    } else {
        call("Error")
    }
}
somethingElse = (param, callback) => {
    if (param + 10 == 100) {

        setTimeout(() => {
            callback(null, param + 10)
        }, 5000);
    } else {
        callback(" eoror ")
    }

}