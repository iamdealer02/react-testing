import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import HomePage from "../views/HomePage";
import * as Services from "../services/utils";
import userEvent from "@testing-library/user-event";

// spying on fetchAllNotes function before running the test
// to mock the data that will be returned from the api
beforeEach(() => {
    const mockNotes = [
        {
            _id: "1",
            title: "Mock Title 1",
            content: "This is a mock content 1",
        },
        {
            _id: "2",
            title: "Mock Title 2",
            content: "This is a mock content 2",
        },
    ];
    jest.spyOn(Services, "fetchAllNotes").mockResolvedValue({ notes: mockNotes });
        // spying on createNote function before running the test
    // to mock the data that will be returned from the api
    jest.spyOn(Services, "createNote").mockResolvedValue({ note: { title: "Mock Title", content: "This is a mock content" } });

});

test(" fetching data from api", async () => {

    render(<HomePage />);

    expect(await screen.findByText(/Mock Title 1/i)).toBeInTheDocument();
    expect(await screen.findByText(/This is a mock content 1/i)).toBeInTheDocument();
    expect(await screen.findByText(/Mock Title 2/i)).toBeInTheDocument();
    expect(await screen.findByText(/This is a mock content 2/i)).toBeInTheDocument();

});

test(" create note form render", async () => {
    render(<HomePage />);
    const titleElement = screen.getByPlaceholderText("Title");
    const contentElement = screen.getByPlaceholderText("Content");
    const buttonElement = screen.getByTestId("create-btn");

    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
});

test(" create a new note and add to list", async () => {
    render(<HomePage />);
    const titleElement = screen.getByPlaceholderText("Title");
    const contentElement = screen.getByPlaceholderText("Content");
    const buttonElement = screen.getByTestId("create-btn");

    userEvent.type(titleElement, 'Mock Title');
    userEvent.type(contentElement, 'This is a mock content');

    expect(titleElement).toHaveValue('Mock Title');
    expect(contentElement).toHaveValue('This is a mock content');

    userEvent.click(buttonElement);

        expect(await screen.findByText('Mock Title')).toBeInTheDocument();
        expect(await screen.findByText('This is a mock content')).toBeInTheDocument();
   


});

test("alert when note title and content is empty", async () => {
    // spying the alert
    jest.spyOn(window, "alert").mockImplementation(() => { });
    render(<HomePage />);
    const buttonElement = screen.getByTestId("create-btn");
    userEvent.click(buttonElement);
    expect(window.alert).toHaveBeenCalledWith("Please fill in all fields");
});