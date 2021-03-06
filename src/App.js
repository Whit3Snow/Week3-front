import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import ChatingPage from './components/views/ChatingPage/ChatingPage'

function App() {
  return (
    <Router>
      <div>
        {/* <hr /> */}
        <Switch>
          <Route exact path="/" component = {LandingPage}/>
          <Route exact path="/login" component = {LoginPage}/>
          <Route exact path="/register" component = {RegisterPage}/>
          <Route exact path="/chat" component = {ChatingPage}/>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
