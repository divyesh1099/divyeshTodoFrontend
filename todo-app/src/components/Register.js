import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api/api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(username, password);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block mb-2">Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg"
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
            />
          </div>
          <button type="submit" className="w-full p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
