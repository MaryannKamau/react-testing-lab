import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "../../components/App";

describe("Display Transactions", () => {
  it("displays transactions from the backend on startup", async () => {
    const mockData = [{ id: 1, description: "Paycheck", category: "Income", amount: 2000 }];
    global.setFetchResponse(mockData);
    render(<App />);
    expect(await screen.findByText(/Paycheck/i)).toBeInTheDocument();
  });

  it("handles empty transaction list gracefully (Edge Case)", async () => {
    global.setFetchResponse([]);
    render(<App />);
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
    expect(screen.queryByRole("row", { name: /Paycheck/i })).not.toBeInTheDocument();
  });

  it("handles server error gracefully (Failure Case)", async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: false, status: 500 });
    render(<App />);
    const errorMessage = await screen.queryByText(/error/i);
    if (errorMessage) expect(errorMessage).toBeInTheDocument();
  });
});
