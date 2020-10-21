// const clearTask = document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e){
//     let val; 

//     val = e.target.style.color='#fca800';
// }


const clearBtn = document.querySelector('.clear-tasks');

const card = document.querySelector('.card');

const heading = document.querySelector('h5');

// Click

clearBtn.addEventListener('click', runEvent);

// DoubleClick

clearBtn.addEventListener('dblclick', runEvent);

// MouseDown

clearBtn.addEventListener('mousedown', runEvent);

// Mouseup

clearBtn.addEventListener('mouseup', runEvent);

// Mouseenter

clearBtn.addEventListener('mouseenter', runEvent);

// Mouseleave

clearBtn.addEventListener('mouseleave', runEvent);

// Mouseover

clearBtn.addEventListener('mouseover', runEvent);

// Mouseout

clearBtn.addEventListener('mouseout', runEvent);

// Mousemove

card.addEventListener('mousemove', runEvent);
// Add Event Handler

function runEvent(e){
    
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent= `mouseX: ${e.offsetX} mouseY : ${e.offsetY}`;


    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40) `;
}