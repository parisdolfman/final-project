import React, { useRef, useEffect } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { login_user } from '../actions/authActions';
import { useHistory, useLocation, Redirect } from 'react-router-dom';
import { getCurrentUser } from '../helpers/index';



const Login = ({ login_Auth }) => {
  const history = useHistory();
  const location = useLocation()
  const username = useRef('');
  const password = useRef('');
const current_user = getCurrentUser()
   
useEffect(() => {
  console.log(location)
  // eslint-disable-next-line no-unused-expressions
  location.pathname == '/login' && current_user ? history.push('/') : null
})
  const handleLogin = (e) => {
    e.preventDefault();
    login_Auth({
      username: username.current.value,
      password_digest: password.current.value,
    });
    setTimeout(() => {
      
      history.push('/');
    }, 600);
  };

  return (
    <div className="login-page">
      <h2> Login </h2>
      <form className="login-form" onSubmit={handleLogin}>
        <label htmlFor="basic-url">Username</label>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            ref={username}
          />
        </InputGroup>
        <label htmlFor="basic-url">Password</label>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="password"
            aria-label="password"
            aria-describedby="basic-addon1"
            type='password'
            ref={password}
          />
        </InputGroup>
        <Button type="submit" className="w-100" variant="primary">
          Login
        </Button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  login_Auth: (user_info) => login_user(user_info),
};

export default connect(null, mapDispatchToProps)(Login);