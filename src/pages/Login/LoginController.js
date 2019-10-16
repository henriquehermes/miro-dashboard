import React, { useState } from 'react';

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
    } else {
      if (username === 'user' && password === 'user') {
        localStorage.setItem('username', username);
        history.push('/dashboard');
      } else {
        alert('User not found.');
      }
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

export default LoginController;
