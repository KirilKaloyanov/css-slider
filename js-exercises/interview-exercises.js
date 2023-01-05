function Person(name) {
    this.name = name;
}

const animal = {name: 'Sharo'}

const john = new Person('John');

console.log(Object.getPrototypeOf(animal));
Object.getPrototypeOf(animal).breed = 'persy'
console.log(animal.breed);
Person.prototype.age = 22;
console.log(Person.prototype);

let a = () => 5 + 6;

let smt = () => {
    9+0;
}

let b = a;

console.log(a());