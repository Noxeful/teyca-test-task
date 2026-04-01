import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public setItem(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Ошибка при сохранении в localStorage: ${error}`);
    }
  }

  public getItem<T = any>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : null;
    } catch (error) {
      console.error(`Ошибка при чтении из localStorage: ${error}`);
      return null;
    }
  }

  public removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Ошибка при удалении из localStorage: ${error}`);
    }
  }

  public clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error(`Ошибка при очистке localStorage: ${error}`);
    }
  }
}
