import { CharactersContext } from "@/contexts";
import { CharacterDataWrapper } from "@/types";
import { render, RenderOptions } from "@testing-library/react";
import { ReactNode } from "react";

/**
 * A custom render to setup providers. Extends regular
 * render options with `providerProps` to allow injecting
 * different scenarios to test with.
 *
 * @see https://testing-library.com/docs/react-testing-library/setup#custom-render
 */

export const customRenderWithCharacters = async (
  ui: ReactNode,
  renderOptions?: RenderOptions
) => {
  const response = await fetch("/api/characters");
  const data: CharacterDataWrapper = await response.json();

  const characters =
    data.data?.results?.map((char) => ({ ...char, isLiked: false })) ?? [];

  return render(
    <CharactersContext.Provider
      value={{
        characters,
        error: { isError: false, message: "" },
        isLoading: false,
        setCharacters: () => {},
      }}
    >
      {ui}
    </CharactersContext.Provider>,
    renderOptions
  );
};
