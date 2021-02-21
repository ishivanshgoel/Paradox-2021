import React from 'react'
import "./register_css/register.css";
/**
 * Level 1 Route - /register
 * 
 */


function Register() {
    return (
        <div>
            <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <link rel="stylesheet" href="register_css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    
    <link rel="stylesheet" href="register_css/register.css">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Poppins&display=swap" rel="stylesheet">
    <title>PARADOX | Register</title>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg px-5 pt-4">
        <a class="register__navbar-brand" href="">PARADOX</a>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <div></div>
          <div></div>
          <div></div>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <a class="nav-link" href="">HOME</a>
            <a class="nav-link" href="">PLAY</a>
            <a class="nav-link" href="">LEADERBOARD</a>
            <a class="nav-link " href="">LOGIN</a>
             
          </div>
        </div>
      </nav>
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

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="js/menujs.js"></script>
  </body>
</html>

        </div>
    )
}

export default Register
