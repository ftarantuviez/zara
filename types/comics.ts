/**
 * Represents a list of comics.
 */
export interface ComicList {
  /**
   * The number of total available issues in this list.
   * Will always be greater than or equal to the "returned" value.
   */
  readonly available?: number;

  /**
   * The number of issues returned in this collection (up to 20).
   */
  readonly returned?: number;

  /**
   * The path to the full list of issues in this collection.
   */
  readonly collectionURI?: string;

  /**
   * The list of returned issues in this collection.
   */
  readonly items?: ComicSummary[];
}

/**
 * Represents a summary of a comic.
 */
export interface ComicSummary {
  /**
   * The path to the individual comic resource.
   */
  readonly resourceURI?: string;

  /**
   * The canonical name of the comic.
   */
  readonly name?: string;
}
