import { Character, Error } from "@/types";
import { createContext, useContext } from "react";

export type CharactersContextValue = Readonly<{
  isLoading: boolean;
  characters: Character[];
  error: Error;
}>;

export const CharactersContext = createContext<CharactersContextValue>({
  isLoading: false,
  characters: [],
  error: {
    isError: false,
    message: "There was an error. Please try again later.",
  },
});

export const useCharactersContext = (): CharactersContextValue =>
  useContext(CharactersContext);
