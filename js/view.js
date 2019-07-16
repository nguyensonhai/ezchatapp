const view = {};
view.setActiveScreen = (screenName) => {
    const app = document.getElementById("app");
    switch (screenName) {
        case "loginPage":
            if (app) {
                app.innerHTML = components.loginPage;
            }
            const registerLink = document.getElementById("register-link");
            if (registerLink) {
                registerLink.addEventListener("click", (event) => {
                    view.setActiveScreen('registerPage');
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
    }
}

view.renderErrorMessage = (elementID, errorMessage) => {
    const element = document.getElementById(elementID);
    if (element) {
        element.innerText = errorMessage;
    }
};