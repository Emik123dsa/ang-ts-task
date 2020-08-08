import { CookiesInterface } from "./cookies-service.interface";

import { AbstractStorage } from "../storage/abstract-storage.interface";

export abstract class CookieStorage extends AbstractStorage {
  abstract setItem(key: string, value: string, options?: Partial<CookiesInterface>): void;
}