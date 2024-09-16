function mouseEventLog(event) {
    console.log(event.type);
}

function keyboardEventLog(event) {
    console.log(event.type, event.key)
}

function sendForm(event) {
    console.log(document)

    const inputName = document.getElementById('name')
    console.log(inputName);

    const inputAge = document.getElementById('age')
    console.log(inputAge);

    const inputs = document.getElementsByTagName('input');
    console.log(inputs)

    const labelByClass = document.getElementsByClassName('title-div')[0];
    console.log(labelByClass);

    const div = document.querySelector('div');
    console.log(div);

    event.preventDefault();
}