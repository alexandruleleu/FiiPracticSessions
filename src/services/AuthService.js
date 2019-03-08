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

                    //register this account in firebase database
                    let userId = user.uid;
                    this.createNewAccount({
                        userId,
                        signUpEmail
                    }).then(() => {
                        const message =
                            "Your account it was successfully registered";
                        resolve({ message: message });
                    });
                },
                err => {
                    console.log(err);
                    const error = "Something went wrong...";
                    reject({ message: error });
                }
            );
        });
    };

    createNewAccount = payload => {
        return firebaseProvider
            .database()
            .ref("users")
            .child(payload.userId)
            .update({ email: payload.signUpEmail });
    };

    //login service
    onLoginUser = (email, password) => {
        // login method (firebase)
    };

    onLogoutUser = () => {
        // logout method (firebase)
    };

    checkIfLoggedIn = () => {
        // onAuthStateChanges - it checks if a specific user logged in
    };
}
