import { Injectable } from '@nestjs/common';
import { ReportService } from 'src/report/report.service';

@Injectable()
export class SummaryService {
    constructor(private readonly reportService:ReportService){}

    getSummeryService(){
        const allReports=this.reportService.getAllReportsService('report');
        const allExpense=this.reportService.getAllReportsService('expense');
        return allReports;
    }
}
