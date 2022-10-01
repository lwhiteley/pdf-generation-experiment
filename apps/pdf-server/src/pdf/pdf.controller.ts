import { Body, Controller, Post } from '@nestjs/common';
import { PdfService } from './pdf.service';

@Controller('pdf')
export class PdfController {
  constructor(private service: PdfService) {}

  @Post('/generate')
  async generatePdf(@Body() data) {
    return this.service.generatePdf(data);
  }
}
