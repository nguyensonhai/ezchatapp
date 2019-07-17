const model = {};

model.loggedUser = undefined;

model.loginUser = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((loginResult) => {
        //check emailVerified
        if (loginResult.user.emailVerified) {
             //login success
             model.loggedUser = {
                 id: loginResult.user.id,
                 displayName: loginResult.user.displayName,
                 email: loginResult.user.email
             }
             view.setActiveScreen("chatPage");
        } else {
            view.renderErrorMessage("password-error-message", "Your Email must be verified, check your Email.");
            /* window.alert("Your Email must be verified, check your Email."); */
        }
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        view.renderErrorMessage("password-error-message", errorMessage);
        /* window.alert(errorMessage); */
    });
};

model.createNewUser = (
    fisrtName,
    lastName,
    email,
    password
) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((registerResult) => {
        //update displayNAme
        registerResult.user.updateProfile({
            displayName: `${fisrtName} ${lastName}`
        });
        //sendVerifyEmail
        registerResult.user.sendEmailVerification();
        view.renderErrorMessage("success-message", "Register successful, check your Email");
        view.renderErrorMessage("error-message", "");
        /* window.alert("Register successful, check your Email.");
        view.setActiveScreen("loginPage"); */
        view.clearRegisterInfo();
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
            view.renderErrorMessage("error-message", "The password is too weak..");
          /* alert('The password is too weak.'); */
        } else {
            view.renderErrorMessage("error-message", errorMessage);
           
          /* alert(errorMessage); */
        }
        console.log(error);
    });
};

model.resetPassword = (email) => {
    firebase.auth().sendPasswordResetEmail(email)
    .then((resetResult) => {
        view.renderErrorMessage("success-message", "Your request accepted, check your Email.");
        view.renderErrorMessage("email-error-message", "");
        view.clearResetInfo();
  /*       window.alert("Request reset password successful, check your Email") */
        /* view.setActiveScreen("loginPage"); */
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        view.renderErrorMessage("email-error-message", errorMessage);
        /* alert(errorMessage); */
    });
};
