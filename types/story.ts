/**
 * Represents a list of stories.
 */
export interface StoryList {
  /**
   * The number of total available stories in this list.
   * Will always be greater than or equal to the "returned" value.
   */
  readonly available?: number;

  /**
   * The number of stories returned in this collection (up to 20).
   */
  readonly returned?: number;

  /**
   * The path to the full list of stories in this collection.
   */
  readonly collectionURI?: string;

  /**
   * The list of returned stories in this collection.
   */
  readonly items?: StorySummary[];
}

/**
 * Represents a summary of a story.
 */
export interface StorySummary {
  /**
   * The path to the individual story resource.
   */
  readonly resourceURI?: string;

  /**
   * The canonical name of the story.
   */
  readonly name?: string;

  /**
   * The type of the story (interior or cover).
   */
  readonly type?: string;
}
