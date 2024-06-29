import axios from 'axios';

const API_URL = 'https://divyeshtodo.pythonanywhere.com';

export const register = async (username, password) => {
  return await axios.post(`${API_URL}/register`, { username, password });
};

export const login = async (username, password) => {
  return await axios.post(`${API_URL}/login`, { username, password });
};

export const getTodos = async (token) => {
  return await axios.get(`${API_URL}/todos`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const createTodo = async (token, title, description) => {
  return await axios.post(
    `${API_URL}/todos`,
    { title, description },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const updateTodo = async (token, id, title, description, done) => {
  return await axios.put(
    `${API_URL}/todos/${id}`,
    { title, description, done },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const deleteTodo = async (token, id) => {
  return await axios.delete(`${API_URL}/todos/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
