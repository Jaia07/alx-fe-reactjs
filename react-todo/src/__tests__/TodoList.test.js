import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TodoList from '../components/TodoList';

describe('TodoList', () => {
    it('renders initial todos', () => {
      render(<TodoList />);
      expect(screen.getByText('Go to the grocery store')).toBeInTheDocument();
      expect(screen.getByText('Do laundry')).toBeInTheDocument();
      expect(screen.getByText('Finish this project')).toBeInTheDocument();
    });
  
    it('adds a new todo', () => {
      render(<TodoList />);
      const input = screen.getByPlaceholderText('Add a new todo');
      const button = screen.getByText('Add');
  
      fireEvent.change(input, { target: { value: 'Buy milk' } });
      fireEvent.click(button);
  
      expect(screen.getByText('Buy milk')).toBeInTheDocument();
    });
  
    it('toggles a todo', () => {
      render(<TodoList />);
      const todo = screen.getByText('Go to the grocery store');
  
      expect(todo).not.toHaveStyle('text-decoration: line-through');
      fireEvent.click(todo);
      expect(todo).toHaveStyle('text-decoration: line-through');
      fireEvent.click(todo);
      expect(todo).not.toHaveStyle('text-decoration: line-through');
    });
  
    it('deletes a todo', () => {
      render(<TodoList />);
      const todo = screen.getByText('Do laundry');
      const deleteButton = todo.querySelector('button');
  
      fireEvent.click(deleteButton);
  
      expect(screen.queryByText('Do laundry')).toBeNull();
    });
  });