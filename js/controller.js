const controller = {};

const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

controller.validateLoginInfo = (email, password) => {

    if (!email) {        
        view.renderErrorMessage("email-error-message","Please enter email");
    } else if (!emailRegex.test(email)) {
        view.renderErrorMessage("email-error-message","Invalid email address");
    } else {
        view.renderErrorMessage("email-error-message","");
    }

    if (!password){
        view.renderErrorMessage("password-error-message","Please enter password");
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
    if (!lastName || !firstName) {
        view.renderErrorMessage("name-error-mesage","Please enter your First Name and Last Name");
    }
    
    if (!email) {        
        view.renderErrorMessage("email-error-message","Please enter email");
    } else if (!emailRegex.test(email)) {
        view.renderErrorMessage("email-error-message","Invalid email address");
    } else {
        view.renderErrorMessage("email-error-message","");
    }

    if (!password){
        view.renderErrorMessage("password-error-message","Please enter password");
    } else {
        view.renderErrorMessage("password-error-message","");
    }

    if(!confirmPassword) {
        view.renderErrorMessage("confirm-password-error-message","Please enter password");
    } else if(password != confirmPassword){
        view.renderErrorMessage("confirm-password-error-message","Two passwords do not match");
    } else{
        view.renderErrorMessage("confirm-password-error-message","");
    }
};