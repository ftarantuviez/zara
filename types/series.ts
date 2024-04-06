/**
 * Represents a list of series.
 */
export interface SeriesList {
  /**
   * The number of total available series in this list.
   * Will always be greater than or equal to the "returned" value.
   */
  readonly available?: number;

  /**
   * The number of series returned in this collection (up to 20).
   */
  readonly returned?: number;

  /**
   * The path to the full list of series in this collection.
   */
  readonly collectionURI?: string;

  /**
   * The list of returned series in this collection.
   */
  readonly items?: SeriesSummary[];
}

/**
 * Represents a summary of a series.
 */
export interface SeriesSummary {
  /**
   * The path to the individual series resource.
   */
  readonly resourceURI?: string;

  /**
   * The canonical name of the series.
   */
  readonly name?: string;
}
