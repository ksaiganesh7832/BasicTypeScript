let H = new Set()

H.add(42312);
H.add("Ganesh");
H.add(true);
H.add(false);
H.add('hello');
H.add(null);
H.add(42312);

console.log(H.has('hello'));
console.log(H.has(43212));