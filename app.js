console.log("Javascript connected");

// Definie All UI Variables
const form = document.querySelector('#task-form');
console.log(form);

const taskList = document.querySelector('.collections');
console.log(taskList);

const clearButton = document.querySelector('.clear-tasks');
console.log(clearButton);

const filter = document.querySelector('#filter');
console.log(filter);

const taskInput = document.querySelector('#task');
console.log(taskInput);

// Call All Event Listeners
LoadAllEventListeners();

function LoadAllEventListeners() {
    // Add Tasks To Form
    form.addEventListener('submit', addTask);
}

// Add Task

function addTask(e) {
    if ( taskInput.value === '' ) {
        alert("Please Add Todo");
    }
    e.preventDefault();

    // Create li element
    const li = document.createElement('li');
    
    // Add Class
    li.className = 'collection-items';
    
    // Create Text Node and append 
    li.appendChild(document.createTextNode(taskInput.value));
    console.log(taskInput.value, 'this is the task input value');

    // Create new link element 
    const button = document.createElement('button');

    // Add class Name 
    button.className = 'delete-item';

    // Create inner html
    button.innerHTML = 'Delete Item';
    
    
    li.appendChild(button);
    console.log(li);
    // Append ul to the ul

    taskList.appendChild(li);
}