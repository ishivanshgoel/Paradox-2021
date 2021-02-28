import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "./register_css/register.css"

// Requests
import POST_Request from '../../Helper/PostRequest'

/**
 * Level 1 Route - /register
 * @author TanayBhadula, ishivanshgoel
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

  // handle form submission
  let handleSubmit = async (event) => {
    event.preventDefault()
    console.log(name, userName, email, discord, institutionName, password, cpassword)

    const data = {
      name: name,
      userName: userName,
      email: email,
      discord: discord,
      institutionName: institutionName,
      password: password
    }

    try{
      const response = await POST_Request('register', data);
      if(response.data && response.data.accessToken) {
        alert("True");
      }
      else {
        alert("Error");
      }
    } catch(err){
      console.log(err)
    }
       
  }

  return (

    !user?(

    <div class="container p-0" onSubmit={handleSubmit}>
      <div class="row">
        <div class="col-12 offset-lg-3 col-lg-6 offset-md-2 col-md-8 p-0">
          <form class="register__box">
            <h1>Register</h1>
            <input type="text" name="name" placeholder="Name" required onChange={(event) => setName(event.target.value)} />
            <input type="text" name="userName" placeholder="username" required onChange={(event) => setuserName(event.target.value)} />
            <input type="text" name="email" placeholder="Email" required onChange={(event) => setEmail(event.target.value)} />
            <input type="text" name="discord" placeholder="Discord userName" required onChange={(event) => setDiscord(event.target.value)} />
            <input type="text" name="institutionName" placeholder="Institution Name" required onChange={(event) => setinstitutionName(event.target.value)} />
            <input type="password" name="password" placeholder="Password" required onChange={(event) => setPassword(event.target.value)} />
            <input type="password" name="cpassword" placeholder="Confirm Password" required onChange={(event) => setcPassword(event.target.value)} />
            <input type="submit" name="login" />
          </form>
        </div>
      </div>
    </div>
    ):(
      <div>
        {
          history.push("/user/play")
        }
      </div>
    )
  )
}

export default Register
