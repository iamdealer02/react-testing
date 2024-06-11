import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Note from '../components/Note';

const mockNote = {
    "_id": "1", 
    "title": 'Mock Title',
    "content": 'This is a mock content',
}
test('renders note', () => {
    render(<Note note={mockNote}/>);

    const titleElement = screen.getByText(/Mock Title/i);
    const contentElement = screen.getByText(/This is a mock content/i);

    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();

});