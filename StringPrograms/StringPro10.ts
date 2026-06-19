let myCarData : string = "My car name is : I20 and car engine name No : @$&192$YB@123"

let removeNum : string = myCarData.replace(/[0-9]/g , "")

let onlyNum : string = myCarData.replace(/[^0-9]/g , "")

let removeAlpha : string = myCarData.replace(/[A-Za-z]/g, "")

let removeSpec : string = myCarData.replace(/[^0-9A-Za-z]/g, "")

console.log(removeNum);

console.log(onlyNum);

console.log(removeAlpha);

console.log(removeSpec);