import { mockServiceWorker } from "./mockService";
import "@testing-library/jest-dom/vitest";
import { beforeAll, afterEach, afterAll } from "vitest";

beforeAll(() => {
  mockServiceWorker.listen({
    onUnhandledRequest: "error",
  });
});

afterEach(() => {
  mockServiceWorker.resetHandlers();
});

afterAll(() => {
  mockServiceWorker.close();
});
