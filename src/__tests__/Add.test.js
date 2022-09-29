import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'

import Add from '../Add';

describe('App', () => {
  test('renders App component', async () => {
    render(<Add />);

    await screen.findByText(/Todo/);

    await userEvent.type(screen.getByTestId('todo-input'), 'Uno');

    expect(
      screen.getByDisplayValue(/Uno/)
    ).toBeInTheDocument();
  });
});