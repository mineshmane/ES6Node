var dataBase = require('./asyncAwait');
const verifyUser = async (username, password)=> {
    try {
        const userInfo = await dataBase.verifiedUser(username, password);
        console.log(" user line 5", userInfo);

        const rolesInfo = await dataBase.getRoles(userInfo);
        console.log("roles info call", rolesInfo);

        const logStatus = await dataBase.logAccess(rolesInfo);
        console.log(logStatus);


        return new Promise(resolve => {
            setTimeout(() => {
                resolve(userInfo);
            }, 5000);
        });
    } catch (e) {
        //handle errors as needed
        console.log(" error");

    }
};

login = async () => {

    let data = await verifyUser(" minesh", "12345");
    console.log(" data iniinin", data);
}

login();