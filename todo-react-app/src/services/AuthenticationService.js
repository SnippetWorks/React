
class AuthenticationService{

    registerLogin(username){
        sessionStorage.setItem('username',username)
    }

    isUserLoggedIn(username){
        if(sessionStorage.getItem(username))
    }

}

export new AuthenticationService();