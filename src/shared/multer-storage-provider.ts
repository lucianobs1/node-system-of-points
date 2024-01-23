import { resolve } from 'path';
import { IStorageProvider } from './storage-provider';
import { promises } from 'fs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MulterStorageProvider implements IStorageProvider {
  async saveFile(file: string): Promise<string> {
    return file;
  }

  async deleteFile(file: string): Promise<void> {
    const filePath = resolve('uploads', file);

    try {
      await promises.stat(filePath);
    } catch {
      return;
    }

    await promises.unlink(filePath);
  }
}
