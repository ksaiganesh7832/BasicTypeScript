function nofor()    : void 
{
    let h : number = 0;
    for(let k : number = 1 ; k<=9988129 ; k++)
    {
        h++;
    }

    console.log("The for loop runs for :"+ h);
}

let a : number = 12; 
let b : number = 41;
setTimeout( () => 
{ 
    nofor();
})
console.log("The sum of a and b is "+(a+b));
console.log("The Product of a and b is "+(a*b));