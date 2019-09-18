
verifiedUser = async (username, password) => {

    console.log(" verified ");
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([username, password]);
        }, 2000);
    });
}
getRoles = (userInfo) => {

    console.log(" getrole 58", userInfo);
    let devops = " Devopse"
    return new Promise((resolve, reject) => {
        if (typeof userInfo == null) {
            reject(new Error('the first and second arguments must be number'));
        }
        else {
            // const sum = parseInt(number1) + parseInt(number2);
            setTimeout(() => {
                resolve('morning!' + userInfo[0], devops);
            }, 4000);
        }

    });
}
logAccess = (data) => {
    console.log(" usere roll", data);
    let newdata = data
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(newdata);
        }, 7000);
    });

}
module.exports = {
    verifiedUser,
    getRoles, logAccess
} 
