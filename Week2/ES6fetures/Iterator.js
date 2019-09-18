let infinite = {
    [Symbol.iterator]() {
        let c = 0;
        return {
            next() {
                c++;
                return { done: false, value: c }
            }
        }
    }
}

console.log("start");

for (var n of infinite) {
    // truncate the sequence at 1000
    if (n > 10)
        break;
    console.log(n);
}