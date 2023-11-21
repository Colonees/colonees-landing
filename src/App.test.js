import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Collaborate with us as we build the most intelligent system out of Africa that will redefine the hiring and global work process./i);
  expect(linkElement).toBeInTheDocument();
});
