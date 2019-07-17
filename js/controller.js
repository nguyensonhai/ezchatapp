const controller = {};

const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

controller.validateLoginInfo = (email, password) => {

    if (!email) {        
        view.renderErrorMessage("email-error-message","Enter your Email Address");
    } else if (!emailRegex.test(email)) {
        view.renderErrorMessage("email-error-message","Invalid Email Address");
    } else {
        view.renderErrorMessage("email-error-message","");
    }

    if (!password){
        view.renderErrorMessage("password-error-message","Enter your Password");
    } else {
        view.renderErrorMessage("password-error-message","");
    }
    // check database
    if( email && password){
        // call model => check database
        model.loginUser(email,password);
    }
};

controller.validateRegisterInfo = (firstName, lastName, email, password, confirmPassword) => {

    view.renderErrorMessage("success-message", "");
    if (!lastName || !firstName) {
        view.renderErrorMessage("name-error-message","Enter your First Name and Last Name");
    } else {
        view.renderErrorMessage("name-error-message","");
    }
    
    if (!email) {        
        view.renderErrorMessage("email-error-message","Enter your Email Address");
    } else if (!emailRegex.test(email)) {
        view.renderErrorMessage("email-error-message","Invalid Email Address");
    } else {
        view.renderErrorMessage("email-error-message","");
    }

    if (!password){
        view.renderErrorMessage("password-error-message","Enter your Password");
    } else {
        view.renderErrorMessage("password-error-message","");
    }

    if(!confirmPassword) {
        view.renderErrorMessage("confirm-password-error-message","Enter your Confirm Password");
    } else if(password != confirmPassword){
        view.renderErrorMessage("confirm-password-error-message","Two passwords do not match");
    } else{
        view.renderErrorMessage("confirm-password-error-message","");
    }

    if (firstName && lastName && emailRegex.test(email) && password && confirmPassword === password){
        // call model => save user to database
        model.createNewUser(
            firstName,
            lastName,
            email,
            password
        );
    }
};

controller.resetPassword = (email) => {
    if (!email) {        
        view.renderErrorMessage("email-error-message","Enter your Email Address");
        view.renderErrorMessage("success-message", "");
    } else if (!emailRegex.test(email)) {
        view.renderErrorMessage("email-error-message","Invalid Email Address");
        view.renderErrorMessage("success-message", "");
    } else {
        model.resetPassword(email);
    }
};