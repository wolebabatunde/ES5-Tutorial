const name = 'Kolawole';
const age = '28';
const job = 'Full Stack Developer';
const city = 'Abuja';
let html;


// WITHOUT TEMPLATE LITERAL (ES5)

// html = '<ul>' +
//     '<li>Name: ' + name + '</li>' +
//     '<li>Age: ' + age + '</li>' +
//     '<li>Job: ' + job + ' </li>' +
//     '<li>City: ' + city + '</li>'
// '</ul>';

// document.body.innerHTML = html;


// WITH TEMPLATE STRING/LITERAL (ES6)

const names = 'Akolawole Yekini';
const ages = 26;
const jobs = 'Full Stack Developer';
const cities = 'New York City';

function hello() {
    return (
        'Hello! I am new here'
    )
}

html = `
    <ul>
        <li>Name: ${names}</li>
        <li>Age: ${ages}</li>
        <li>Job: ${jobs}</li>
        <li>City: ${cities}</li>
        <li>${2*5}</li>  //we can also use it to add, multiply etc
        <li>${42-5}</li>
        <li>${hello()}</li>  //we can also use it to call a function
        <li>${age > 26 ? 'Under 30' : 'Over 30'}</li>  we can also use it for iternaries
    </ul>
`;

document.body.innerHTML = html;


// ARRAYS  ARRAYS  ARRAYS   ARRAYS   ARRAYS   ARRAYS   ARRAYS   ARRAYS   ARRAYS  ARRAYS   ARRAYS   ARRAYS 

// Array of numbers

const numbers = [1, 2, 3, 48, 788, 7];

// Array of strings

const fruit = new Array('Apple', 'Pawpaw', 'Orange', 'Pineapple');

console.log(fruit);

// Mixed Array

const mixed = [2, 'Hello!', true, undefined, {
    a: 1,
    b: 2
}, new Date()];

console.log(mixed);

const numbers1 = [1, 5642, 86, 8, 63, 63, 54, 845];
const fruit1 = ['Apple', 'Pawpaw', 'Orange', 'Pineapple'];
const mixed1 = [2, 'Hello!', true, undefined, {
    a: 1,
    b: 2
}, new Date()];
let val;

//to check the length of array
val = numbers1.length; //8

//check if its array
val = Array.isArray(mixed1) //True
console.log(val);

//Get a single Array Value

const nums = [1, 56, 956, 98, 63];
let update;


update = nums[3]; //98

//insert into an Array
nums[2] = 100; // [1, 56, 100, 98, 63];

//find a value of 
update = nums.indexOf(98); //3

console.log(update);
console.log(nums);

//Mutate Arrays

const nummss = [985.89, 3, 578, 50, 48.85];

nummss.push(452); //PUSH WILL ADD FROM THE BACK

console.log(nummss) //985.89, 3, 578, 50, 48.85, 452


//Add to the front

const nummsis = [985.89, 3, 578, 50, 48.85];

nummsis.unshift(452); //UNSHIFT WILL ADD FROM THE FRONT

console.log(nummsis) //452, 985.89, 3, 578, 50, 48.85
console.log(nummsis)

//Remove from the back

const nummsws = [985.89, 3, 578, 50, 48.85];

nummsws.pop(); //POP WILL REMOVE FROM THE BACK

console.log(nummsws) //985.89, 3, 578, 50

//Remove from the front

const nummsos = [985.89, 3, 578, 50, 48.85];

nummsos.shift(); //SHIFT WILL REMOVE FROM THE FRONT

console.log(nummsos) //3, 578, 50, 48.85


// Splice() to remove from any number we want counting from 0

const johnDate = [2, 4, 8, 12, 16, 20];

johnDate.splice(1, 3); //2,16,20
johnDate.reverse() // 20,16,20  (It will start from the back)

console.log(johnDate);


// CONCATENATE ARRAYS

const johnNumber = [8, 65, 8451, 63, 33, 6, 58, 32, 48];
const janeNumber = [877, 77, 2, 3, 589, 89, 98];

let res1;

res1 = johnNumber.concat(janeNumber);

console.log(res1); //8, 65, 8451, 63, 33, 6, 58, 32, 48, 877, 77, 2, 3, 589, 89, 98


//SORT WILL ARRANGE FROM A - Z 

const delicacy = ["Meat", "MoinMoin", "Amala", "Friedrice", "Fufu", "Ewedu"];
let deli;

deli = delicacy.sort()
console.log(deli) //["Amala", "Ewedu", "Friedrice", "Fufu", "Meat", "MoinMoin"]
console.log(typeof deli) //Object


