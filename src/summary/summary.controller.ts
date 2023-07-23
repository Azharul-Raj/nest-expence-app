import { Controller, Get } from '@nestjs/common';
import { SummaryService } from './summary.service';

@Controller('api/v1/summary')
export class SummaryController {
    constructor(private readonly summeryService:SummaryService){}

  @Get()
  getSummery(){
    return this.summeryService.getSummeryService()
  }
}
