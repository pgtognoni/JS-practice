function fiboSeries (number) {
    var fibo = [0, 1];
    if (number === 1) {
        return 0;
    }
    for (var i=fibo.length; i<number; i++) {
     fibo[i] = fibo[i-2] + fibo[i-1];
    }
    return fibo[fibo.length-1];
}
console.log(fiboSeries(5));