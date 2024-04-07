import { CharacterList } from "./character";
import { Image, TextObject, Url } from "./common";
import { CreatorList } from "./creator";
import { EventList } from "./event";
import { SeriesSummary } from "./series";
import { StoryList } from "./story";

/**
 * The HTTP status code of the returned result.
 */
export interface ComicDataWrapper {
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
   * The attribution notice for this result. Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API.
   */
  attributionText?: string;
  /**
   * An HTML representation of the attribution notice for this result. Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API.
   */
  attributionHTML?: string;
  /**
   * The results returned by the call.
   */
  data?: ComicDataContainer;
  /**
   * A digest value of the content returned by the call.
   */
  etag?: string;
}

/**
 * The results returned by the call.
 */
export interface ComicDataContainer {
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
   * The list of comics returned by the call.
   */
  results?: Comic[];
}

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
 * Represents a price associated with a comic.
 */
export interface ComicPrice {
  /**
   * A description of the price (e.g. print price, digital price).
   */
  type?: string;
  /**
   * The price (all prices in USD).
   */
  price?: number;
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

/**
 * Represents a date associated with a comic.
 */
export interface ComicDate {
  /**
   * A description of the date (e.g. onsale date, FOC date).
   */
  type?: string;
  /**
   * The date.
   */
  date?: Date;
}

/**
 * Represents a comic.
 */
export interface Comic {
  /**
   * The unique ID of the comic resource.
   */
  id?: number;
  /**
   * The ID of the digital comic representation of this comic. Will be 0 if the comic is not available digitally.
   */
  digitalId?: number;
  /**
   * The canonical title of the comic.
   */
  title?: string;
  /**
   * The number of the issue in the series (will generally be 0 for collection formats).
   */
  issueNumber?: number;
  /**
   * If the issue is a variant (e.g. an alternate cover, second printing, or director’s cut), a text description of the variant.
   */
  variantDescription?: string;
  /**
   * The preferred description of the comic.
   */
  description?: string;
  /**
   * The date the resource was most recently modified.
   */
  modified?: Date;
  /**
   * The ISBN for the comic (generally only populated for collection formats).
   */
  isbn?: string;
  /**
   * The UPC barcode number for the comic (generally only populated for periodical formats).
   */
  upc?: string;
  /**
   * The Diamond code for the comic.
   */
  diamondCode?: string;
  /**
   * The EAN barcode for the comic.
   */
  ean?: string;
  /**
   * The ISSN barcode for the comic.
   */
  issn?: string;
  /**
   * The publication format of the comic e.g. comic, hardcover, trade paperback.
   */
  format?: string;
  /**
   * The number of story pages in the comic.
   */
  pageCount?: number;
  /**
   * A set of descriptive text blurbs for the comic.
   */
  textObjects?: TextObject[];
  /**
   * The canonical URL identifier for this resource.
   */
  resourceURI?: string;
  /**
   * A set of public web site URLs for the resource.
   */
  urls?: Url[];
  /**
   * A summary representation of the series to which this comic belongs.
   */
  series?: SeriesSummary;
  /**
   * A list of variant issues for this comic (includes the "original" issue if the current issue is a variant).
   */
  variants?: ComicSummary[];
  /**
   * A list of collections which include this comic (will generally be empty if the comic's format is a collection).
   */
  collections?: ComicSummary[];
  /**
   * A list of issues collected in this comic (will generally be empty for periodical formats such as "comic" or "magazine").
   */
  collectedIssues?: ComicSummary[];
  /**
   * A list of key dates for this comic.
   */
  dates?: ComicDate[];
  /**
   * A list of prices for this comic.
   */
  prices?: ComicPrice[];
  /**
   * The representative image for this comic.
   */
  thumbnail?: Image;
  /**
   * A list of promotional images associated with this comic.
   */
  images?: Image[];
  /**
   * A resource list containing the creators associated with this comic.
   */
  creators?: CreatorList;
  /**
   * A resource list containing the characters which appear in this comic.
   */
  characters?: CharacterList;
  /**
   * A resource list containing the stories which appear in this comic.
   */
  stories?: StoryList;
  /**
   * A resource list containing the events in which this comic appears.
   */
  events?: EventList;
}
