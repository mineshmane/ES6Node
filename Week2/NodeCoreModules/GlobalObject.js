console.log(" noraml console ")
console.error(' error ')
console.warn('warining message ')
// create buffur 

buf = new Buffer(26);
for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
} console.log(" buffer object ");

console.log(buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz  
console.log(buf.toString('ascii', 0, 5));   // outputs: abcde  
console.log(buf.toString('utf8', 0, 5));    // outputs: abcde  
console.log(buf.toString(undefined, 0, 5)); // encoding defaults to 'utf8', outputs abcde  


welcome = () => {
    console.log("Welcome to JavaTpoint!");
}
var id1 = setTimeout(welcome, 3000);

var id2 = setInterval(welcome, 5000);


//clearTimeout(id1);  
clearInterval(id2);  