// same memoize function from before 
//fn is the factorial function  tha finds values of factorials
const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        console.log(cache);

        if (n in cache) {
            console.log('Fetching from cache', n);
            return cache[n];
        }
        else {
            console.log('Calculating result', n);
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}
//pure function
const factorial = memoize((number) => {
    console.log(number, "in fact");

    if (number === 0) {
        return 1;
    }
    else {
        return number * factorial(number - 1);//calling itself for getting factorials up number getting zero
    }
});
console.log(factorial(5)); // calculated
console.log(factorial(6)); // calculated for 6 and cached for 5
console.log(factorial(7))