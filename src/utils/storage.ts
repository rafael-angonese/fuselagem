export default class Storage {
  static getItem(key: string) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  static removeItem(key: string) {
    localStorage.removeItem(key);
  }

  static setItem<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
