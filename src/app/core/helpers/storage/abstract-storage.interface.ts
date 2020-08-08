/**
 * Abstract Storage Helper for cookies
 *
 * @export
 * @abstract
 * @class AbstractStorage
 * @implements {Storage}
 */
export abstract class AbstractStorage implements Storage {
  /**
   * Length of the all required items
   *
   * @type {number}
   * @memberof AbstractStorage
   */
  readonly length: number;
  /**
   * Let's clear all of the required cookies
   *
   * @abstract
   * @memberof AbstractStorage
   */
  abstract clear(): void;
  /**
   * We also have to get value from cookies
   *
   * @abstract
   * @param {string} key
   * @returns {(string | null)}
   * @memberof AbstractStorage
   */
  abstract getItem(key: string): string | null;
  /**
   * We also have to put or alter current cookies
   *
   * @abstract
   * @param {string} key
   * @param {string} value
   * @memberof AbstractStorage
   */
  abstract setItem(key: string, value: string): void;
  /**
   * Key initialization
   *
   * @abstract
   * @param {number} index
   * @returns {(string | null)}
   * @memberof AbstractStorage
   */
  abstract key(index: number): string | null;
  /**
   * Remove item is required to delete item
   *
   * @abstract
   * @param {string} key
   * @memberof AbstractStorage
   */
  abstract removeItem(key: string): void;
}