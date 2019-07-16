const view = {};
view.setActiveScreen = () => {
    /*     const app = document.getElementById("app");
        if (app){
            app.innerHTML = components.welcomePage;
        }
     */
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
}

view.renderErrorMessage = (elementID, errorMessage) => {
    const element = document.getElementById(elementID);
    if (element) {
        element.innerText = errorMessage;
    }
};