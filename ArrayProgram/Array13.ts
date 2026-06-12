let fancynums : number[] = [32, 82, -52, 24, 9, -10]

console.log(fancynums.sort())

console.log(fancynums.sort((a, b) => a-b));

console.log(fancynums.sort((a,b) => b-a));