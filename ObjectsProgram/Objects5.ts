interface empdata           //Creating a rough data
{
    empid : number
    empname : string,
    emprole : string
    IsSalary : boolean,
    empexp : number,
    empdomain : string,
    empadd :
    {
        street : string,
        hno : string,
        location : number
    }
}


let empInfo : empdata =          //Creating Original object (empinfo) from the rough data (empdata)
{
    empid : 1234,
    empname : "Satya",
    emprole : "Associate",
    IsSalary : true,
    empexp : 17,
    empdomain : "QA lead",
    empadd :
    {
        street : "road no 13",
        hno : "12-41nd",
        location : 500021
    }
}

// Checking the type of data

console.log(typeof empInfo)
console.log(typeof empInfo.IsSalary)