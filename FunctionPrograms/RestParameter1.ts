let A : number[] = [3231,4523,1231,41212]; //For of

for (let k of A)
{
    console.log(k);
}

console.log("-----------------------------------------------------")

let stuData =
{
    stuId : 67,
    stuName : "Indu",
    StuAge : "26"
}

for (let T in stuData)     // for in 
{
    console.log(stuData[T])
}