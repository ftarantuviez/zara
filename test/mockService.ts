import { CharacterDataWrapper } from "@/types";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const charactersResponseMock: CharacterDataWrapper = {
  data: {
    results: [{ id: 1, name: "Name 1", description: "Description Char" }],
  },
};

const handlers = [
  http.get("/api/characters", (res) => {
    return HttpResponse.json(charactersResponseMock);
  }),
];

export const mockServiceWorker = setupServer(...handlers);
