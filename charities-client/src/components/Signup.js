import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { signUp_user } from '../actions/authActions';

const SignUp = ({ signUp_Auth }) => {
  const [err, setErr] = useState(false);

  const histroy = useHistory();
  const username = useRef('');
  const name = useRef('');
  const password = useRef('');

  const handleError = () => {
    setTimeout(() => {
      setErr(false);
    }, 4000);
    setErr(true);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (
      name.current.value === '' ||
      username.current.value === '' ||
      password.current.value === ''
    ) {
      handleError();
      return false;
    }
    signUp_Auth({
      name: name.current.value,
      username: username.current.value,
      password_digest: password.current.value,
    });
    setTimeout(() => {
      
      histroy.push('/');
    }, 600);
  };

  return (
    <div className="signup-page">
      <h2> SignUp </h2>
      <form className="signup-form" onSubmit={handleSignUp}>
        <label htmlFor="basic-url">Username</label>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            className={err ? 'border border-danger' : ''}
            ref={username}
          />
        </InputGroup>
        <label htmlFor="basic-url">Password</label>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="password"
            aria-label="password"
            aria-describedby="basic-addon1"
            type="password"
            border="danger"
            className={err ? 'border border-danger' : ''}
            ref={password}
          />
        </InputGroup>
        <label htmlFor="basic-url">Name</label>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="name"
            aria-label="name"
            aria-describedby="basic-addon1"
            className={err ? 'border border-danger' : ''}
            ref={name}
          />
        </InputGroup>
        <Button type="submit" className="w-100" variant="primary">
          SignUp
        </Button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  signUp_Auth: (user_info) => signUp_user(user_info),
};

export default connect(null, mapDispatchToProps)(SignUp);
