import { Injectable } from '@nestjs/common';
import { data } from 'data';

@Injectable()
export class ReportService {
    getHello(): string {
        return 'Hello World!';
      }
    
      getAllReportsService(type:string){
        const typeArr=['report','expense']
        if(!typeArr.includes(type)){
          return {
            data:null,
            message:`no data found in this ${type}`
          }
        }
        else if(type){
          const reports= data.report.filter(d=>d.dataType===type);
          return {
            data:reports,
            message:"report found successfully."
          }
        }
        else{
          return{
            data:null,
            message:"Please provide a type"
          }
        }
      }
    
      getReportByIdService(type:string,id:string){
        const report= data.report.find(d=>d.dataType===type && d.id===id);
        if(report){
          return {
            data:report,
            message:"report found successfully."
          }
        }
        return {
          data:null,
          message:`didn't found any report with id ${id}`
        }
      }
}
