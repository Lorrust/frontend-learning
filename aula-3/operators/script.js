let a = true;
let b = false;

console.log(`true and false: ${a && b}`);
console.log(`true or false: ${a || b}`);
console.log(`not true: ${!a}`);

console.log(`true == false: ${a == b}`);
console.log(`true === false: ${a === b}`);

// Unary operators: a single operand

let number = 10;
let negative = -number;

let truthful = true;
let falseful = !truthful;

let counter = 0;
console.log(`Counter: ${counter}`)
counter++;
console.log(`Counter++: ${counter}`)
counter--;
console.log(`Counter--: ${counter}`)

let age = 18;
let canDrive = (age >= 18 ? "can" : "cannot")
console.log(`If you're ${age}, you ${canDrive} drive.`)

// Array methods

const generalArray = [1, 2, 3, 4, 5];

item = generalArray.find(item => item == 2);
console.log(2)

let indexNumber5 = generalArray.findIndex(item => item == 5);
console.log(indexNumber5)

// Memory reference

const obj = {id: 4}
let array = [{id: 1}, {id: 2}, {id: 3}, {id: 5}]

array.push(obj)

console.log(array.findIndex(item => item.id = 4));
console.log(array.indexOf(array[0]))
console.log(array[0])

const some3 = generalArray.some(item => item == 3);
console.log(some3)

const includes4 = generalArray.includes(4);
console.log(includes4);

const includes5 = generalArray.includes(5);
console.log(includes5)

// Loops

generalArray.forEach(item => console.log(item))

for (let item of array) {
    console.log(item)
}

for (const index in array) {
    console.log(index)
}

let i = 0;
while (i < 10) {
    i++;
    console.log(i)
}