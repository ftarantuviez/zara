/**
 * Represents a list of creators.
 */
export interface CreatorList {
  /**
   * The number of total available creators in this list. Will always be greater than or equal to the "returned" value.
   */
  available?: number;
  /**
   * The number of creators returned in this collection (up to 20).
   */
  returned?: number;
  /**
   * The path to the full list of creators in this collection.
   */
  collectionURI?: string;
  /**
   * The list of returned creators in this collection.
   */
  items?: CreatorSummary[];
}

/**
 * Represents a summary of a creator.
 */
export interface CreatorSummary {
  /**
   * The path to the individual creator resource.
   */
  resourceURI?: string;
  /**
   * The full name of the creator.
   */
  name?: string;
  /**
   * The role of the creator in the parent entity.
   */
  role?: string;
}
