function doHomework(subject, call) {

    console.log(`Starting my ${subject} homework.`);
    call();

}
function alertFinished() {
    var a = 20
    console.log('Finished my homework');
    return a

}
doHomework('maths', alertFinished);

module.export = {}