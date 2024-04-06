/**
 * Represents a URL object.
 */
export interface Url {
  /**
   * A text identifier for the URL.
   */
  readonly type?: string;

  /**
   * A full URL (including scheme, domain, and path).
   */
  readonly url?: string;
}

/**
 * Represents an image object.
 */
export interface Image {
  /**
   * The directory path of to the image.
   */
  readonly path?: string;

  /**
   * The file extension for the image.
   */
  readonly extension?: string;
}

/**
 * Utility type to create a type where all properties are writable.
 */
export type Writable<T> = { -readonly [P in keyof T]: T[P] };
