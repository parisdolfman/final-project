import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import './App.css';
import Home from './containers/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import MyProfile from './containers/MyProfile'
import CharityContainer from './containers/CharityContainer'
import NavBar from './components/NavBar'
import PrivateRoute from './containers/PrivateRoute'
import CharityPage from './components/CharityPage'


function App() {
  const history = useHistory();
  return (
    <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/login' component={Login} history={history}/>
            <Route exact path='/signup' component={Signup} history={history}/>
            <Route exact path="/" component={Home} history={history}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App
