import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import HomePage from "../views/HomePage";
import * as Services from "../services/utils";

test(" fetching data from api", async () => {
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
    render(<HomePage />);

    expect(await screen.findByText(/Mock Title 1/i)).toBeInTheDocument();
    expect(await screen.findByText(/This is a mock content 1/i)).toBeInTheDocument();
    expect(await screen.findByText(/Mock Title 2/i)).toBeInTheDocument();
    expect(await screen.findByText(/This is a mock content 2/i)).toBeInTheDocument();

});