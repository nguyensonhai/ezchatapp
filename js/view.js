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
                document.getElementById("conversation-name").innerText = model.loggedUser.displayName + " chat with Chat Bot";
            }
            
            // add message form listener
            const messageForm = document.getElementById('message-form');
            if (messageForm) {
                messageForm.addEventListener("submit", (event) => {
                    event.preventDefault();

                    const messageContainer = document.getElementById("message-container");
                    if (messageContainer) {
                        view.sendMessage("", messageForm.message.value);
                        view.sendMessage("Chat Bot", messageForm.message.value);
                        /* const newMessage = messageForm.message.value;
                        const messageElement = document.createElement("div");
                        messageElement.innerText = newMessage;
                        messageContainer.appendChild(messageElement);
                        messageForm.message.value = "";  */
                    }
                })
            }
            break;
        case "resetPasswordPage":
            view.renderErrorMessage("success-message", "");
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

view.clearResetInfo = () =>{
    const resetForm = document.getElementById("reset-password-form");
    if(resetForm) {
        resetForm.email.value = "";
    }
}

view.clearRegisterInfo = () => {
    const registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.firstName.value = "";
        registerForm.lastName.value = "";
        registerForm.email.value = "";
        registerForm.password.value = "";
        registerForm.confirmPassword.value = "";
    }
};

view.addMessage = (messageObject) => {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container');

    const message = document.createElement('div');
    message.classList.add('message');
    message.innerText = messageObject.content;

    if (messageObject.user === model.authUser.email) {
      messageContainer.classList.add('your');
    } else {
      const sender = document.createElement('div');
      sender.classList.add('sender');
      sender.innerText = messageObject.user;
      messageContainer.appendChild(sender);
    }

    messageContainer.appendChild(message);
    document.getElementById('conversation-messages').appendChild(messageContainer);
  };

  view.sendMessage = (sender, messageContent) => {
    const messageContainer = document.getElementById("message-container");
    if (messageContainer) {
        // create 3 div elêmnt
        const messageItem = document.createElement("div");
        const senderElement = document.createElement("div");
        const messageContentElement = document.createElement("div");

        // modify div.message-item
        messageItem.classList.add("message-item");
        if (sender) {
            messageItem.classList.add("other-message")
        } else {
            messageItem.classList.add("my-message");
        }

         // modify div.sender
        senderElement.classList.add("sender");
        if (sender) {
            senderElement.innerText = sender; 
        }
        
         // modify div.message-content
        messageContentElement.classList.add("message-content");
        messageContentElement.innerText = messageContent;

        // assemple
        messageItem.appendChild(senderElement);
        messageItem.appendChild(messageContentElement);

        // append
        messageContainer.appendChild(messageItem);
    }
  };