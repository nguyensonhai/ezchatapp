const components = {};

components.loginPage = `
<div class="app" id="login-screen">
<div id="login-form-container" class="login-form-container">
    <form id="login-form">
        <img src="../images/chat-logo.png" alt="logo" class="logo">
        <div>
            <input type="email" name="email" placeholder="Email Address" />
            <div class="error-message" id="email-error-message">&nbsp;</div>
        </div>

        <div>
            <input type="password" name="password" placeholder="Password" />
            <div class="error-message" id="password-error-message">&nbsp;</div>
        </div>

        <div>
            <div>
                <br>
                <span id="register-link">Don't have an account? Register</span><br>
                <br>
                <input type="submit" value="Log In" />
                <br>
            </div>
        </div>
    </form>
</div>
</div>
`;

components.registerPage = `
<div class="app" id="register-screen">
            <div id="register-form-container" class="register-form-container">
                <form id="register-form">
                    <div class="register-name">
                        <div class="name">
                            <input class="fisr-tname" type="text" id="fisrt-name" placeholder="Fisrt Name" />
                            <input class="last-name" type="text" id="last-name" placeholder="Last Name" />
                        </div>
                        <br>
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="Email Address" />
                        <div class="error-message" id="register-email-error-message">&nbsp;</div>
                    </div>

                    <div>
                        <input type="password" name="password" placeholder="Password" />
                        <div class="error-message" id="register-password-error-message">&nbsp;</div>
                    </div>

                    <div>
                            <input type="password" name="confirm-password" placeholder="Confirm Password" />
                            <div class="error-message" id="register-confirm-password-error-message">&nbsp;</div>
                    </div>

                    <div>
                        <div>
                            <br>
                            <span id="login-link">Do you have an account? Log In</span><br>
                            <br>
                            <input type="submit" value="Register" />
                            <br>
                        </div>
                    </div>
                </form>
            </div>
        </div>
`;