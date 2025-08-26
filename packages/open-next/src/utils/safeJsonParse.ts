/**
 * Safely parses a JSON string, returning undefined if parsing fails.
 * Optionally logs a warning if parsing fails.
 */
import logger from "../logger.js";

export function safeJsonParse<T = any>(input: string, filePath?: string): T | undefined {
  try {
    return JSON.parse(input);
  } catch (err) {
    if (filePath) {
      logger.warn(`Failed to parse JSON in file: ${filePath} - ${err}`);
    } else {
      logger.warn(`Failed to parse JSON: ${err}`);
    }
    return undefined;
  }
}
