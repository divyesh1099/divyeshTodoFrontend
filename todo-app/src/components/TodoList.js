import React, { useState, useEffect, useCallback } from 'react';
import { getTodos, createTodo, updateTodo, deleteTodo, logout } from '../api/api';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const token = localStorage.getItem('token');

  const fetchTodos = useCallback(async () => {
    const response = await getTodos(token);
    setTodos(response.data);
  }, [token]);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleCreateTodo = async (e) => {
    e.preventDefault();
    if (!token) {
      alert('Please log in to add a todo.');
      return;
    }
    await createTodo(token, title, description);
    setTitle('');
    setDescription('');
    fetchTodos();
  };

  const handleUpdateTodo = async (id, done) => {
    if (!token) {
      alert('Please log in to update a todo.');
      return;
    }
    const todo = todos.find((t) => t.id === id);
    await updateTodo(token, id, todo.title, todo.description, done);
    fetchTodos();
  };

  const handleDeleteTodo = async (id) => {
    if (!token) {
      alert('Please log in to delete a todo.');
      return;
    }
    await deleteTodo(token, id);
    fetchTodos();
  };

  const handleLogout = async () => {
    if (!token) {
      alert('You are not logged in.');
      return;
    }
    try {
      await logout(token);
      localStorage.removeItem('token');
      window.location.reload();
    } catch (error) {
      console.error('Error logging out:', error);
      alert('Error logging out. Please try again.');
    }
  };

  const pendingTodos = todos.filter(todo => !todo.done);
  const completedTodos = todos.filter(todo => todo.done);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-center"><a href="https://www.linkedin.com/in/motidivya/">Divyesh's</a> Online Todo List</h2>
          {token && (
            <button
              onClick={handleLogout}
              className="p-2 bg-red-600 rounded-lg hover:opacity-75 transition"
            >
              Logout
            </button>
          )}
        </div>
        {token && (
          <form onSubmit={handleCreateTodo} className="space-y-4 mb-6">
            <div>
              <label className="block mb-2">Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg"
              />
            </div>
            <div>
              <label className="block mb-2">Description:</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg"
              />
            </div>
            <button type="submit" className="w-full p-2 bg-black rounded-lg hover:opacity-75 transition">
              Add Todo
            </button>
          </form>
        )}
        <h3 className="text-xl font-semibold mb-4">Pending Todos</h3>
        <ul className="space-y-4">
          {pendingTodos.map((todo) => (
            <li key={todo.id} className="bg-gray-700 p-4 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{todo.title}</h3>
                <p>{todo.description}</p>
              </div>
              <div className="space-x-2 flex items-center">
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => handleUpdateTodo(todo.id, !todo.done)}
                  className="w-6 h-6 text-black bg-gray-700 border-gray-600 rounded"
                />
                {token && (
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="p-2 bg-black rounded-lg hover:opacity-75 transition"
                  >
                    Delete
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
        {completedTodos.length > 0 && (
          <>
            <h3 className="text-xl font-semibold mt-8 mb-4">Completed Todos</h3>
            <ul className="space-y-4">
              {completedTodos.map((todo) => (
                <li key={todo.id} className="bg-gray-700 p-4 rounded-lg flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">{todo.title}</h3>
                    <p>{todo.description}</p>
                  </div>
                  <div className="space-x-2 flex items-center">
                    <input
                      type="checkbox"
                      checked={todo.done}
                      onChange={() => handleUpdateTodo(todo.id, !todo.done)}
                      className="w-6 h-6 text-black bg-gray-700 border-gray-600 rounded"
                    />
                    {token && (
                      <button
                        onClick={() => handleDeleteTodo(todo.id)}
                        className="p-2 bg-black rounded-lg hover:opacity-75 transition"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoList;
