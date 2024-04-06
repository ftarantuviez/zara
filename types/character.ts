import { ComicList } from "./comics";
import { Image, Url } from "./common";
import { EventList } from "./event";
import { SeriesList } from "./series";
import { StoryList } from "./story";

/**
 * The HTTP status code of the returned result.
 */
export interface CharacterDataWrapper {
  code?: number;

  /**
   * A string description of the call status.
   */
  status?: string;

  /**
   * The copyright notice for the returned result.
   */
  copyright?: string;

  /**
   * The attribution notice for this result.
   * Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API.
   */
  attributionText?: string;

  /**
   * An HTML representation of the attribution notice for this result.
   * Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API.
   */
  attributionHTML?: string;

  /**
   * The results returned by the call.
   */
  data?: CharacterDataContainer;

  /**
   * A digest value of the content returned by the call.
   */
  etag?: string;
}

/**
 * The container for character data.
 */
export interface CharacterDataContainer {
  /**
   * The requested offset (number of skipped results) of the call.
   */
  offset?: number;

  /**
   * The requested result limit.
   */
  limit?: number;

  /**
   * The total number of resources available given the current filter set.
   */
  total?: number;

  /**
   * The total number of results returned by this call.
   */
  count?: number;

  /**
   * The list of characters returned by the call.
   */
  results?: Character[];
}

/**
 * Represents a character object.
 */
export interface Character {
  /**
   * The unique ID of the character resource.
   */
  id?: number;

  /**
   * The name of the character.
   */
  name?: string;

  /**
   * A short bio or description of the character.
   */
  description?: string;

  /**
   * The date the resource was most recently modified.
   */
  modified?: Date;

  /**
   * The canonical URL identifier for this resource.
   */
  resourceURI?: string;

  /**
   * A set of public web site URLs for the resource.
   */
  urls?: Url[];

  /**
   * The representative image for this character.
   */
  thumbnail?: Image;

  /**
   * A resource list containing comics which feature this character.
   */
  comics?: ComicList;

  /**
   * A resource list of stories in which this character appears.
   */
  stories?: StoryList;

  /**
   * A resource list of events in which this character appears.
   */
  events?: EventList;

  /**
   * A resource list of series in which this character appears.
   */
  series?: SeriesList;
}