// SORT NUMBERS (WE HAVE TO USE THE COMPARE FUNCTIONS IF WE REALLY WANT TO SORT NUMBERS FROM SMALLEST TO THE HIGHEST)

const digits = [54, 6, 33, 788, 7845, 5656, 65, 5, 352, 20, 32, 4];
let digi;

digi = digits.sort(function (x, y) {
    return (
        x - y
    )

});

console.log(digi);


// REVERSE SORT

const nidigit = [54, 6, 33, 788, 7845, 5656, 65, 5, 352, 20, 32, 4];

let nidi;

nidi = nidigit.sort(function (x, y) {
    return y - x
});

console.log(nidi);


// FIND

const nidigits = [54, 6, 33, 788, 7845, 5656, 65, 5, 352, 20, 32, 4];
let nigis;

function under50(num) {
    return num < 50;
}

nigis = nidigits.find(under50);

console.log(nigis);


// OBJECT LITERAL   OBJECT LITERAL   OBJECT LITERAL   OBJECT LITERAL  OBJECT LITERAL   OBJECT LITERAL   OBJECT LITERAL

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 45,
    hobbies: ['Football', 'Reading'],
    email: 'johndoe@outlook.com',
    address: {
        state: 'Neatherland',
        continent: 'Europe'
    },
    getBirthYear: function () {
        return 2020 - this.age //we use this to calculate the year he was born since we already set age to be 45
    }
};

let identity;

identity = person.hobbies; //'Football', 'Reading'
identity = person.address; //{state: "Neatherland", continent: "Europe"}
identity = person.address.state; //Neatherland
identity = person.address.continent //Europe
identity = person.getBirthYear(); //1975

console.log(identity);


// DATES & TIMES  DATES & TIMES DATES & TIMES DATES & TIMESDATES & TIMES DATES & TIMES DATES & TIMES  DATES & TIMES

const today = new Date();
let updateToday;

updateToday = today; //Fri Oct 02 2020 14:42:12 GMT+0100 (West Africa Standard Time)
updateToday = today.getDate(); //2
updateToday = today.getMonth(); //9 instead of 10 because JS is counting from 0

console.log(updateToday);
// console.log(typeof updateToday)


// setting the date
const birthday = new Date('11-10-1993 7:14:00');
let birthdayDate;

birthdayDate = birthday;

console.log(birthdayDate)


// IF STATEMENTS & COMPARISON OPERATOR  IF STATEMENTS & COMPARISON OPERATOR IF STATEMENTS & COMPARISON OPERATOR

const id = 100;

if (id == 100) {
    console.log('CORRECT')
} else {
    console.log('INCORRECT')
};

const ids = 100;

if (ids != 10) {
    console.log('CORRECT')
} else {
    console.log('INCORRECT')
};


// TEST THE VALUE AND TYPE IF CORRECT

const ides = 100;

if (ides === 100) {
    console.log('CORRECT ANSWER');
} else {
    console.log("INCORRECT ANSWER")
};


if (ides !== 100) {
    console.log('CORRECT ANSWER');
} else {
    console.log("INCORRECT ANSWER")
};

const ac = 200;

if (ac) {
    console.log(`THE AC IS ${ac}`)
} else {
    console.log('NO AC')
}

// GRETAER THAN OR LESS THAN

const alpha = 100;
if (alpha < 100) {
    console.log('CORRECT ANSWER');
} else {
    console.log("INCORRECT ANSWER")
};

//INCORRECT

//IF ELSE

const colors = 'Orange';

if (colors === 'Orange') {
    console.log('Color is Orange')
} else if (colors === 'green') {
    console.log('Color is Green')
} else {
    console.log('Color not found')
}


// LOGICAL OPERATOR

// AND which is represented by "&&"

const hisName = 'Kola';
const hisAge = '20';

if (hisAge > 0 && hisAge < 12) {
    console.log(`${hisName} is a child`)
} else if (hisAge >= 12 && hisAge <= 19) {
    console.log(`${hisName} is a teenager`)
} else {
    console.log(`${hisName} is an Adult`)
}

// OR which is represented by "||"

if (hisAge < 18 || hisAge > 50) {
    console.log(`${hisName} is not qualified to run for the race`);
} else {
    console.log(`${hisName} your registration is successful`)
}


// TERNANY OPERATOR
console.log(hisName === 'Kola' ? 'CORRECT' : 'INCORRECT')


// SWITCH

const coloring = 'purple';

switch (coloring) {
    case 'purple':
        console.log('Coloring is Purple');
        break;
    case 'red':
        console.log('Coloring is Red');
        break;
    default:
        console.log('Coloring is not found');
        break;
}

let day;

