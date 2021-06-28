import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HomePageContainer from './containers/HomePageContainer';
import NavBarContainer from './containers/NavBarContainer';
import SecureRoute from './helpers/SecureRoute';
import Profile from './components/Profile';
import ShowPage from './components/ShowPage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarContainer />
        <Switch>
          <SecureRoute exact path="/" component={HomePageContainer} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <SecureRoute path="/profile" component={Profile} />
          <SecureRoute path="/charities/:id" component={ShowPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
