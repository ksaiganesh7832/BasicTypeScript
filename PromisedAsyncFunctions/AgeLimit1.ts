function ageCheck() : Promise<string>
{
    return new Promise((resolve, reject)=>
    {
        let age : number = 18;
        if (age > 18)
        {
            resolve ("Person is eligible for voting")
        }
        else
        {
            reject ("Person is not eligible for voting")
        }
    })
}