import { afterEach, vi, expect } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extends Vitest with custom matchers like toBeInTheDocument()
expect.extend(matchers);

// Global helper to mock fetch responses easily in your test files
global.setFetchResponse = (val) => {
    global.fetch = vi.fn(() => Promise.resolve({
        json: () => Promise.resolve(val),
        ok: true,
        status: 200
    }));
};

afterEach(() => {
    cleanup();
});
