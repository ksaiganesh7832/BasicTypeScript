let fancynums : number[] = [32, 82, -52, 24, 9, -10]

console.log(fancynums.sort())   // Incorrect sorting

console.log(fancynums.sort((a, b) => a-b)); // Printing in ascending order

console.log(fancynums.sort((a,b) => b-a)); // Printing in descending order