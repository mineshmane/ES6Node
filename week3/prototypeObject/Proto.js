var fooFunc = function() {
    return {
        foo: 42
    }
};
fooFunc.prototype.bar = 'baz';
var fooVal = fooFunc();
console.log(fooVal);   // {foo: 42}
console.log(fooFunc.prototype);     // {bar: "baz", constructor: ƒ}


