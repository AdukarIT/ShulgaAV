let x = 0;
let y = 1;
let z = 1;
let n;
for (n = 1; n <= 5;n = n + 1) {
console.log(x);
console.log(y);
console.log(z);
x = y + z;
y = x + z;
z = x + y;
}