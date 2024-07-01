import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/api';
import Starfield from 'react-starfield';
import './Starfield.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(username, password);
      localStorage.setItem('token', response.data.access_token);
      navigate('/todos');
    } catch (error) {
      console.error('Login failed', error);
      alert('Login failed. Please check your username and password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative text-white">
      <Starfield
        style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}
      />
      <div className="card w-full max-w-md relative z-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-2">Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg"
              aria-label="Username"
            />
          </div>
          <div>
            <label className="block mb-2">Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg"
              aria-label="Password"
            />
          </div>
          <button type="submit" className="w-full p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
