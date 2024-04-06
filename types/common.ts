/**
 * Represents a URL object.
 */
export interface Url {
  /**
   * A text identifier for the URL.
   */
  type?: string;

  /**
   * A full URL (including scheme, domain, and path).
   */
  url?: string;
}

/**
 * Represents an image object.
 */
export interface Image {
  /**
   * The directory path of to the image.
   */
  path?: string;

  /**
   * The file extension for the image.
   */
  extension?: string;
}
