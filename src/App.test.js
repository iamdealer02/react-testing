import { render, screen } from '@testing-library/react';
import App from './App';
import HomePage from './views/HomePage';
import '@testing-library/jest-dom/extend-expect';

jest.mock('./views/HomePage');

test('renders HomePage at path /', () => {
  HomePage.mockImplementation(() => <div>HomePage</div>);

  render(<App />);

  expect(screen.getByText(/HomePage/i)).toBeInTheDocument();
});
