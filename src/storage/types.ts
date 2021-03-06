export type Key = string;
export type StorageItem = [Key, string | null];
export type Data = Map<string, any>;
export interface StorageProvider {
  init(): Promise<void>;
  getItem(key: string): any;
  setItem(key: string, value: any): void;
  removeItem(key: string): void;
  clear(): void;
  length: number;
}
