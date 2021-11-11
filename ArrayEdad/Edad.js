const list = [
    {name: "Pablo", age: 21},
    {name: "Flor", age: 27},
    {name: "Juan", age: 23},
    {name: "Gabriel", age: 45},
    {name: "Ignacio", age: 23},
    {name: "María", age: 27},
    {name: "Juana", age: 23},
    {name: "Gabriela", age: 45}
];
var filtered = list.map(age => age.age);
var sum = (a, b) => a + b;
var average = filtered.reduce(sum)/filtered.length;
var youngerAge = list.filter(list => list.age === Math.min(...filtered));
console.log("Las personas presentes son: ");
var peopleAge = list.forEach(list => console.log("- " + list.name + ", " + list.age + " años")); 
console.log("La edad promedio es " + average + " años");
var young = youngerAge.forEach(list => console.log("La persona más joven es " + list.name + " con " + list.age + " años"));


