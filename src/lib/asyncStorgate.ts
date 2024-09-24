export class AsyncStorageUtils {
  /**
   * Lưu lại giá trị vào AsyncStorage
   * @param key
   * @param value
   */
  static save(key: string, value: string): void {
    if (typeof window != undefined) localStorage.setItem(key, value);
  }

  /**
   * Lấy giá trị từ trong AsyncStorage
   * @param key
   */
  static get(key: string): string | null | undefined {
    if (typeof window != undefined) return localStorage.getItem(key);
  }

  /**
   * Xóa giá trị đã lưu trong AsyncStorage
   * @param key
   */
  static remove(key: string): void {
    if (typeof window != undefined) return localStorage.removeItem(key);
  }
}
