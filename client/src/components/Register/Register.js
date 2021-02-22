import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./register_css/register.css";
/**
 * Level 1 Route - /register
 * 
 */
/**
@author: TanayBhadula
*/

function Register() {
    return (
        <div>
          <div class="container p-0">
            <div class="row">
              <div class="col-12 offset-lg-3 col-lg-6 offset-md-2 col-md-8 p-0">
                <form class="register__box">
                  <h1>Register</h1>
                  <input type="text" name="name" placeholder="Name" required="">
                  <input type="text" name="userName" placeholder="Username" required="">
                  <input type="text" name="email" placeholder="Email" required="">
                  <input type="text" name="discord" placeholder="Discord Username" required="">
                  <input type="text" name="institutionName" placeholder="Institution Name" required="">
                  <input type="password" name="password" placeholder="Password" required="">
                  <input type="password" name="cpassword" placeholder="Confirm Password" required="">
                  <input type="submit" name="login" value="Login">
                </form>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Register
