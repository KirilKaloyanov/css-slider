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

function s() {
    let a = 1;
    return function () {
        a++;
        console.log(a);
    }
}

let j = s();
let f = s();
j();
j();
f();