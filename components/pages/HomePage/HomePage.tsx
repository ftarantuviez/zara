import React, { FunctionComponent } from "react";
import "./styles.css";
import { SearchInput, CharacterCard, Text, Alert } from "@/components";

type Props = Readonly<{}>;

export const HomePage: FunctionComponent<Props> = () => {
  return (
    <main className="homePage">
      <div className="homePage__search">
        <SearchInput placeholder="Search a character..." fullWidth />
        <Text variant="body2">50 RESULTS</Text>
      </div>
      <Alert title="Hello how are you" type="error" />
      <div className="homePage__itemsContainer">
        <div className="homePage__itemsContainer--item">
          <CharacterCard character={{}} />
        </div>
        <div className="homePage__itemsContainer--item">
          <CharacterCard character={{}} />
        </div>
        <div className="homePage__itemsContainer--item">
          <CharacterCard character={{}} />
        </div>
        <div className="homePage__itemsContainer--item">
          <CharacterCard character={{}} />
        </div>
        <div className="homePage__itemsContainer--item">
          <CharacterCard character={{}} />
        </div>
        <div className="homePage__itemsContainer--item">
          <CharacterCard character={{}} />
        </div>
      </div>
    </main>
  );
};
