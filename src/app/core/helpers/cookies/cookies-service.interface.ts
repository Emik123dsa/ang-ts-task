/**
 * Cookies interface
 *
 * @export
 * @interface Cookies
 */
export interface CookiesInterface {
  path: string;
  domain: string;
  expires: Date;
  secure: boolean;
  sameSite: 'lax' | 'strict' | 'none';
}
/**
 * AbstractCookies
 *
 * @export
 * @abstract
 * @class AbstractCookies
 */
export abstract class AbstractCookies {
  /**
   * Check cookies
   *
   * @abstract
   * @param {string} name
   * @returns {boolean}
   * @memberof AbstractCookies
   */
  abstract check(name: string): boolean;
  /**
   * Get current cookie
   *
   * @abstract
   * @param {string} name
   * @returns {string}
   * @memberof AbstractCookies
   */
  abstract get(name: string): string;
  /**
   * Get All of the required cookies
   *
   * @abstract
   * @returns {({ [key: string]: string | number })}
   * @memberof AbstractCookies
   */
  abstract getAll(): { [key: string]: string | number }
  /**
   * Put new cookie inside document
   *
   * @abstract
   * @param {string} name
   * @param {string} value
   * @param {Partial<CookiesInterface>} options
   * @memberof AbstractCookies
   */
  abstract put(name: string, value: string, options: Partial<CookiesInterface>): void;
  /**
   * Remove all of the required cookie
   *
   * @abstract
   * @param {string} name
   * @param {string} [path]
   * @param {string} [domain]
   * @memberof AbstractCookies
   */
  abstract remove(name: string, path?: string, domain?: string): void;
  /**
   * This method is erasing all of the document cookies
   *
   * @abstract
   * @param {string} [path]
   * @param {string} [domain]
   * @memberof AbstractCookies
   */
  abstract removeAll(path?: string, domain?: string): void;
}