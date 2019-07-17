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
            window.alert("Your Email must be verified, check your Email.")
        }
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(errorMessage);
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
        window.alert("Register successful, check your Email.");
        view.setActiveScreen("loginPage");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
    });
};

model.resetPassword = (email) => {
    firebase.auth().sendPasswordResetEmail(email)
    .then((resetResult) => {
        window.alert("Request reset password successful, check your Email")
        view.setActiveScreen("loginPage");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
};
