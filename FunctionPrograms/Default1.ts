function ageCheck(name : string , age : number, eli = "Citizen is eligible for 50% consession")
{
    if(age > 60)
    {
        console.log("Eligible critiria is "+ eli)
    }
    else
    {
        console.log("Pay full ticket fare")
    }
}

ageCheck("Ravi", 61)