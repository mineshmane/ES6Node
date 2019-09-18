/**
 *
 * @param {String } name is the name of the newly created error
 * @param {Function} [init] optional initialization function
 * @returns {Err} The new Error
 */
createError = (name, init) => {
    function Err(message) {
        Error.captureStackTrace(this, this.constructor);
        this.message = message;
        init && init.apply(this, arguments);
    }

    Err.prototype = new Error();
    //set the name property
    Err.prototype.name = name;
    // set the constructor
    Err.prototype.constructor = Err;
    return Err;
}
// define new error
let MyError = createError('MyError', function (name, invalid) {
   console.log(
    this.message = 'The name ' + name + ' is invalid because of ' + invalid);;
});

// throw it
throw new MyError('test', 'problems');
//MyError: The name test is invalid because of problems