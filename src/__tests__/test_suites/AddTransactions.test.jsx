import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../../components/App";

describe("Add Transactions", () => {
  it("adds a new transaction and triggers a POST request", async () => {
    const initialData = [{ id: 1, description: "Old Item", category: "Misc", amount: 10 }];
    const newItem = { id: 2, description: "Coffee", category: "Food", amount: -5 };
    global.setFetchResponse(initialData);
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText(/Description/i), { target: { value: "Coffee" } });
    fireEvent.change(screen.getByPlaceholderText(/Category/i), { target: { value: "Food" } });
    fireEvent.change(screen.getByPlaceholderText(/Amount/i), { target: { value: "-5" } });
    global.setFetchResponse(newItem);
    fireEvent.click(screen.getByText(/Add Transaction/i));
    await waitFor(() => {
      expect(screen.getByText(/Coffee/i)).toBeInTheDocument();
    });
  });

  it("does not add a transaction if fields are empty (Edge Case)", async () => {
    global.setFetchResponse([]);
    render(<App />);
    fireEvent.click(screen.getByText(/Add Transaction/i));
    expect(global.fetch).not.toHaveBeenCalledWith(expect.anything(), expect.objectContaining({ method: "POST" }));
  });
});
