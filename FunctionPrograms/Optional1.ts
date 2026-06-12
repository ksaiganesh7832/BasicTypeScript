function myData (name : string, aadhar ?: number)
{
    if (aadhar == undefined)
    {
        console.log("With respect to the customer name: " + name + "not providing the aadhar number")
    }
    else
    {
        console.log("With respect to the customer name : "+name +"the aadhar number is"+ aadhar)
    }
}

myData("Hari")