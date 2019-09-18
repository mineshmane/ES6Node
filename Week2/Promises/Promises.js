//promise example  ***********************
divisonAsync = (number1, number2) => {
    return new Promise((resolve, reject) => {
        if (typeof number1 !== 'number' || typeof number2 !== 'number') {
            reject(new Error('the first and second arguments must be number'));
        }
        else {
            const sum = parseInt(number1) + parseInt(number2);
            resolve(sum);
        }

    });
}
let a = 6;
let b = 6;

divisonAsync(a, b).then(data => {
    console.log(data);
});