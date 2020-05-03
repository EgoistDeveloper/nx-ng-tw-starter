/**
 * Local storage mock for unit tests.
 */
export class LocalStorageMock {
  public getItem(key: string): unknown {
    return this[key];
  }

  public setItem(key: string, value: string): void {
    this[key] = value;
  }

  public removeItem(key: string): void {
    // eslint-disable-next-line no-undefined
    this[key] = undefined;
  }
}
