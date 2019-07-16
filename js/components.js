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
                <a href="#"  id="register-link">Don't have an account? Register</a><br>
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
            <div class="name">
                <input type="text" id="fisrtName" placeholder="Fisrt Name" />
                <input type="text" id="lastName" placeholder="Last Name" />
            </div>
            <div class="error-message" id="name-error-message">&nbsp;</div>
            <div>
                <input type="email" name="email" placeholder="Email Address" />
                <div class="error-message" id="email-error-message">&nbsp;</div>
            </div>

            <div>
                <input type="password" name="password" placeholder="Password" />
                <div class="error-message" id="password-error-message">&nbsp;</div>
            </div>

            <div>
                <input type="password" name="confirm-password" placeholder="Confirm Password" />
                <div class="error-message" id="confirm-password-error-message">&nbsp;</div>
            </div>
                <div>
                    <br>
                    <a href="#" id="login-link">Already have an account? Log In</a><br>
                    <br>
                    <input type="submit" value="Register" />
                    <br>
                </div>
        </form>
    </div>
</div>
`;