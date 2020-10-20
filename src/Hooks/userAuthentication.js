const auth = window.passport.authenticate();
const provider = new window.passport.authenticate.provider();

export function useAuthentication() {
    function login(){
        auth.signInWithPopup(provider);
    }

    return {login};
}