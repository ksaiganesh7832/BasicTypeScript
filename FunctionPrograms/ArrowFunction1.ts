function Multiply(m : number , n : number) : number
{
    let h = m * n
    return h
}

//console.log(Multiply(31, 1))

let k : number = (Multiply(31, 2))

console.log(k);

let P = (m : number, n : number) : number => m * n    // P is a arrow based function

console.log("The multiply of m and n is "+ P(13, 12))



let stuData = (Id : number, Name : string) : void =>
{
    console.log("The Student name is "+ Name);
    console.log("The student Id is "+ Id);
}

stuData(42, "Ganesh")
