const view = {};
view.setActiveScreen = (screenName) => {
    const app = document.getElementById("app");
    switch (screenName) {
        case "loginPage":
            if (app) {
                app.innerHTML = components.loginPage;
            }
            const registerLink = document.getElementById("register-link");
            const resetPasswordLink = document.getElementById("reset-password-link");
            if (registerLink) {
                registerLink.addEventListener("click", (event) => {
                    view.setActiveScreen('registerPage');
                });
            }
            if (resetPasswordLink) {
                resetPasswordLink.addEventListener("click", (event) => {
                    view.setActiveScreen('resetPasswordPage');
                });
            }

            const loginForm = document.getElementById("login-form");
            console.log(loginForm);
            if (loginForm) {
                // listen submit
                loginForm.addEventListener("submit", (event) => {
                    event.preventDefault();

                    const email = loginForm.email.value;
                    const password = loginForm.password.value;

                    controller.validateLoginInfo(email, password);
                });
            }
            break;
        case "registerPage":
            if (app) {
                app.innerHTML = components.registerPage;
            }
            // listen link click
            const loginLink = document.getElementById("login-link");
            if (loginLink) {
                loginLink.addEventListener("click", (event) => {
                    view.setActiveScreen('loginPage');
                });
            }

            const registerForm = document.getElementById("register-form");
            console.log(registerForm);
            if (registerForm) {
                //listen submit
                registerForm.addEventListener("submit", (event) => {
                    event.preventDefault();

                    const firstName = registerForm.firstName.value;
                    const lastName = registerForm.lastName.value;
                    const email = registerForm.email.value;
                    const password = registerForm.password.value;
                    const confirmPassword = registerForm.confirmPassword.value;

                    controller.validateRegisterInfo(firstName, lastName, email, password, confirmPassword);
                });
            }
            break;
        case "chatPage":
            if (app) {
                app.innerHTML = components.chatPage;
            }
            break;
        case "resetPasswordPage":
            if (app) {
                app.innerHTML = components.resetPasswordPage;
            }
            const loginLinkBack = document.getElementById("login-link");
            const registerLinkBack = document.getElementById("register-link");
            if (loginLinkBack) {
                loginLinkBack.addEventListener("click", (event) => {
                    view.setActiveScreen("loginPage");
                });

            }
            if (registerLinkBack) {
                registerLinkBack.addEventListener("click", (event) => {
                    view.setActiveScreen("registerPage")
                });
            }
            const resetPasswordForm = document.getElementById("reset-password-form");
            console.log(resetPasswordForm);
            if(resetPasswordForm) {
                resetPasswordForm.addEventListener("submit", (event) =>{
                    event.preventDefault();
                    const email = resetPasswordForm.email.value;
                    controller.resetPassword(email);
                });
            }
            break;
    }
}

view.renderErrorMessage = (elementID, errorMessage) => {
    const element = document.getElementById(elementID);
    if (element) {
        element.innerText = errorMessage;
    }
};

view.clearRegisterInfo = () => {
    const registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.firstName.value = " ";
        registerForm.firstName.value = " ";
        registerForm.firstName.value = " ";
        registerForm.firstName.value = " ";
        registerForm.firstName.value = " ";
    }
};