import { Controller,Delete,Get, Param, Post, Put,Body } from "@nestjs/common";
import { data,Report } from "data";
import { AppService } from "./app.service";
import { CreateReportDto } from "./dtos/report.dtos";

@Controller("api/v1/:type")
export class AppController{
  constructor(private readonly appService:AppService){}

  @Get()
  getAllReports(
    @Param('type') type :string
  ){
    return this.appService.getAllReportsService(type);
  }

  @Get(":id")
  getReportById(
    @Param('type') type :string,
    @Param('id') id:string
    ){    
      return this.appService.getReportByIdService(type,id);
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