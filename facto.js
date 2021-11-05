function factorial (number) {
    resultado = number;
    for (var i=number-1; i>=1; i--) {
    resultado = resultado * i;
}
return resultado;
}
console.log(factorial(5));
