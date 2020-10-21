let val;

val = document; //This will help get all HTML Documents ;

val = document.all; //It will list all the tags like an array;

val = document.all[5]; //Access all the indexes starting from 0 ;

val = document.all.length; //It shows how many element we have in the dom;

val = document.head; //Show us the head tag and what we have inside

val = document.body; //show us the body tag and what we have inside

val = document.doctype; //To know the doctype used in the html

val = document.domain; //Shows the domain address

val = document.URL; //shows the complete web address

val = document.characterSet; //Shows the html character set

val = document.contentType; //Shows if its html/text


val = document.forms; //Accessing without using selector isn't advisable

val = document.forms[0].id //Access the id of the form

val = document.forms[0].method //To know the method of the App



val = document.links; // To get all the links 

val = document.links[1]; //To get the second link in the dom 

val = document.links[0].className; //To get the class name of the first link;

val = document.links[0].classList; //To get the collect of classes in the dom;



val = document.images; // It will get us all the images in the doc;




val = document.scripts; //Fetch us all the scripts in the dom

val = document.scripts[1].getAttribute('src'); //Get attribute of the 2nd scripts


let scripts = document.scripts

let scriptsArr = Array.from(scripts)

scriptsArr.forEach(script => {
    console.log(scripts)
});

console.log(val);

// DOM SELECTOR

// Single Element Selector

console.log(document.getElementById('task-title'));


// Style Changing

// document.getElementById('task-title').style.color = '#fca800';

// document.getElementById('task-title').textContent = 'Task List';

// document.getElementById('task-title').innerText = 'My Task List';

// document.getElementById('task-title').innerHTML = '<span style="color:red">My Task</span>'


// Best way to do this is to set the id to a variable

const taskTitle = document.getElementById('task-title');

taskTitle.style.color = 'green';

taskTitle.textContent = 'My Task List';


// QUERY SELECTOR()

// ID SELECTOR

console.log(document.querySelector('#task-title'));

// CLASS SELECTOR 

console.log(document.querySelector('.card-action'));

// FOR TAGS

console.log(document.querySelector('h5')); //If we have more than 1 h5 it will only select the first one

document.querySelector('li').style.color = 'red';

document.querySelector('li:nth-child(2)').style.color = 'yellow';

document.querySelector('ul li:last-child').style.color = 'orange';

// document.querySelector('li: nth-child(odd)').textContent = 'My super list';


// DOCUMENT.GETELEMENTSBYCLASSNAME();  DOCUMENT.GETELEMENTSBYCLASSNAME(); DOCUMENT.GETELEMENTSBYCLASSNAME(); DOCUMENT.GETELEMENTSBYCLASSNAME();

const items = document.getElementsByClassName('collection-item');

console.log(items);

items[3].style.color = 'pink';

// const listItem = document.querySelector('li').document.getElementsByClassName('collection-item');

// listItem.style.background = '#fca800';


// DOCUMENT.GETELEMENTBYTAGNAME.

const lis = document.getElementsByTagName('li');

console.log(lis)


// CONVERT HTML COLLECTION INTO AN ARRAY  CONVERT HTML COLLECTION INTO AN ARRAY  CONVERT HTML COLLECTION INTO AN ARRAY

let liss = document.getElementsByTagName('li');

liss = Array.from(liss);

liss.reverse()

// FOR EACH

liss.forEach((function (li, index) {
    console.log(liss);
    li.textContent = `${index}: Hello`
}));


console.log(liss);


// QUERYSELECTORALL()  QUERYSELECTORALL() QUERYSELECTORALL() QUERYSELECTORALL() QUERYSELECTORALL() QUERYSELECTORALL()

const display = document.querySelectorAll('ul');

console.log(display);


display.forEach(function (displays) {
    console.log(displays);
})


// Using querySelectorAll to choose the css pseudo selector

const liodd = document.querySelectorAll('li:nth-child(odd)');
const lieven = document.querySelectorAll('li:nth-child(even)');

liodd.forEach(function (li) {
    li.style.background = '#fca800';
})

console.log(liodd);

lieven.forEach(function (li) {
    li.style.background = '#f3f3f3';
})

console.log(lieven);


// USING THE FOR LOOP ON QUERYSELECTORALL

const lievens = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < lievens.length; i++) {
    lievens[i].style.color = 'purple';
}