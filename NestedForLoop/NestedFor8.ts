
let s : string = "";    

for (let r : number =1; r<=3; r++ )
{  
    for (let c : number = 1 ; c<=9 ; c++)
    {
        s += c +" ";  // or s = s+c
        
    }
       s += "\n"       // s moves to next line

}

console.log(s)

