import React, { useState } from 'react';
import PropTypes from 'prop-types';

import LoginComponent from './LoginComponent';

const LoginController = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('username', username);
      localStorage.setItem('admin', true);
      history.push('/dashboard');
    } else if (username === 'user' && password === 'user') {
      localStorage.setItem('username', username);
      history.push('/dashboard');
    } else {
      // eslint-disable-next-line no-alert
      alert('User not found.');
    }
  }

  return (
    <LoginComponent
      handleSubmit={e => handleSubmit(e)}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
    />
  );
};

LoginController.propTypes = {
  history: PropTypes.func.isRequired,
};

export default LoginController;
