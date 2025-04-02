import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

// ?置axios的baseURL
const API_BASE_URL = 'http://localhost:8080';
axios.defaults.baseURL = API_BASE_URL;

// 使用全局?式确保字体和背景色?用
const GlobalStyle = createGlobalStyle`
  body {
    background-color: var(--color-background);
    color: var(--color-text);
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  }
`;

const AppContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
  background-color: #2b2b2b;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  color: var(--color-primary);
  text-align: center;
  font-weight: 700;
  font-size: 3rem;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

function App() {
  const [todos, setTodos] = useState([]);

  // ?取所有 Todos
  useEffect(() => {
    axios.get('/api/todos')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  }, []);

  // 添加 Todo
  const addTodo = (todo) => {
    axios.post('/api/todos', todo)
      .then(response => {
        setTodos([...todos, response.data]);
      })
      .catch(error => {
        console.error('Error adding todo:', error);
      });
  };

  // 更新 Todo (切?完成状?)
  const toggleComplete = (id) => {
    const todo = todos.find(t => t.id === id);
    const updatedTodo = { ...todo, completed: !todo.completed };

    axios.put(`/api/todos/${id}`, updatedTodo)
      .then(response => {
        setTodos(todos.map(t => (t.id === id ? response.data : t)));
      })
      .catch(error => {
        console.error('Error updating todo:', error);
      });
  };

  // ?除 Todo
  const deleteTodo = (id) => {
    axios.delete(`/api/todos/${id}`)
      .then(() => {
        setTodos(todos.filter(t => t.id !== id));
      })
      .catch(error => {
        console.error('Error deleting todo:', error);
      });
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Title>My TodoList</Title>
        <AddTodoForm onAdd={addTodo} />
        <TodoList
          todos={todos}
          onToggleComplete={toggleComplete}
          onDelete={deleteTodo}
        />
      </AppContainer>
    </>
  );
}

export default App;
