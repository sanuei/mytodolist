import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  margin-bottom: 15px;
  background-color: var(--color-secondary); /* Dark Blue Grey background */
  border-radius: 10px;
  color: var(--color-text);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5c708f; /* Slightly lighter shade on hover */
  }
`;

const TodoText = styled.span`
  flex-grow: 1;
  margin: 0 15px;
  font-size: 1.1rem;
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  opacity: ${props => (props.completed ? 0.6 : 1)};
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
  width: 20px;
  height: 20px;
  accent-color: var(--color-accent); /* Orange accent for checkbox */
`;

const DeleteButton = styled.button`
  background-color: var(--color-accent); /* Orange background */
  color: var(--color-text-dark); /* Dark text for contrast */
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d95f1a; /* Darker orange on hover */
  }
`;

function TodoItem({ todo, onToggleComplete, onDelete }) {
  return (
    <ItemContainer>
      <Checkbox
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
      />
      <TodoText $completed={todo.completed}>
        {todo.title}
        {todo.description && <small style={{ display: 'block', opacity: 0.8, marginTop: '5px' }}>{todo.description}</small>}
      </TodoText>
      <DeleteButton onClick={() => onDelete(todo.id)}>Delete</DeleteButton>
    </ItemContainer>
  );
}

export default TodoItem; 