import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useSelector} from 'react-redux'

//Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom CSS
import './App.css';

// Level 1 Components
import Homepage from './components/Homepage'
import Teams from './components/Teams'
import Rules from './components/Rules'
import Login from './components/User/Login'
import Register from './components/Register/Register'
import Alogin from './components/Admin/Alogin'

// Level 2 Components
import Play from './components/User/Play'
import Leaderboard from './components/User/Leaderboard'
import Dashboard from './components/Dashboard/Dashboard'

// images
import Mainlogo from './components/logos/logo6.png'

function App() {

  // fetch user from store
  const user = useSelector(state => state.user)

  return (
    <div className="App">
      <Router>
        <nav className="navbar dark-navbar navbar-expand-md " role="navigation">
          <div className="container-fluid ">
            <a className="navbar-brand ml-3 d-md-none" href="/">
              <img src={Mainlogo} height="50" alt="" />
            </a>
            <button
              data-toggle="collapse"
              className="navbar-toggler mr-3 custom-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav mx-md-auto">
                <li className="nav-item nav__item">
                  <a href="/#aboutnav">About</a>
                </li>
                <li className="nav-item nav__item">
                  <a href="/#rulesnav">Rules</a>
                </li>
                <li className="nav-item nav__item">
                  <Link to="/">
                    <img src={Mainlogo} id="mainlogo" alt="" />
                  </Link>
                </li>
                <li className="nav-item nav__item">
                  <Link to="/user/play">Play</Link>
                </li>
                <li className="nav-item nav__item">
                  <Link to="/user/leaderboard">Leaderboard</Link>
                </li>
                <li className="nav-item nav__item">
                  <Link to="/teams">Team</Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
        <div className="app__body">
          <Switch>
            {/* level 1 routes */}
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/rules">
              <Rules />
            </Route>
            <Route exact path="/user">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/admin">
              <Alogin />
            </Route>
            <Route exact path="/teams">
              <Teams />
            </Route>

            {/* level 2 routes */}
            <Route exact path="/user/play">
              <Play />
            </Route>
            <Route exact path="/user/leaderboard">
              <Leaderboard />
            </Route>

            <Route exact path="/admin/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
