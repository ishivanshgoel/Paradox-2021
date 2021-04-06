import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { SETADMIN } from '../../Reducers/ActionTypes'

// loading screen
import LoaderHook from '../Loader/LoaderHook'

// Helper
import POST_Request from '../../Helper/PostRequest'


/**
 * Level 1 Route - /admin
 * @author TanayBhadula, ishivanshgoel, samankgupta
 */

function ALogin() {

  // fetch from store
  const admin = useSelector(state => state.admin)
  const history = useHistory()
  const dispatch = useDispatch()

  // state variables
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  // loader
  const[loader, showLoader, hideLoader] = LoaderHook()


  // form submission
  let handleSubmit = async (event) => {
    event.preventDefault()
    
    // start loading screen
    showLoader()

    let data = {
      email,
      password
    }

    const response = await POST_Request('alogin', data)

    console.log(response.data)

    if (response.data) {
      dispatch({
        type: SETADMIN,
        token: true
      })
    } else {
      alert('error logging you in make sure you have admin access')
    }

    // hide loader
    hideLoader()

  }

  if(!admin) 
  return (
    <div className="login_container">
        {loader}
        <h1>ADMIN LOGIN</h1>
        <div className="btn--primary">
        <form onSubmit={handleSubmit}>
          <div className="editor-field editor-field__textbox">
            <div className="editor-field__label-container">
              <label className="editor-field__label">Name</label>
            </div>
            <div className="editor-field__container">
              <input type="text" className="editor-field__input" placeholder="Email" required onChange={(event)=>setEmail(event.target.value)}/>
            </div>
          </div>
          <div className="editor-field editor-field__textbox">
            <div className="editor-field__label-container">
              <label className="editor-field__label">Password</label>
            </div>
            <div className="editor-field__container">
              <input type="password" className="editor-field__input" placeholder="Password" required onChange={(event)=>setPassword(event.target.value)} />
            </div>
          </div>
          <button type="submit" className="register__button">
            Login
            </button>
        </form>
        </div>
      </div>
  ) 

  history.push('/admin/dashboard')
  return null
}

export default ALogin