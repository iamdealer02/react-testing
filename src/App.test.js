import { render, screen } from '@testing-library/react';
import App from './App';
import NoteList from './components/NoteList';
import '@testing-library/jest-dom/extend-expect';

jest.mock('./components/NoteList');

test('renders Notes component in App', () => {
  NoteList.mockImplementation(() => <div>Notes Component</div>);

  render(<App />);

  expect(screen.getByText(/Notes Component/i)).toBeInTheDocument();
});
