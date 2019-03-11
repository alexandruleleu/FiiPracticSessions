import firebaseProvider from "../config/FireConfig";

export default class AuthService {
    constructor() {
        this.auth = firebaseProvider.auth();
    }

    //registration service from firebase
    onSignUpUser = (signUpEmail, signUpPassword) => {
        return new Promise((resolve, reject) => {
            const promise = this.auth.createUserWithEmailAndPassword(
                signUpEmail,
                signUpPassword
            );
            promise.then(
                rsp => {
                    const { user } = rsp;
                    console.log(user);

                    //register this account in firebase database with a unique key received from auth service
                    let userId = user.uid;
                    this.createNewAccount({
                        userId,
                        signUpEmail
                    }).then(() => {
                        resolve(rsp);
                    });
                },
                err => {
                    reject(err);
                }
            );
        });
    };

    createNewAccount = payload => {
        //it inserts a new field in "users object" = check firebase "realtime database"
        return firebaseProvider
            .database()
            .ref("users")
            .child(payload.userId)
            .update({ email: payload.signUpEmail });
    };

    //login service
    onLoginUser = (email, password) => {
        return this.auth.signInWithEmailAndPassword(email, password).then(
            rsp => {
                console.log(rsp);
            },
            err => {
                throw err;
            }
        );
    };

    onLogoutUser = () => {
        // logout method (firebase)
        return this.auth.signOut();
    };

    checkIfLoggedIn = () => {
        /*  onAuthStateChanges 
            It checks if a specific user logged in;
            It contains a callback which is fired for every change;
        */
        return new Promise((resolve, reject) => {
            this.auth.onAuthStateChanged(firebaseUser => {
                // if we receive a non-null object => user is still logged in
                if (firebaseUser) {
                    console.log(firebaseUser);
                    resolve(true);
                } else {
                    console.log("not logged in!!!");
                    resolve(false);
                }
            });
        });
    };
}
