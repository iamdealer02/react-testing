import { render, screen } from "@testing-library/react";
import NoteList from "../components/NoteList";
import '@testing-library/jest-dom/extend-expect';
import * as services from "../services/utils";

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

test("renders note list", async () => {
    const mockFetchAllNotes = jest.spyOn(services, "fetchAllNotes").mockResolvedValue({
        message: "Notes fetched successfully",
        notes: mockNotes,
        status: 'success'
    });

    render(<NoteList />);
    expect(mockFetchAllNotes).toHaveBeenCalledTimes(1);

    expect(await screen.findByText(/Mock Title 1/i)).toBeInTheDocument();
    expect(await screen.findByText(/This is a mock content 1/i)).toBeInTheDocument();
    expect(await screen.findByText(/Mock Title 2/i)).toBeInTheDocument();
    expect(await screen.findByText(/This is a mock content 2/i)).toBeInTheDocument();
});
