const os = require('os');
os.cpus();
console.log(' used to fetch an array of objects containing information about each cpu/core installed:', os.cpus);
console.log("os.cpus(): \n",os.cpus());  
console.log("os.arch(): \n",os.arch());  
console.log("os.networkInterfaces(): \n",os.networkInterfaces());  

console.log(' This method is used to fetch the operating system CPU architecture.:', os.arch);
console.log("os.freemem(): \n", os.freemem());
console.log("os.homedir(): \n", os.homedir());
console.log("os.hostname(): \n", os.hostname());
console.log("os.endianness(): \n", os.endianness());
console.log("os.loadavg(): \n", os.loadavg());
console.log("os.platform(): \n", os.platform());
console.log("os.release(): \n", os.release());
console.log("os.tmpdir(): \n", os.tmpdir());
console.log("os.totalmem(): \n", os.totalmem());
console.log("os.type(): \n", os.type());
console.log("os.uptime(): \n", os.uptime());


