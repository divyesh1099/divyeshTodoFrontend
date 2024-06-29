

# Todo App

This is a minimalist, dark-themed Todo application built with React and Tailwind CSS. The application allows users to register, log in, and manage their todo items. Users can view the todo list without logging in, but must be logged in to add, update, or delete todos.

## Features

- User Authentication (Register and Login)
- View Todo List
- Add, Update, and Delete Todo Items (Authenticated Users Only)
- Minimalist Dark Theme inspired by Apple.com

## Technologies Used

- React
- Tailwind CSS
- Axios for API requests

## API Endpoints

The backend API is hosted at `https://divyeshtodo.pythonanywhere.com`. Below are the details of the API endpoints used:

### User Authentication

#### Register

- **Endpoint**: `POST /register`
- **Request Body**:
  ```json
  {
    "username": "user1",
    "password": "password123"
  }
  ```
- **Response**: `201 Created`

#### Login

- **Endpoint**: `POST /login`
- **Request Body**:
  ```json
  {
    "username": "user1",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "access_token": "your_jwt_token"
  }
  ```

### Todo Management

#### Get All Todos

- **Endpoint**: `GET /todos`
- **Response**:
  ```json
  [
    {
      "id": 1,
      "title": "Buy groceries",
      "description": "Milk, eggs, bread",
      "done": false
    }
  ]
  ```

#### Create Todo

- **Endpoint**: `POST /todos`
- **Headers**: `Authorization: Bearer <your_jwt_token>`
- **Request Body**:
  ```json
  {
    "title": "Buy groceries",
    "description": "Milk, eggs, bread"
  }
  ```
- **Response**: `201 Created`

#### Update Todo

- **Endpoint**: `PUT /todos/<id>`
- **Headers**: `Authorization: Bearer <your_jwt_token>`
- **Request Body**:
  ```json
  {
    "title": "Updated title",
    "description": "Updated description",
    "done": true
  }
  ```
- **Response**: `200 OK`

#### Delete Todo

- **Endpoint**: `DELETE /todos/<id>`
- **Headers**: `Authorization: Bearer <your_jwt_token>`
- **Response**: `200 OK`

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todo-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd todo-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`.

### Project Structure

```
todo-app/
├── public/
├── src/
│   ├── api/
│   │   └── api.js
│   ├── components/
│   │   ├── Login.js
│   │   ├── Register.js
│   │   └── TodoList.js
│   ├── index.css
│   ├── index.js
│   └── App.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

### Components

- **Login**: Component for user login.
- **Register**: Component for user registration.
- **TodoList**: Component to display and manage the todo list.

### API Service

- **api.js**: Contains functions to make API requests for user authentication and todo management.

### Styling

- Tailwind CSS is used for styling. Custom configurations are set in `tailwind.config.js`.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.
