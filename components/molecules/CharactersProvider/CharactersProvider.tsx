"use client";
import client from "@/client/client";
import { CharactersContext, useAlert } from "@/contexts";
import { Character, CharacterDataWrapper, Error } from "@/types";
import React, {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

export const CharactersProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const openAlert = useAlert();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState<Error>({ isError: false, message: "" });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await client.get<CharacterDataWrapper>(
          "/public/characters?limit=50"
        );

        setCharacters(data.data?.results ?? []);
        setIsLoading(false);
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
    <CharactersContext.Provider value={{ characters, error, isLoading }}>
      {children}
    </CharactersContext.Provider>
  );
};
