//asynAndAwait*********************
who = () => {
    console.log("Rahul");

    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Hiiii.. i m Rahul waiting for 2 sec');
        }, 2000);
    });
}
what = () => {
    console.log(" nothing ");

    return new Promise(resolve => {
        setTimeout(() => {
            resolve('i have to wait  foer 3 sec');
        }, 3000);
    });
}
where = () => {

    console.log(" mumbai ");

    return new Promise(resolve => {
        setTimeout(() => {
            resolve('in the Mumbai for 5 sec will be late ');
        }, 5000);
    });
}
// async function msg() {
// const a = await who();
// const b = await what();
// const c = await where();
carTravel = async () => {
    console.log("hello  minesh ");

    const [w, b, c] = await Promise.all([who(), what(), where()]);
    console.log(" i m waiting for  10 sec ");
    console.log(`${w} ${b} ${c}`);


}
carTravel(); 