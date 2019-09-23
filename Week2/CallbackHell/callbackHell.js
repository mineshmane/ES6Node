//callbackHell 


doSomething((err, result)=> {
    console.log(" wait 5 seconds for first callback called ");

    if (err) {
        console.log(err);
        return err;
    } else {
        doMore(result, (error, result1) => {
            console.log(" calling second call back");

            if (error) {
                console.log(error);
                return error;
            } else {
                insertRow(result1, (err2, result2) => {
                    console.log(" calling third cvall backk ");

                    if (err2) {
                        console.log(" inner 2", err2);
                        return err2;
                    } else {
                        yetAnotherOperation(result2, (err3, result3) => {
                            console.log(" calling 4 callback");

                            if (err3) {
                                console.log(" outer 1", err3);
                                return err3;
                            } else {
                                console.log("respoisse ==>", result3)
                                somethingElse(result3, (error4, result4) => {
                                    console.log(" calling 5 call back");

                                    if (error4) {
                                        console.log(" inner", error4);
                                        return error4;
                                    } else {
                                        console.log("  last callback", result4);
                                        return result4;
                                    }
                                });
                            }
                        });
                    }
                });
            }
        })
    }
});
function doSomething (call) {
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


