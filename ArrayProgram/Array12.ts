let animals1 : string[] = ["Dog", "Cat", "Cow", "fox", "Deer", "Tiger","Horse", "Sheep", "Lion","Zebra","buffalo"]

for(let x of animals1)          // Printing each and every element using for of
{
    console.log(x)
}

let animals2 : string[] = animals1.reverse();       //Storing reverse of an array

console.log(animals2)


for(let y of animals2)          // Printing each and every element using for of in a reverse order
{
    console.log(y)
}