import { afterEach, describe, expect, it } from "vitest";
import { CharacterCard } from "./CharacterCard";
import { Character } from "@/types";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { LIKED_CHARACTERS } from "@/constants";

import { getFromLocalStorage } from "@/utils";
import { customRenderWithCharacters } from "../CharactersProvider/customRenderTest";

const mockCharacter: Character = {
  id: 1,
  name: "Spider-Man",
  thumbnail: {
    path: "http://example.com",
    extension: "jpg",
  },
  isLiked: false,
};

describe("CharacterCard Component", () => {
  afterEach(cleanup);
  it("CharacterCard component renders correctly with default props", () => {
    const { getByTestId } = render(<CharacterCard character={mockCharacter} />);
    const characterCardElement = getByTestId("characterCard");
    expect(characterCardElement).toBeInTheDocument();
    expect(characterCardElement).toHaveClass("characterCard");
  });

  it("CharacterCard component applies className prop correctly", () => {
    const className = "custom-class";
    const { getByTestId } = render(
      <CharacterCard character={mockCharacter} className={className} />
    );
    const characterCardElement = getByTestId("characterCard");
    expect(characterCardElement).toHaveClass(className);
  });

  it("CharacterCard component renders character name correctly", () => {
    const { getByText } = render(<CharacterCard character={mockCharacter} />);
    const nameElement = getByText(mockCharacter.name!);
    expect(nameElement).toBeInTheDocument();
  });

  it("CharacterCard component like button functionality", async () => {
    const { getByTestId } = await customRenderWithCharacters(
      <CharacterCard character={mockCharacter} />
    );

    const button = getByTestId("characterCard-likeButton");
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
