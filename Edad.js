const list = [
    {name: "Pablo", age: 23},
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
console.log("Las personas presentes son: ");
var peopleAge = list.forEach(list => console.log("- " + list.name + ", " + list.age + " de edad")); 
console.log("La edad promedio es " + average);


