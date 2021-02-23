import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom CSS
import './App.css';

// Level 1 Components
import Homepage from './components/Homepage'
import Rules from './components/Rules'
import Login from './components/User/Login'
import Register from './components/Register/Register'
import Alogin from './components/Admin/Alogin'

// Level 2 Components
import Play from './components/User/Play'
import Leaderboard from './components/User/Leaderboard'

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar dark-navbar navbar-expand-lg ">
          <div className="container-fluid ">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
              <ul className="navbar-nav d-flex justify-content-center nav-container">
                 <li className="nav-item nav__item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item nav__item">
                  <Link to="/rules">Rules</Link>
                </li>
                <li className="nav-item nav__item">
                  <Link to="/user/play">Play</Link>
                </li>
                <li className="nav-item nav__item">
                  <Link to="/user/leaderboard">Leaderboard</Link>
                </li>

                {/* remove this button later */}
                <li className="nav-item nav__item">
                  <Link to="/admin">Admin</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
            <Switch>
              {/* level 1 routes */}
              <Route exact path="/">
                <Homepage/>
              </Route>
              <Route exact path="/rules">
                <Rules/>
              </Route>
              <Route exact path="/user">
                <Login/>
              </Route>
              <Route exact path="/register">
                <Register/>
              </Route>
              <Route exact path="/admin">
                <Alogin/>
              </Route>


              {/* level 2 routes */}
              <Route exact path="/user/play">
                <Play/>
              </Route>
              <Route exact path="/user/leaderboard">
                <Leaderboard/>
              </Route>

            </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
