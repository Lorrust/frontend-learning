function addItem(event) {

    event.preventDefault();
    console.log(event)

    const itemList = document.getElementById('list-container');
    const itemInput = document.getElementById('item-input');

    if (itemInput.value.trim().length > 0 ) {
        const newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML =
            `<p>${itemInput.value}</p>
            <button onclick="completeTask(event)">Done</button>
            <button onclick="deleteTask(event)">Delete</button>`
        
        itemList.appendChild(newItem);
    }
    itemInput.value = "";
    itemInput.focus();
}

function deleteTask(event) {
    console.log(event);
    const task = event.target.parentNode;
    task.parentNode.removeChild(task);
}

function clearDone(event) {
    event.preventDefault();
    
    const itemList = document.getElementById('list-container');
    const completeItems = Array.from(document.getElementsByClassName('complete'));
    // console.log(itemList)
    
    for (item of completeItems) {
        console.log(item.parentNode)
        itemList.removeChild(item.parentNode);
    }

}

function completeTask(event) {
    const task = event.target.parentNode;
    const taskName = task.childNodes[0];
    taskName.classList.toggle('complete');
}