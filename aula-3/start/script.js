// Examples

console.log('Hello, World!');
console.warn('This is a warning!');
console.error('This is an error!');

let text = 'Life could be a dream.'
console.log(text, typeof text);

let number = 10;
console.log(number, typeof number);

let isTrue = true;
console.log(isTrue, typeof isTrue);

// Exercise 06

let a = 40;
let b = 5;
let c = 2;

let result = (a + b) / c;

console.log(result.toFixed(2));

// Exercise 07

let activity = 'Class';
let subject = 'Frontend';

console.log(subject + ' ' + activity);
console.log(subject.charAt(0) + subject.charAt(1));

// Functions

function calculate(num1, num2, num3) {
    return ((num1 + num2) / num3).toFixed(2);
}

function getFirstChars(string) {
    return string.charAt(0) + string.charAt(1);
}

function printStrings(string1, string2) {
    return `${string1} ${string2}`;
}

console.log(calculate(a, b, c));
console.log(getFirstChars(subject))
console.log(printStrings('Frontend', 'Class'));