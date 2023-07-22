export type Report={
    id:string;
    source:string;
    amount:number;
    dataType:"report" | "expense"
    created_at:Date;
    updated_at:Date;
}

interface Data{
    report:Report[]
}
export const data:Data={
    report:[
        {
            id:"1",
            source:"Facebook",
            amount:700,
            dataType:"report",
            created_at:new Date(),
            updated_at:new Date(),
        },
        {
            id:"2",
            source:"Youtube",
            amount:700,
            dataType:"report",
            created_at:new Date(),
            updated_at:new Date(),
        },
        {
            id:"3",
            source:"Editor",
            amount:400,
            dataType:"expense",
            created_at:new Date(),
            updated_at:new Date(),
        },
        {
            id:"4",
            source:"Internet",
            amount:200,
            dataType:"expense",
            created_at:new Date(),
            updated_at:new Date(),
        }
    ]
}

