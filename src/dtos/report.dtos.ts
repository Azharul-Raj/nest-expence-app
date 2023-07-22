import { Exclude } from "class-transformer";
import { IsPositive,IsNumber,IsString,IsNotEmpty } from "class-validator";


export class CreateReportDto{
    id:string

    @IsNumber()
    @IsPositive()
    amount:number
     
    dataType:'report'| 'expense'

    @IsString()
    @IsNotEmpty()
    source:string;

    created_at:Date

    updated_at:Date
}

export class ReportResponseDto{
    id:string
    amount:number
    dataType:'report' |'expense'
    source:string
    created_at:Date

    @Exclude()
    updated_at:Date
}