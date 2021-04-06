import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { SETUSER } from '../../Reducers/ActionTypes'

// loading screen
import LoaderHook from '../Loader/LoaderHook'

// static
import "./login_css/loginstyle.css";


// Helper 
import POST_Request from '../../Helper/PostRequest'
import GET_Request from '../../Helper/GetRequest'
import { setItem, getItem } from '../../Helper/LocalStorage'

// Notification
import Notification from '../Notifications/Notification'


/**
 * Level 1 Route - /user
 * @author TanayBhadula, ishivanshgoel, samankgupta
 */

function Login() {

  // fetch from store
  const user = useSelector(state => state.user)
  const history = useHistory()
  const dispatch = useDispatch()

  // state variables
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  // loader
  const[loader, showLoader, hideLoader] = LoaderHook()

  // verify-access token
  useEffect(async()=>{
 
    // start loading screen
    showLoader()
    let token = getItem('token')
    let username = getItem('username')
    let id = getItem('id')

    // verify token
    if(token){
      // leaderboard route verifies token before giving out data
      const leaderboard = await GET_Request('leaderboard')
      
      if(leaderboard.data){
         dispatch({
        type: SETUSER,
        token: token,
        username: username,
        id: id
        })
      }
    }

    //hide loading screen
    hideLoader()
  },[])


  // form submission
  let handleSubmit = async (event) => {
    event.preventDefault()
    
    // start loading screen
    showLoader()

    const response = await POST_Request('login',{
      email,
      password
    });

    if (response.data && response.data.accessToken) {
      // set to local storage
      setItem('token', response.data.accessToken)
      setItem('username', response.data.username)
      setItem('id', response.data.id)
     
      dispatch({
        type: SETUSER,
        token: response.data.accessToken,
        username: response.data.username,
        id: response.data.id
      })
    } else {
      Notification("Warning", "Invalid Username/ Password", "danger")
    }

    // hide loader
    hideLoader()

  }

   let handleRedirect = (event) => {
     history.push(`/${event.target.name}`);
   };

  if(!user) return (
    <div className="login_container">
      {loader}
      <h1>LOGIN</h1>
      <div className="btn--primary">
        <form onSubmit={handleSubmit}>
          <div className="editor-field editor-field__textbox">
            <div className="editor-field__label-container">
              <label className="editor-field__label">Email</label>
            </div>
            <div className="editor-field__container">
              <input
                type="text"
                className="editor-field__input"
                placeholder="Email"
                required
                onChange={(event) => setEmail(event.target.value)}
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
          <button type="submit" className="register__button">
            Login
          </button>
        </form>
        <div className="login-bottom"></div>
        <div className="muted text-center mb-5 mt-1 authenticate-redirect">
          Don't Have an account?
          <a
            className="Blue__color mx-1"
            onClick={handleRedirect}
            name="register"
          >
            Register Here
          </a>
        </div>
        
      </div>
      <script href="/focus.js"></script>
    </div>
  ); 
  
  // redirect to play
  history.push("/user/play")

  return null
}

export default Login