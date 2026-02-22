import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../../components/App";

describe("Search and Sort", () => {
  it("filters transactions and handles case-insensitivity (Edge Case)", async () => {
    const mockData = [{ id: 1, description: "Salary", category: "Income", amount: 5000 }];
    global.setFetchResponse(mockData);
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/Search/i);
    fireEvent.change(searchInput, { target: { value: "salary" } });
    expect(screen.getByText(/Salary/i)).toBeInTheDocument();
  });

  it("shows no results for a non-matching search (Edge Case)", async () => {
    const mockData = [{ id: 1, description: "Salary", category: "Income", amount: 5000 }];
    global.setFetchResponse(mockData);
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText(/Search/i), { target: { value: "NonExistent" } });
    expect(screen.queryByText(/Salary/i)).not.toBeInTheDocument();
  });
});
