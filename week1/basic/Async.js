first=()=> {

    setTimeout(function () {

        console.log(" function first completed ");
       
    }, 5000)
    return 5 + 6

}

second =()=> {
    console.log(" wait 5 seconds for function frist  ");
    return 454545
}

getUsersPosts=()=> {
    return 43443667676767
}


async function userProfile() {

    try {

        
        let user = await  first()
        let friendsOfUser = await second();
        let posts = await getUsersPosts();

        showUserProfilePage(user, friendsOfUser, posts);
    } catch (e) {
        console.log(e);
    }
}


function showUserProfilePage(user, friendsOfUser, posts) {

    console.log(user, friendsOfUser, posts);

}

// first();
// second();
userProfile() 
module.export = {}