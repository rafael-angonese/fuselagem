export default class Storage {
  static getItem(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  static removeItem(key: string) {
    localStorage.removeItem(key);
  }

  static setItem<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
