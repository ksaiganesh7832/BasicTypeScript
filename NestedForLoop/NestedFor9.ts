
let s : string = "";    

for (let r : number =1; r<=4; r++ )
{  
    for (let c : number = 1 ; c<=15 ; c++)
    {
        s += r +" ";  // or s = s+c
        
    }
       s += "\n"       // s moves to next line

}

console.log(s)

