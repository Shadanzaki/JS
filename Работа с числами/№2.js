let a = 13.123456789;
let t = 2.123;
let n = 5;

a = a * 10 ** n;
console.log(a);
let Fraction_a = a % 1;
console.log(Fraction_a);
a = a - Fraction_a;
console.log(a);
a = a / 10 ** n;
console.log(a);
console.log("\n");

t = t * 10 ** n;
console.log(t);
let Fraction_t = t % 1;
console.log(Fraction_t);
t = t - Fraction_t;
console.log(t);
t = t / 10 ** n;
console.log(t);
console.log("\n")

console.log("a = t", a == t);
console.log("a > t", a > t);