let fancynums : number[] = [32, 82, -52, 24, 9, -10]

let adding7 : number[] = fancynums.map(x => x+7); //=> these are arrow based functions used in functions type

console.log(adding7)

let filter3 : number[] =  fancynums.filter(v => v%3 ==0);  // % devide number and get the remainder

console.log(filter3)