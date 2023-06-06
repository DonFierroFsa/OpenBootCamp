//Numero

//Redondeo
let a= 0.3; let b = 3.3;
let c = a+b;
console.log(c);

console.log(Math.round(c));

c = Math.round(c*100)/100;
console.log(c)

//Number to String

console.log(typeof(a));
a_strg = a.toString();
console.log(a_strg)
console.log(typeof(a_strg));

//Redondeo fix 

console.log(a*b)
let d = a*b;
console.log(d.toFixed(3))
console.log(typeof(d.toFixed(3)))
console.log(d.toPrecision(3))
console.log(typeof(d.toPrecision(2)))