let myCarData : string = "My car name is : I20 and car engine name No : @$&192$YB@123"

let removeNum : string = myCarData.replace(/[0-9]/g , "")

console.log(removeNum);