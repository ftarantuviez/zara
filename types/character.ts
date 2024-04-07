import { ComicList } from "./comics";
import { Image, Url } from "./common";
import { EventList } from "./event";
import { SeriesList } from "./series";
import { StoryList } from "./story";

/**
 * The HTTP status code of the returned result.
 */
export interface CharacterDataWrapper {
  readonly code?: number;

  /**
   * A string description of the call status.
   */
  readonly status?: string;

  /**
   * The copyright notice for the returned result.
   */
  readonly copyright?: string;

  /**
   * The attribution notice for this result.
   * Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API.
   */
  readonly attributionText?: string;

  /**
   * An HTML representation of the attribution notice for this result.
   * Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API.
   */
  readonly attributionHTML?: string;

  /**
   * The results returned by the call.
   */
  readonly data?: CharacterDataContainer;

  /**
   * A digest value of the content returned by the call.
   */
  readonly etag?: string;
}

/**
 * The container for character data.
 */
export interface CharacterDataContainer {
  /**
   * The requested offset (number of skipped results) of the call.
   */
  readonly offset?: number;

  /**
   * The requested result limit.
   */
  readonly limit?: number;

  /**
   * The total number of resources available given the current filter set.
   */
  readonly total?: number;

  /**
   * The total number of results returned by this call.
   */
  readonly count?: number;

  /**
   * The list of characters returned by the call.
   */
  readonly results?: CharacterApi[];
}

/**
 * Represents a character object.
 */
export interface CharacterApi {
  /**
   * The unique ID of the character resource.
   */
  readonly id: number;

  /**
   * The name of the character.
   */
  readonly name?: string;

  /**
   * A short bio or description of the character.
   */
  readonly description?: string;

  /**
   * The date the resource was most recently modified.
   */
  readonly modified?: Date;

  /**
   * The canonical URL identifier for this resource.
   */
  readonly resourceURI?: string;

  /**
   * A set of public web site URLs for the resource.
   */
  readonly urls?: Url[];

  /**
   * The representative image for this character.
   */
  readonly thumbnail?: Image;

  /**
   * A resource list containing comics which feature this character.
   */
  readonly comics?: ComicList;

  /**
   * A resource list of stories in which this character appears.
   */
  readonly stories?: StoryList;

  /**
   * A resource list of events in which this character appears.
   */
  readonly events?: EventList;

  /**
   * A resource list of series in which this character appears.
   */
  readonly series?: SeriesList;
}

/**
 * Represents a summary of a character.
 */
export interface CharacterSummary {
  /**
   * The path to the individual character resource.
   */
  resourceURI?: string;
  /**
   * The full name of the character.
   */
  name?: string;
  /**
   * The role of the creator in the parent entity.
   */
  role?: string;
}

/**
 * Represents a list of characters.
 */
export interface CharacterList {
  /**
   * The number of total available characters in this list. Will always be greater than or equal to the "returned" value.
   */
  available?: number;
  /**
   * The number of characters returned in this collection (up to 20).
   */
  returned?: number;
  /**
   * The path to the full list of characters in this collection.
   */
  collectionURI?: string;
  /**
   * The list of returned characters in this collection.
   */
  items?: CharacterSummary[];
}

export interface Character extends CharacterApi {
  /**
   * Have the user liked this character?
   */
  isLiked?: boolean;
}
