let val;

const list = document.querySelector('ul.collection');

const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get childNodes

val = list.childNodes; //It will list all the child node out
val = list.childNodes[0]; //It will list only the first child node
val = list.childNodes[0].nodeName; //It will list out the node name


console.log(val);

// Get children

val = list.children; //Display all the children
val = list.children[0]; //It will display the 1st child

val = list.children[1].textContent = 'List Item'; //Change the content to List Item

// Children of Children

val = list.children[0].children[0];


// First child

val = list.firstChild;
val = list.firstElementChild;

// Last Child

val = list.lastChild;
val = list.lastElementChild;

// Count child element 

val = list.childElementCount;

// Get Parent Node

val = listItem.parentNode;

// Get Parent Element

val = listItem.parentElement;

// Parent of Parent

val = listItem.parentElement.parentElement;

val = list.parentElement.parentElement;

// Get Next Sibling

val = listItem.nextSibling;

// Get NextElementSibling

val = listItem.nextElementSibling;

val = listItem.nextElementSibling.nextElementSibling;

// // Get PreviousSibling

val = listItem.previousSibling;

val = listItem.previousElementSibling;

val = list.lastElementChild;

val = list.previousElementSibling;

console.log(val)

// CREATING AN ELEMENT  CREATING AN ELEMENT  CREATING AN ELEMENT  CREATING AN ELEMENT  CREATING AN ELEMENT  CREATING AN ELEMENT

// Create Element

const li = document.createElement('li');

li.className = 'collection-item';

// Add Attribute

li.setAttribute('title', 'New item');

// Create a text Node and Append

li.appendChild(document.createTextNode('Hello World!'));

// Append Li as child to ul

document.querySelector('ul.collection').appendChild(li);

console.log(li);


// Create New Link Element

const link = document.createElement('a');

// Add classes to link

link.className = 'delete-item secondary-content';

// Add Icon from html

link.innerHTML = '<i class="fa fa-remove"></i>';


// Append Link in li

li.appendChild(link);
console.log(link);


// Removing and Replacing Elements  Removing and Replacing Elements  Removing and Replacing Elements  Removing and Replacing Elements 


// Create Element first 

const newTitle = document.createElement('h2');

// Add id to the Element
newTitle.id = 'task-title';

// New text node
newTitle.appendChild(document.createTextNode('Task List'));

// Get old Title
const oldTitle = document.getElementById('task-title');

// Get the parent of Old Title
const cardAction = document.querySelector('.card-action');

// Replace using the parent of the old title
cardAction.replaceChild(newTitle, oldTitle);


// Removing Element  Removing Element  Removing Element  Removing Element  Removing Element  Removing Element  Removing Element

const liss = document.querySelectorAll('li');

const lists = document.querySelector('ul');

// Remove list item

liss[0].remove();

// Remove Child Element

lists.removeChild(liss[3]);

// CLASSES AND ATTRIBUTES

const firstLi = document.querySelector('li:nth-child(2)');

// console.log(firstLi.children[0]);

const links = firstLi.children[0];

let valls;

valls = links.className;

valls = links.classList;

valls = links.classList[0];

// Add className to link

valls = links.classList.add('test');

// Remove className on Link

valls = links.classList.remove ('test');

valls = links;


// ATTRIBUTES  ATTRIBUTES  ATTRIBUTES  ATTRIBUTES  ATTRIBUTES ATTRIBUTES  ATTRIBUTES  ATTRIBUTES

// Get attributes

valls = links.getAttribute('href');

// Set attributes
 
valls = links.setAttribute('href', 'https://wakabuy.com/spec56');

// Set attributes

// valls = links.setAttribute('title', 'jdkds')
// Check if we have actual attributes

links.hasAttribute('href');

// Remove Attribute

links.removeAttribute('href')


valls = links;
console.log(valls);



// EVENTS LISTENERS & EVENT OBJECT  EVENTS LISTENERS & EVENT OBJECT  EVENTS LISTENERS & EVENT OBJECT  EVENTS LISTENERS & EVENT OBJECT
// EVENTS LISTENERS & EVENT OBJECT  EVENTS LISTENERS & EVENT OBJECT  EVENTS LISTENERS & EVENT OBJECT  EVENTS LISTENERS & EVENT OBJECT
// EVENTS LISTENERS & EVENT OBJECT  EVENTS LISTENERS & EVENT OBJECT  EVENTS LISTENERS & EVENT OBJECT  EVENTS LISTENERS & EVENT OBJECT
// EVENTS LISTENERS & EVENT OBJECT  EVENTS LISTENERS & EVENT OBJECT  EVENTS LISTENERS & EVENT OBJECT  EVENTS LISTENERS & EVENT OBJECT
// EVENTS LISTENERS & EVENT OBJECT  EVENTS LISTENERS & EVENT OBJECT  EVENTS LISTENERS & EVENT OBJECT  EVENTS LISTENERS & EVENT OBJECT



const clearTask = document.querySelector('.clear-tasks');

// UNNAMED FUNCTION

clearTask.addEventListener('click', function(e){
    console.log('Hello World!');

    e.preventDefault();
})


// NAMED FUNCTION

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
    console.log('clicked')
    e.preventDefault();
}


document.querySelector('.clear-tasks').addEventListener('click', onClicked);

function onClicked(e){
    let vaul;

    vaul = e;

    // EVENT TARGET

    vaul = e.target; 
    vaul = e.target.id;


    vaul = e.target.className;

    vaul = e.target.classList;

    e.target.innerText = 'Hello';

    e.target.style.color = '#fca800';

    // EVEENT TYPE

    vaul = e.type;
    console.log(vaul);

}

