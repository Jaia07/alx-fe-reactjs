import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Go to the grocery store', completed: false },
    { id: 2, text: 'Do laundry', completed: true },
    { id: 3, text: 'Finish this project', completed: false },
  ]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: todos.length + 1, text: text, completed: false },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <AddTodoForm onAddTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
            <button onClick={(e) => {e.stopPropagation(); deleteTodo(todo.id)}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;