const model = {};

model.loginUser = (email, password) => {

};

model.createNewUser = (
    fisrtName,
    lastName,
    email,
    password
) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((registerRusult) => {
        //update displayNAme
        registerRusult.user.updateProfile({
            displayName: `${fisrtName} ${lastName}`
        });
        //sendVerifyEmail
        registerRusult.user.sendEmailVerification();
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