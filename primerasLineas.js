/*var fibo = [0, 1];
var number = 1; 
for (var i=fibo.length; i<number; i++) {
fibo[i]=fibo[i-2] + fibo[i-1];
}
console.log(fibo)
console.log(fibo[fibo.length-1]);*/



var x = 0;
var y = 1;
var z; 
var number = 2;
if (number === 1) {
    z = 0;
}
if (number === 2) {
    z = 1;
}
for (var i = 2; i < number; i++) {
    z = x + y; 
    x = y;
    y = z;
}
console.log(z);