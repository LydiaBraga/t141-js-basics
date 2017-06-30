var rowNumber = undefined;
const form = document.getElementById("subscriber-form")
const inputName = document.getElementById("inputName")
const inputEmail = document.getElementById("inputEmail")
const tableSubscribers = document.getElementById("tb-subscriber");

var reloadTable = function() {
    cleanTable();
    for (let index = 0; index < subscribers.length; index++) {
        addSubscriberToTable(subscribers[index], index);
    }
}

var cleanTable = function() {
    var tableRows = tableSubscribers.rows;
    
    while(tableRows.length) {
        tableSubscribers.deleteRow(0);
    }
}

var addSubscriberToTable = function(subscriber, index) {
    // create a new row
    let newRow = tableSubscribers.insertRow(index);

    // create new cells
    let nameCell = newRow.insertCell(0);
    let emailCell = newRow.insertCell(1);
    let actionsCell = newRow.insertCell(2);

    // create de content for the cells
    let name = document.createTextNode(subscriber.name);
    let email = document.createTextNode(subscriber.email);
    let editSpan = document.createElement('span');
    editSpan.setAttribute('class', 'btn btn-success');
    editSpan.innerHTML = 'Edit';
    let deleteSpan = document.createElement('span');
    deleteSpan.setAttribute('class', 'btn btn-danger');
    deleteSpan.innerHTML = 'Delete';
   
    // add cell's contents
    nameCell.appendChild(name);
    emailCell.appendChild(email);
    actionsCell.appendChild(editSpan);
    actionsCell.appendChild(deleteSpan);

    // add Actions
    addAction(editSpan, editAction);
    addAction(deleteSpan, deleteAction);
}

var addAction = function(element, action) {
    element.addEventListener('click', action);
}

var editAction = function(event) {
    rowNumber = event.target.parentNode.parentNode.rowIndex;
    let subscriberToEdit = subscribers[rowNumber];
    inputName.value = subscriberToEdit.name;
    inputEmail.value = subscriberToEdit.email;
}

var deleteAction = function(event) {
    rowNumber = event.target.parentNode.parentNode.rowIndex;
    subscribers.splice(rowNumber, 1);
    save();
    retrieve();
    reloadTable();
}

var getNewSubscriber = function() {
    return {name: inputName.value, email: inputEmail.value};
}

var clearInputs = function() {
    inputName.value = "";
    inputEmail.value = "";
}

var onSubmit = function(event) {
    event.preventDefault(); //I want to stop the default event for this form
    
    if (typeof rowNumber !== 'undefined') {
        subscribers.splice(rowNumber, 1, getNewSubscriber());
    } else {
        subscribers.splice(subscribers.length, 0, getNewSubscriber());
    }
    
    save();
    retrieve()
    reloadTable();
    clearInputs();

    rowNumber = undefined;
}

form.addEventListener("submit", onSubmit);
retrieve()
reloadTable();