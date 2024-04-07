"use client";
import client from "@/config/client";
import { LIKED_CHARACTERS } from "@/constants";
import { CharactersContext } from "@/contexts";
import { useAlert } from "@/hooks";
import { Character, CharacterApi, CharacterDataWrapper, Error } from "@/types";
import { getFromLocalStorage } from "@/utils";
import React, {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

const addLikesAttr = (
  char: CharacterApi,
  likedCharacters: number[]
): Character =>
  ({
    ...char,
    isLiked: likedCharacters.includes(char.id),
  } ?? []);

export const CharactersProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const openAlert = useAlert();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [error] = useState<Error>({ isError: false, message: "" });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await client.get<CharacterDataWrapper>(
          "/public/characters?limit=50"
        );
        setIsLoading(false);

        const safeResults = data.data?.results ?? [];
        const likedCharacters = getFromLocalStorage<number[]>(LIKED_CHARACTERS);

        if (!likedCharacters) return setCharacters(safeResults);

        const chars: Character[] = safeResults.map((char) =>
          addLikesAttr(char, likedCharacters as number[])
        );

        setCharacters(chars);
      } catch (error) {
        setIsLoading(false);
        openAlert({
          type: "error",
          message: "We couldn't fetch characters. Please try again later.",
        });
      }
    })();
  }, [openAlert]);

  return (
    <CharactersContext.Provider
      value={{ characters, error, isLoading, setCharacters }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
