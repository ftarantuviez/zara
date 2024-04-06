/**
 * Represents a list of events.
 */
export interface EventList {
  /**
   * The number of total available events in this list.
   * Will always be greater than or equal to the "returned" value.
   */
  available?: number;

  /**
   * The number of events returned in this collection (up to 20).
   */
  returned?: number;

  /**
   * The path to the full list of events in this collection.
   */
  collectionURI?: string;

  /**
   * The list of returned events in this collection.
   */
  items?: EventSummary[];
}

/**
 * Represents a summary of an event.
 */
export interface EventSummary {
  /**
   * The path to the individual event resource.
   */
  resourceURI?: string;

  /**
   * The name of the event.
   */
  name?: string;
}
