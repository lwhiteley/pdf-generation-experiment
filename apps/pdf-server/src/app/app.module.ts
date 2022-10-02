import { Module } from '@nestjs/common';
import { PdfModule } from '../pdf/pdf.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PdfModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
