// Set local Storage Item

// localStorage.setItem('name', 'John');

// localStorage.setItem('age');

// Set session Storage item

// sessionStorage.setItem('name', 'Jide');


// Remove from storage

// localStorage.removeItem('name');

// localStorage.removeItem('age');

// Get from storage

// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name, age);


// Clear Local Storage

// localStorage.clear();


// ADD FORM  ADD FORM ADD FORM ADD FORM ADD FORM ADD FORM  ADD FORM  ADD FORM  ADD FORM ADD FORM ADD FORM ADD FORM  ADD FORM  ADD FORM


document.querySelector('form').addEventListener('submit', 
function(e){
    const task = document.getElementById('task').value;

    // Create an array of string in other to store multiple task 
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // Add the task from const task 

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
e.preventDefault();
})

// Pull it out to show on the screen

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
})
