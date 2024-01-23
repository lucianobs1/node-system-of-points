export abstract class IStorageProvider {
  abstract saveFile(file: string): Promise<string>;
  abstract deleteFile(file: string): Promise<void>;
}
