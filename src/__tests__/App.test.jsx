import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './components/App';

import './test_suites/DisplayTransactions.test';
import './test_suites/AddTransactions.test';
import './test_suites/SearchSort.test';

describe('Banking Application Main Entry', () => {
    const mockInitialData = [
        { id: 1, date: "2024-01-01", description: "Initial Deposit", category: "Income", amount: 1000 }
    ];

    beforeEach(() => {
        global.setFetchResponse(mockInitialData);
    });

    it('renders the main application without crashing', async () => {
        render(<App />);
        const title = await screen.findByText(/The Royal Bank of Flatiron/i);
        expect(title).toBeInTheDocument();
    });

    it('loads initial transactions from the backend on startup', async () => {
        render(<App />);
        const transaction = await screen.findByText(/Initial Deposit/i);
        expect(transaction).toBeInTheDocument();
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });
});
