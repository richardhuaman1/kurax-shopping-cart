export class LocalStorageUtils {
  static setItem(key: string, value: any): void {
    const valueToStore = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(key, valueToStore);
  }

  static getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  static clearItem(key: string): void {
    return localStorage.removeItem(key);
  }

  static clearAll(): void {
    return localStorage.clear();
  }

  static persistItem<T>(key: string, value: T): void {
    const valueToStore = typeof value === 'string' ? value : JSON.stringify({ ...value });
    localStorage.setItem(key, valueToStore);
  }
}
