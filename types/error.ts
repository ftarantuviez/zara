/**
 * Interface to standarize Error handling in the Frontend
 */
export interface Error {
  /**
   * Boolean to notify if an error is happening.
   */
  isError?: boolean;

  /**
   * Custom message for the existent error.
   */
  message?: string;
}
