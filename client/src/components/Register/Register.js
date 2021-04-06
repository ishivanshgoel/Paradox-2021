import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import "./CSS/register.css"

// loading scrren
import LoaderHook from '../Loader/LoaderHook'

// Requests
import POST_Request from '../../Helper/PostRequest'

// Notification
import Notification from '../Notifications/Notification'

/**
 * Level 1 Route - /register
 * @author TanayBhadula, ishivanshgoel, samankgupta
 */

function Register() {
  //fetch from store
  const user = false

  const history = useHistory()

  // state variables
  const [name, setName] = useState(null)
  const [userName, setuserName] = useState(null)
  const [email, setEmail] = useState(null)
  const [discord, setDiscord] = useState(null)
  const [institutionName, setinstitutionName] = useState(null)
  const [password, setPassword] = useState(null)
  const [cpassword, setcPassword] = useState(null)

  // loading screen
  const [loading, showLoader, hideLoader] = LoaderHook()

  function validatePassword() {
    var regex = /^.{8,32}$/
    if (regex.test(password)) {
      if (password !== cpassword)
        return 404
      return true
    }
    else return false;
  }

  function validateDiscord() {
    var regex = /^([^(@)(#)(:)(`)]){2,32}#\d{4}$/
    if (regex.test(discord)) {
      return true
    }
    else return false;
  }

  // handle form submission
  let handleSubmit = async (event) => {
    event.preventDefault()

    // show loading screen
    showLoader()

    const data = {
      name: name,
      userName: userName,
      email: email,
      discord: discord,
      institutionName: institutionName,
      password: password
    }

    // scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' })

    if (validateDiscord() === false) {

      Notification("Warning", "Discord username is incorrect. (Format: Username#1234).", "warning")

      hideLoader()
      return
    }

    if (validatePassword() === 404) {

      Notification("Warning", "Password and confirm password does not match.", "warning")

      hideLoader()
      return
    } else if (validatePassword() === false) {

      Notification("Warning", "Password length should range b/w 8 to 32.", "danger")

      hideLoader()
      return
    }

    try {
      const response = await POST_Request('register', data);
      if (response.data && response.data.accessToken) {
      
        Notification("Success", "Registered Successfully!!", "success")

        showLoader()
        // wait for 3 seconds and redirect to login page
        setTimeout(function(){
          hideLoader()
          history.push("/user")
        }, 3000);

      }
      else if(response==="User Already Exists") {
        Notification("Warning", "You are already registered!!", "warning")
      }
      else{
        Notification("Error", "Cannot register!!", "danger")
      }
    } catch (err) {
      Notification("Sorry", "We are facing some Internal Server Error.", "warning")
    }
    hideLoader()
  }

   let handleRedirect = (event) => {
     history.push(`/${event.target.name}`);
   };

  return !user ? (
    <div className="register_container">
      {loading}
      <div className="btn--primary">
        <form onSubmit={handleSubmit}>
          <h1>REGISTER</h1>
          <div className="editor-field editor-field__textbox">
            <div className="editor-field__label-container">
              <label className="editor-field__label">Name</label>
            </div>
            <div className="editor-field__container">
              <input
                type="text"
                className="editor-field__input"
                placeholder="Name"
                required
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </div>
          <div className="editor-field editor-field__textbox">
            <div className="editor-field__label-container">
              <label className="editor-field__label">Username</label>
            </div>
            <div className="editor-field__container">
              <input
                type="text"
                className="editor-field__input"
                placeholder="Username"
                required
                onChange={(event) => setuserName(event.target.value)}
              />
            </div>
          </div>
          <div className="editor-field editor-field__textbox">
            <div className="editor-field__label-container">
              <label className="editor-field__label">Email</label>
            </div>
            <div className="editor-field__container">
              <input
                type="email"
                className="editor-field__input"
                placeholder="emailid@example.com"
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>
          <div className="editor-field editor-field__textbox">
            <div className="editor-field__label-container">
              <label className="editor-field__label">Discord Username</label>
            </div>
            <div className="editor-field__container">
              <input
                type="text"
                className="editor-field__input"
                placeholder="username#1234"
                required
                onChange={(event) => setDiscord(event.target.value)}
              />
            </div>
          </div>
          <div className="editor-field editor-field__textbox">
            <div className="editor-field__label-container">
              <label className="editor-field__label">Institution Name</label>
            </div>
            <div className="editor-field__container">
              <input
                type="text"
                className="editor-field__input"
                placeholder="VIT Chennai"
                required
                onChange={(event) => setinstitutionName(event.target.value)}
              />
            </div>
          </div>
          <div className="editor-field editor-field__textbox">
            <div className="editor-field__label-container">
              <label className="editor-field__label">Password</label>
            </div>
            <div className="editor-field__container">
              <input
                type="password"
                className="editor-field__input"
                placeholder="Password"
                required
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
          <div className="editor-field editor-field__textbox">
            <div className="editor-field__label-container">
              <label className="editor-field__label">Confirm Password</label>
            </div>
            <div className="editor-field__container">
              <input
                type="password"
                className="editor-field__input"
                placeholder="Confirm Password"
                required
                onChange={(event) => setcPassword(event.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="register__button">
            Register
          </button>
        </form>
        <div className="login-bottom"></div>
        <div className="muted text-center mb-5 pu-1 authenticate-redirect">
          Already Have an account?
          <a className="Blue__color mx-1" onClick={handleRedirect} name="user">
            Login Here
          </a>
        </div>
      </div>
      <script href="/focus.js"></script>
    </div>
  ) : (
    <div>{history.push("/user/play")}</div>
  );
}

export default Register
