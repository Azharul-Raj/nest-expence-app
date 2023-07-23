import { Controller,Delete,Get, Param, Post, Put,Body } from "@nestjs/common";
import { data,Report } from "data";
import { ReportService } from "./report.service";
import { CreateReportDto } from "../dtos/report.dtos";

@Controller('api/v1/:type')
export class ReportController {
    constructor(private readonly reportService:ReportService){}
    
  @Get()
  getAllReports(
    @Param('type') type :string
  ){
    console.log('here')
    return this.reportService.getAllReportsService(type);
  }

  @Get(":id")
  getReportById(
    @Param('type') type :string,
    @Param('id') id:string
    ){    
      return this.reportService.getReportByIdService(type,id);
    // return data.report.find(d=>d.dataType===type && d.id===id);
  }

  @Post()
  createReport(
    @Body() body:CreateReportDto
  ){
    console.log(body)
    data.report.push(body)
    return data.report;
  }

  @Put(":id")
  updateReport(
    @Param('type') type:string,
    @Param('id') id:string,
    @Body() body:Report
  ){
    return `Report updated successfully.`
  }

  @Delete(":id")
  deleteReport(){
    return `deleted report successfully.`
  }
}