switch (new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`)


// FUNCTION DECLARATION AND EXPRESSION


function greet(name, surname) {
    return (
        'Hello' + ' ' + name + ' ' + surname
    )
}
console.log(greet('James', 'Doe'));

// OR

function greetings(firstName, lastName) {
    console.log('Hello World' + ' ' + firstName + ' ' + lastName);
}
greetings('John', 'Gbogbo');

// OR

function greets(firstName = 'Jide', lastName = 'Kosoko') {
    console.log('Hello, I am' + ' ' + firstName + ' ' + lastName)

}

greets();



// FUNCTION EXPRESSION

const greetThem = function (x) {
    return x * x
}

console.log(greetThem(8));


// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS

(function (name) {
    console.log('IIFE Ran...' + name);
})('Yemi');


// PROPERTY METHOD

const todo = {
    add: function () {
        console.log('todo add...')
    },
    edit: function (id) {
        console.log(`todo edit${id}`); //Note edit will always take an ID 
    }
}

todo.add(); //todo add...

todo.edit(60) //todo edit60


// LOOP  LOOP  LOOP  LOOP  LOOP  LOOP  LOOP LOOP  LOOP  LOOP  LOOP  LOOP  LOOP  LOOP  LOOP  LOOP  LOOP  LOOP  LOOP LOOP  LOOP  LOOP

// for loop

for (let i = 0; i < 10; i++) {
    if (i === 7) {
        console.log('7 is a Number')
        continue;
    }

    if (i === 8) {
        console.log('Sorry we have to end the loop here');
        break;
    }
    console.log('Number' + i);
}

// While loop

let i = 0;

while (i < 20) {
    console.log('Number' + i);
    i++;
}

// DOM WHILE LOOP

// let b = 0;
// do {
//     console.log('Number' + b);
// }

// while (b < 20);


// LOOP THROUGH AN ARRAY

const cars = ['Honda', 'BMW', 'Benz', 'FORD', 'TOYOTA'];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}


// FOREACH LOOP

const fruits = ['Pawpaw', 'Pineapple', 'Apple', 'Orange', 'Grape']

fruits.forEach(function (fruit) {
    console.log(fruit)
});

// MAP

const users = [{
        id: 1,
        name: 'Fola'
    },
    {
        id: 2,
        name: 'Yetty Mama'
    },
    {
        id: 3,
        name: 'Emiloju'
    },
]

const idss = users.map(function (user) {
    return user.id;

})

console.log(idss)

const arrival = [{
    id: 1,
    name: 'Solape'
}]

const unknown = arrival.map(function (arrivals) {
    return arrivals.name
});

console.log(unknown);


// FOR IN

const details = {
    firstName: 'John',
    lastName: 'Doe',
    age: 44
};

for (let x in details) {
    console.log(`${x} : ${details[x]}`)
}


// WINDOW OBJECT  // WINDOW OBJECT  // WINDOW OBJECT  // WINDOW OBJECT  // WINDOW OBJECT  // WINDOW OBJECT  // WINDOW OBJECT

// Alert


// alert('Hello')

// Prompt

// const input = prompt();

// Confirm

// if (confirm('Are you sure?')) {
//     console.log('YES')

// } else {
//     console.log('NO')
// };

// GET OUTER HEIGHT AND WIDTH OF WINDOW

// Outer Height

let hei;

hei = window.outerHeight;

console.log(hei);

// Outer Width

let wid;

wid = window.outerHeight;

console.log(wid)


// GET INNER HEIGHT AND WIDTH OF WINDOW

// Inner Height

let heii;

heii = window.innerHeight;

console.log(heii);

// Inner Width

let widi;

widi = window.outerHeight;

console.log(widi)


// Scroll point

let scro;

scro = window.screenY;
scro = window.scrollX;

//Location Object;

let loc;

loc = window.location;

console.log(loc);


// Redirect

// window.location.href = "http://google.com";  //IT WILL AUTOMATICAlly reload us to the URL ADDRESS.


// Reload

// window.location.reload();  //IT WILL CONTINUE RELOADING

// NAVIGATOR OBJECT

let vani;

vani = window.navigator;
console.log(vani);


// GLOBAL SCOPE WITH LET & CONST  GLOBAL SCOPE WITH LET & CONST  GLOBAL SCOPE WITH LET & CONST  GLOBAL SCOPE WITH LET & CONST

// GLOBAL SCOPE

var a = 1;
let b = 2;
const c = 3;

console.log('Global scope:', a, b, c);

function testing() {
    var a = 4;
    let b = 6;
    const c = 8;

    console.log('Function scope:', a, b, c);
}

testing();


// Loop Scope

for (let a = 0; a < 10; a++) {
    console.log(`Loop: ${a}`);
}