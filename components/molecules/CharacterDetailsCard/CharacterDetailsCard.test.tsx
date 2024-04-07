import { expect, describe, it, afterEach } from "vitest";
import { CharacterDetailsCard } from "./CharacterDetailsCard";
import { Character } from "@/types";
import { cleanup, fireEvent, render } from "@testing-library/react";

import { getFromLocalStorage } from "@/utils";
import { LIKED_CHARACTERS } from "@/constants";
import { customRenderWithCharacters } from "../CharactersProvider/customRenderTest";

const mockCharacter: Character = {
  id: 1,
  name: "Spider-Man",
  thumbnail: {
    path: "http://example.com",
    extension: "jpg",
  },
  description: "Friendly neighborhood hero",
  isLiked: false,
};
describe("CharacterDetailsCard Component", () => {
  afterEach(cleanup);
  it("CharacterDetailsCard component renders correctly with default props", () => {
    const { getByTestId } = render(
      <CharacterDetailsCard character={mockCharacter} />
    );
    const characterDetailsCardElement = getByTestId("characterDetails");
    expect(characterDetailsCardElement).toBeInTheDocument();
    expect(characterDetailsCardElement).toHaveClass("characterDetails");
  });

  it("CharacterDetailsCard component renders character name correctly", () => {
    const { getByText } = render(
      <CharacterDetailsCard character={mockCharacter} />
    );
    const nameElement = getByText(mockCharacter.name!);
    expect(nameElement).toBeInTheDocument();
  });

  it("CharacterDetailsCard component renders character description correctly", () => {
    const { getByText } = render(
      <CharacterDetailsCard character={mockCharacter} />
    );
    const descriptionElement = getByText(mockCharacter.description!);
    expect(descriptionElement).toBeInTheDocument();
  });

  it("CharacterCard component like button functionality", async () => {
    const { getByTestId } = await customRenderWithCharacters(
      <CharacterDetailsCard character={mockCharacter} />
    );

    const button = getByTestId("characterDetailsCard-likeButton");
    fireEvent.click(button);

    const value = getFromLocalStorage<number[]>(LIKED_CHARACTERS);

    if (typeof value === "object" && value !== null) {
      expect(value?.includes(mockCharacter.id));
    } else {
      throw new Error("No id was found");
    }

    localStorage.removeItem(LIKED_CHARACTERS);
  });
});
