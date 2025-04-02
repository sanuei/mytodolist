import React, { useState } from 'react';
import styled from 'styled-components';


const FormContainer = styled.form`
  display: flex;
  margin-bottom: 30px;
  gap: 10px; /* Spacing between elements */
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 12px 15px;
  border: none;
  border-radius: 8px;
  background-color: var(--color-primary);
  color: var(--color-text-dark);
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;

  &::placeholder {
    color: #888;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: var(--color-accent); /* Orange background */
  color: var(--color-text-dark); /* Dark text for contrast */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d95f1a; /* Darker orange on hover */
  }
`;

function AddTodoForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return; // Don't add empty titles
    onAdd({ title, description, completed: false });
    setTitle('');
    setDescription('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Task description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="submit">Add</Button>
    </FormContainer>
  );
}

export default AddTodoForm; 