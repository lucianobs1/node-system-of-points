import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AppService } from 'src/app/use-cases/app.service';
import { AppController } from './controllers/app.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class HttpModule {}
