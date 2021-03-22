import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "./register_css/register.css"
import focus from '../focus'

// loading scrren
import LoaderHook from '../Loader/LoaderHook'

// Requests
import POST_Request from '../../Helper/PostRequest'

/**
 * Level 1 Route - /register
 * @author TanayBhadula, ishivanshgoel, samankgupta
 */

function Register() {

  focus();
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

  //messages
  const [message, setMessage] = useState({
    display: false,
    color: 'red',
    message: ''
  })

  function validatePassword() {
    var regex = /^[a-zA-Z]{8,32}$/
    if (regex.test(password)) {
      if (password !== cpassword)
        return 404
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

    if (validatePassword() === 404) {
      setMessage({
        display: true,
        color: 'yellow',
        message: 'Password and confirm password does not match.'
      })


      hideLoader()
      return
    } else if (validatePassword() === false) {
      setMessage({
        display: true,
        color: 'red',
        message: 'Your password is too weak. Please enter a new password.'
      })

      hideLoader()
      return
    }

    try {
      const response = await POST_Request('register', data);
      if (response.data && response.data.accessToken) {
        setMessage({
          display: true,
          color: 'green',
          message: 'Registered Successfully!!'
        })
      }
      else {
        setMessage({
          display: true,
          color: 'red',
          message: 'You are already registered or Some Internal Server Error !!'
        })
      }
    } catch (err) {
      setMessage({
        display: true,
        color: 'red',
        message: 'Sorry, We are facing some Internal Server Error.'
      })
    }
    hideLoader()
  }

  return (

    !user ? (

      <div className="register_container">
        {loading}
        <div className="btn--primary">
          <form onSubmit={handleSubmit}>
            <h1>REGISTER</h1>
            {
              message.display ? (<p style={{ color: message.color }}>{message.message}</p>) : (null)
            }
            <div className="editor-field editor-field__textbox">
              <div className="editor-field__label-container">
                <label className="editor-field__label">Name</label>
              </div>
              <div className="editor-field__container">
                <input type="text" className="editor-field__input" placeholder="Name" required onChange={(event) => setName(event.target.value)} />
              </div>
            </div>
            <div className="editor-field editor-field__textbox">
              <div className="editor-field__label-container">
                <label className="editor-field__label">Username</label>
              </div>
              <div className="editor-field__container">
                <input type="text" className="editor-field__input" placeholder="Username" required onChange={(event) => setuserName(event.target.value)} />
              </div>
            </div>
            <div className="editor-field editor-field__textbox">
              <div className="editor-field__label-container">
                <label className="editor-field__label">Email</label>
              </div>
              <div className="editor-field__container">
                <input type="email" className="editor-field__input" placeholder="emailid@example.com" required onChange={(event) => setEmail(event.target.value)} />
              </div>
            </div>
            <div className="editor-field editor-field__textbox">
              <div className="editor-field__label-container">
                <label className="editor-field__label">Discord Username</label>
              </div>
              <div className="editor-field__container">
                <input type="text" className="editor-field__input" placeholder="username#1234" required onChange={(event) => setDiscord(event.target.value)} />
              </div>
            </div>
            <div className="editor-field editor-field__textbox">
              <div className="editor-field__label-container">
                <label className="editor-field__label">Institution Name</label>
              </div>
              <div className="editor-field__container">
                <input type="text" className="editor-field__input" placeholder="VIT Chennai" required onChange={(event) => setinstitutionName(event.target.value)} />
              </div>
            </div>
            <div className="editor-field editor-field__textbox">
              <div className="editor-field__label-container">
                <label className="editor-field__label">Password</label>
              </div>
              <div className="editor-field__container">
                <input type="password" className="editor-field__input" placeholder="Password" required onChange={(event) => setPassword(event.target.value)} />
              </div>
            </div>
            <div className="editor-field editor-field__textbox">
              <div className="editor-field__label-container">
                <label className="editor-field__label">Confirm Password</label>
              </div>
              <div className="editor-field__container">
                <input type="password" className="editor-field__input" placeholder="Confirm Password" required onChange={(event) => setcPassword(event.target.value)} />
              </div>
            </div>
            <button type="submit" className="register__button">
              Register
            </button>
          </form>
        </div>
      </div>
    ) : (
        <div>
          {
            history.push("/user/play")
          }
        </div>
      )
  )
}

export default Register
