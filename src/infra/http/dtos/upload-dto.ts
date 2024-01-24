import { IsNotEmpty } from 'class-validator';

export class FileDTO {
  @IsNotEmpty()
  filename: string;
  @IsNotEmpty()
  originalname: string;
  @IsNotEmpty()
  mimeType: string;
  @IsNotEmpty()
  buffer: Buffer;
  @IsNotEmpty()
  size: number;
}
