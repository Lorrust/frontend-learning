const person = {
    name: 'Alafirr',
    age: 31,
    nameAge: function () {
        return this.name + ' ' + this.age;
    }
}

person.weight = 45;

console.log(person.name);
console.log(person.age);
console.log(person.nameAge())

const car = new Object();
console.log(car);

car.plate = 'JN3F149';
car.brand = 'Fiat'
console.log(car)