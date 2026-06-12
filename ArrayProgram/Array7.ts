let animals : string[] = ["Dog", "Cat", "Cow", "fox", "Deer"]

//Adding an element at the starting of the index
animals.unshift("Crocodile")

console.log(animals)

//Adding element at the end of the index
animals.push("Cat")

console.log(animals)


//Deleting an element at the starting 
animals.shift()
console.log(animals)

//Deleting element at the last index
animals.pop()
console.log(animals)