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
        console.log(" getting on callback " ,result);
    }

});


function doSomething (call) {
    console.log(" doing somthing ");
    
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
function doMore (param, call){
    console.log(" getting meney ",param);
    
    if (param + 20 == 50) {
        setTimeout(() => {
            call(null, param + 20);
        }, 5000);
    } else {
        call("Error")
    }
}
function insertRow  (param, call) {
    console.log("doinging more",param);
    
    if (param + 20 == 70) {
        setTimeout(() => {
            call(null, param + 20);
        }, 5000);
    } else {
        call("Error")
    }
}
function yetAnotherOperation(param, call) {
    console.log(" still doing yet Another ",param);
    
    if (param + 20 == 90) {
        setTimeout(() => {
            call(null, param + 20);
        }, 5000);
    } else {
        call("Error")
    }
}
function somethingElse (param, callback)  {
    console.log(" getting bored doing smething else ",param);
    
    if (param + 10 == 100) {

        setTimeout(() => {
            callback(null, param + 10)
        }, 5000);
    } else {
        callback(" eoror ")
    }

}