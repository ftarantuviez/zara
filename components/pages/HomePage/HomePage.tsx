"use client";
import React, {
  FunctionComponent,
  useCallback,
  useMemo,
  useState,
} from "react";
import "./styles.css";
import { SearchInput, CharacterCard, Text } from "@/components";
import { useCharactersContext } from "@/contexts";

type Props = Readonly<{}>;

export const HomePage: FunctionComponent<Props> = () => {
  const { characters } = useCharactersContext();
  const [query, setQuery] = useState<string>("");

  const onQueryChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value),
    []
  );

  const charactersToShow = useMemo(() => {
    return characters.filter((char) =>
      char.name?.toLowerCase().includes(query.toLowerCase())
    );
  }, [characters, query]);
  return (
    <main className="homePage">
      <div className="homePage__search">
        <SearchInput
          placeholder="Search a character..."
          value={query}
          onChange={onQueryChange}
          fullWidth
        />
        <Text variant="body2">{charactersToShow.length} RESULTS</Text>
      </div>

      <div className="homePage__itemsContainer">
        {charactersToShow.map((char) => (
          <div className="homePage__itemsContainer--item" key={char.id}>
            <CharacterCard character={char} />
          </div>
        ))}
      </div>
    </main>
  );
};
