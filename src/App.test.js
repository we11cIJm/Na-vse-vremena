import { render, screen } from '@testing-library/react';
import App from './App';
import Ap from './App';

test('renders learn react link', () => {
  render(<App />);
  Ap();

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
