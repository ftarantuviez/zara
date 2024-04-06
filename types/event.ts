/**
 * Represents a list of events.
 */
export interface EventList {
  /**
   * The number of total available events in this list.
   * Will always be greater than or equal to the "returned" value.
   */
  readonly available?: number;

  /**
   * The number of events returned in this collection (up to 20).
   */
  readonly returned?: number;

  /**
   * The path to the full list of events in this collection.
   */
  readonly collectionURI?: string;

  /**
   * The list of returned events in this collection.
   */
  readonly items?: EventSummary[];
}

/**
 * Represents a summary of an event.
 */
export interface EventSummary {
  /**
   * The path to the individual event resource.
   */
  readonly resourceURI?: string;

  /**
   * The name of the event.
   */
  readonly name?: string;
}
