const form = document.querySelector('form');

const taskInput = document.getElementById('task');

const heading = document.querySelector('h5');

const select = document.querySelector('select');







// SUBMIT 

form.addEventListener('submit', runEvent);

// KEYDOWN
taskInput.addEventListener('keydown', runEvents);

// KEYUP
taskInput.addEventListener('keyup', runEvents);

// FOCUS
taskInput.addEventListener('focus', runEvents);

// BLUR
taskInput.addEventListener('blur', runEvents);

// CUT
taskInput.addEventListener('cut', runEvents);

// PASTE
taskInput.addEventListener('paste', runEvents);

// INPUT
taskInput.addEventListener('input', runEvents);


// CHANGE

select.addEventListener('change', runEvents);



// Empty Input
taskInput.value = " ";

function runEvent(e){

    // Get Value
    console.log(taskInput.value);

    // Get Element Type
    console.log(`EVENT TYPE: ${e.type}`); 

    e.preventDefault();
}

function runEvents(e){

    // EDIT INNER TEXT

    heading.innerText = e.target.value;

    console.log(`Event Type: ${e.target.value}`);

    console.log(`EVENT TYPE: ${e.type}`); 
};






