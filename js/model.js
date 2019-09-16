const model = {};

model.loggedUser = undefined;

model.conversations = undefined;

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

model.saveMessage = (newMessageContent) => {
    const newMessage = {
        content: newMessageContent,
        user: model.loggedUser.email,
        createdAt: new Date(),
        displayName: model.loggedUser.displayName
    }
    const db = firebase.firestore();
    db.collection("conversations")
        .doc("cwO0ALnsi6rQuf5gfQou")
        .update({
            messages: firebase.firestore.FieldValue.arrayUnion(newMessage),
        });
};

model.saveUser = (newUser) => {
    const db = firebase.firestore();
    db.collection("conversations")
        .doc("cwO0ALnsi6rQuf5gfQou")
        .update({
            users: firebase.firestore.FieldValue.arrayUnion(newUser),
        });
};

model.loadConversations = () => {
    const db = firebase.firestore();
    db.collection("conversations")
        .where("users", "array-contains", model.loggedUser.email)
        .onSnapshot((snapshot) => {
            const conversations = [];
            snapshot.docs.forEach((item) => {
                const conversation = item.data();
                conversation.id = item.id;
                conversations.push(conversation);
            });

            const activeConversation = conversations[0];

            if (model.conversations) {
                // render last message
                if (activeConversation) {
                    // render message
                    const newMessage = activeConversation.messages[activeConversation.messages.length - 1]
                    if (newMessage.user === model.loggedUser.email){
                        view.sendMessage("",newMessage.content);
                    } else {
                        view.sendMessage(newMessage.displayName, newMessage.content)
                    }
                }
            } else {
                // render all message
                model.conversations = conversations;

                if(activeConversation) {
                    activeConversation.messages.forEach((mess) => {
                        if (mess.user === model.loggedUser.email) {
                            view.sendMessage("", mess.content);
                        } else {
                            view.sendMessage(mess.displayName, mess.content);
                        }
                    });
                }
            }

        });
};