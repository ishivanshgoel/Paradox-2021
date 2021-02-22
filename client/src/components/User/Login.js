import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./login_css/login.css";
/**
 * Level 1 Route - /user
 */
/**
 * @author TanayBhadula
 */

function Login() {
    return (
        <div>
          <div class="container p-0">
            <div class="row">
              <div class="col-12 offset-lg-3 col-lg-6 offset-md-2 col-md-8 p-0">
                 <form class="login__box">
                   <h1>Login</h1>
                   <input type="text" name="email" placeholder="Email" required="">
                   <input type="password" name="password" placeholder="Password" required="">
                   <input type="submit" name="login" value="Login">
                   <a href="signup.html">New User? Sign Up.</a>
                   <br class="d-block d-sm-none">
                   <a href="forgot.html">Forgot Password?</a>  
                 </form>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Login
