import React, { useState } from 'react';

import { Container, Box, Title, Form, Footer } from './styles';

export default function Login({ history }) {
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
    <Container>
      <Box>
        <Title>Bem Vindo</Title>
        <Form>
          <label>Username</label>
          <input
            id='username'
            type='text'
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
          <label>Password</label>
          <input
            id='username'
            type='password'
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <Footer>
            <button onClick={e => handleSubmit(e)}>Login</button>
          </Footer>
        </Form>
      </Box>
    </Container>
  );
}
