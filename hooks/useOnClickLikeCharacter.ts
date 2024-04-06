import { LIKED_CHARACTERS } from "@/constants";
import { useCharactersContext } from "@/contexts";
import { Character } from "@/types";
import { getFromLocalStorage, saveInLocalStorage } from "@/utils";
import { useCallback } from "react";

const saveLikesInLocalStorage = (likes: number[]) => {
  saveInLocalStorage(LIKED_CHARACTERS, likes);
};

const updateLikeChar = (c: Character, charId: number) =>
  c.id === charId ? { ...c, isLiked: !c.isLiked } : c;

export function useOnClickLikeCharacter() {
  const { setCharacters, characters } = useCharactersContext();

  const onClickLike = useCallback(
    (charId: number) => {
      const likedCharacters = getFromLocalStorage<number[]>(LIKED_CHARACTERS);
      const character = characters.find((c) => c.id === charId);

      if (!character) throw new Error("No character was found with this ID");

      setCharacters(characters.map((c) => updateLikeChar(c, charId)));

      if (!likedCharacters) {
        return saveLikesInLocalStorage([charId]);
      }

      if (
        typeof likedCharacters === "object" &&
        likedCharacters.includes(charId)
      ) {
        return saveLikesInLocalStorage(
          likedCharacters.filter((c) => c !== charId)
        );
      }

      if (typeof likedCharacters === "object") {
        return saveLikesInLocalStorage([...likedCharacters, charId]);
      }
    },
    [characters, setCharacters]
  );

  return onClickLike;
}
