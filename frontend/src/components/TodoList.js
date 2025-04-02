import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 30px;
`;

function TodoList({ todos, onToggleComplete, onDelete }) {
  return (
    <ListContainer>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </ListContainer>
  );
}

export default TodoList; 