let m : string = "asdfan"

switch (m)
{
    default : console.log("Entered value is incorrect");

    case "jul" : console.log("Month is July");
    //break;

    case "jan" : console.log("Month is January")
    //break;            fall through condition

    case "mar" : console.log("Month is March")
    //break;

    case "sep" : console.log("Month is September")
    //break;

    case "feb" : console.log("Month is february")
    break;

    case "ap" : console.log("Month is april")
    break;

    
}
