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
    // Add Tasks To Form event
    form.addEventListener('submit', addTask);
    // Remove Task From List event
    taskList.addEventListener('click', removeTask);
    // Clear All Tasks event
    clearButton.addEventListener('click', clearAllTasks);
    // Filter Tasks event
    filter.addEventListener('keyup', filterTasks);
}

// Add Task
function addTask(e) {
    if ( taskInput.value === '' ) {
        alert("Please Add Todo");
    } else {
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

        taskInput.value = '';
    }
}

// Remove Task
function removeTask(e) {
    if ( e.target.classList.contains('delete-item') ) {
        console.log('Remove Task Button Cliked');

        // Remove Li
        if ( confirm('Are you sure?') ) {
            e.target.parentElement.remove();
        }
    }
    
}

// Clear All
function clearAllTasks() {
    console.log("Clear all button clicked"); 
    while ( taskList.firstChild ) {
        taskList.removeChild(taskList.firstChild);
    }

}

// Function Filter
function filterTasks(e) {
    console.log("Key Pressed");

    const text = e.target.value.toLowerCase();
    console.log(text);

    const allItems = document.querySelectorAll('li');
    console.log(allItems, 'all items');

    allItems.forEach( function(task) {
        const item = task.firstChild.textContent;
        console.log(item, 'from fiter');

        if ( item.toLowerCase().indexOf(text) != -1 ) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none'
        }
    });
}