const controller = {};

controller.validateLoginInfo = (email, password) => {

    const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!email) {        
        view.renderErrorMessage("email-error-message","Please input email")
    } else if (!emailRegex.test(email)) {
        view.renderErrorMessage("email-error-message","Invalid email address")
    } else {
        view.renderErrorMessage("email-error-message","")
    }

    if (!password){
        view.renderErrorMessage("password-error-message","Please input password")
    } else {
        view.renderErrorMessage("password-error-message","")
    }
};