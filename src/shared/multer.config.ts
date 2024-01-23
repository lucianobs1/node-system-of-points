import { Injectable } from '@nestjs/common';
import { diskStorage } from 'multer';

import { MulterOptionsFactory } from '@nestjs/platform-express';
import { randomBytes } from 'crypto';

@Injectable()
export class MulterConfig implements MulterOptionsFactory {
  createMulterOptions() {
    return {
      storage: diskStorage({
        destination: 'uploads',
        filename(req, file, callback) {
          const fileHash = randomBytes(10).toString('hex');
          const fileName = `${fileHash}-${file.originalname}`;

          return callback(null, fileName);
        },
      }),
    };
  }
}
