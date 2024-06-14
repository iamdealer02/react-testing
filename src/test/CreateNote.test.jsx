import {  render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import CreateNote from "../components/CreateNote";
import userEvent from "@testing-library/user-event"


test('renders create note and submits calling HandleCreateFunction', () => {
    const handleCreateNote = jest.fn();
    render(<CreateNote handleCreateNote={handleCreateNote} />);
    const titleElement = screen.getByPlaceholderText('Title');
    const contentElement = screen.getByPlaceholderText('Content');
    const buttonElement = screen.getByTestId('create-btn');

     userEvent.type(titleElement, 'Mock Title');
     userEvent.type(contentElement, 'This is a mock content');

    expect(titleElement).toHaveValue('Mock Title');
    expect(contentElement).toHaveValue('This is a mock content');
    userEvent.click(buttonElement);

    expect(handleCreateNote).toHaveBeenCalledWith(
        { title: 'Mock Title', content: 'This is a mock content' });

});

 