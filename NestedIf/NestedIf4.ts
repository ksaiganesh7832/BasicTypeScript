let a : number = 52;
let b : number = 23;
let c : number = 82;

if(a < c)
{
    console.log("Tiger runs faster than human");    //if 1

    if(b < a)
    {
        console.log("Dog barks");   //if 2

        if(c < b)
        {
            console.log("Fish swims");  //if 3
        }

        console.log("Cat Says Meow")    //if 2
    }
    
    console.log("Cow says moo moo")     //if 1
}