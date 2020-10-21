// var, let and const

// VAR    VAR   VAR   VAR  VAR   VAR   VAR   VAR   VAR   VAR  VAR  VAR  VAR  VAR  VAR  VAR  VAR  VAR

var name = ('John Doe');
console.log(name)

name = 'steve Smith'
console.log(name);


// init var

var greetings;
console.log(greetings)
var greetings = 'Hi!';
console.log(greetings);

// Rules of variables
//  1. Variables can include letters, number, underscroll '_', and $ sign
//  2. Variables cannot start with a number

// Multi-word Variables

var firstName = 'John'; // Camel Case
var first_name = 'John'; // Underscore
var FirstName = 'John'; // Pascal Case: "It can be used when creating ES6 Classes"



// CONST  CONST  CONST  CONST CONST CONST CONST  CONST  CONST CONST  CONST  CONST CONST  CONST CONST  CONST CONST CONST CONST CONST

// It means constant and cannot be changed or re-assigned

const fullName = 'John Doe';
console.log(fullName)

// Rules of Const
//  1. Const cannot be re-assigned
//  2. We have to assign a value to Const

// 3. We can change object in CONST but we cannot re-assign it. Check example below

const person = {
    name: "john",
    age: 30
}

person.name = 'Kolawole'
person.age = 27

console.log(person) //Answer : Kolawole and age will be 27

// WE CAN ALSO DO SAME THING TO ARRAY OF NUMBERS

const figures = [1, 2, 3, 4, 4, 6]

figures.push(7, 8); // Push is used to add to numbers and it will add 7 and 8 to the result

console.log(figures)


// PRIMITIVE DATA TYPES  PRIMITIVE DATA TYPES PRIMITIVE DATA TYPES PRIMITIVE DATA TYPES PRIMITIVE DATA TYPES PRIMITIVE DATA TYPES

// STRING

const names = 'Anonymous'
console.log(typeof names);

// NUMBER

const amount = 45;
console.log(typeof amount);

// BOOLEAN

const hasit = true;
console.log(typeof hasit)

// NULL

const car = null
console.log(typeof car) //it will display object but it is actuall null, it's a type of bug in JavaScript

// UNDEFINED

let motors;
console.log(typeof motors) //Motors isn't defined so it will show undefined

// SYMBOL 

const sys = Symbol();
console.log(sys); //It's part of ES6 Features

// REFERENCE TYPES  REFERENCE TYPES  REFERENCE TYPES  REFERENCE TYPES REFERENCE TYPES REFERENCE TYPES REFERENCE TYPES 


// ARRAY

const unknown = ['food', 'cup', 'fruits', 'cars']
console.log(typeof unknown)

// OBJECT LITERAL

const address = {
    state: 'Lagos',
    country: 'Nigeria'
}
console.log(typeof address)

// DATES

const today = new Date()
console.log(today) //This will show todays date and time
console.log(typeof today) //This will display the type of data type it is


// TYPE OF CONVERSION  TYPE OF CONVERSION TYPE OF CONVERSION TYPE OF CONVERSION  TYPE OF CONVERSION  TYPE OF CONVERSION 

let val;
val = 50; //Let val be equals number of strings

console.log(val); //Answer will be 50
console.log(typeof val); //Answer will be number
console.log(val.length); //It will be undefined because you cannot get the length of a number unless you convert it to a string.

// CONVERT NUMBER TO STRING

let value;
value = String(50);


console.log(value) //Answer will be 50
console.log(typeof value) //Answer will be string 
console.log(value.length) //Answer will be 2 

let another;
another = String(4 + 4)

console.log(another) //Answer will be 8
console.log(typeof another) //Answer will be string 
console.log(another.length) //Answer will be 1 because the answer is 8 which is just a single number



// COVERT BOOLEAN TO STRING

let focus;
focus = String(true);


console.log(focus) //Answer will be true
console.log(typeof focus) //Answer will be string 
console.log(focus.length) //Answer will be 4 



// COVERT DATE TO STRING

let arrival;
arrival = String(new Date());


console.log(arrival) //Answer will be "CURRENT DATE"
console.log(typeof arrival) //Answer will be string 
console.log(arrival.length) //Answer will be 61 



// COVERT ARRAY TO STRING

let result;
result = String([1, 2, 3, 4, 5, 6]);


console.log(result) //Answer will be "1,2,3,4,5,6"
console.log(typeof result) //Answer will be string 
console.log(result.length) //Answer will be 11 because it is also adding the comma(,) sign to it


// TOSTRING()  TOSTRING() TOSTRING() TOSTRING() TOSTRING() TOSTRING() TOSTRING() TOSTRING() TOSTRING()  TOSTRING()
// IT'S EITHER YOU USE THE FIRST ONE OR THIS METHOD

let money
money = (5).toString();

console.log(money) //Answer will be "5"
console.log(typeof money) //Answer will be string 
console.log(money.length) //Answer will be 1 

// CONVERT STRING TO NUMBERS  CONVERT STRING TO NUMBERS  CONVERT STRING TO NUMBERS CONVERT STRING TO NUMBERS

let amounts;
amounts = Number('500');

console.log(amounts); //Answer will be 500
console.log(typeof amounts); //Answer will be number
console.log(amounts.toFixed()); //Answer will be 500 (NOTE: TOFIXED() WIILL ALLOW US SPECIFYBTHE DECIMAL WE WANT)


// BOOLEAN TO NUMBER 

let anon;
anon = Number(true);

console.log(anon); //Answer will 1 because JS sees true as 1 
console.log(typeof anon); //Answer will be Number
console.log(anon.toFixed()); //1

let anons;
anons = Number(false);

console.log(anons); //Answer will 0 because JS sees false as 0 
console.log(typeof anons); //Answer will be Number
console.log(anons.toFixed()); //0

//NULL TO NUMBER

let we;
we = Number(null);

console.log(we); //0
console.log(typeof we); //number
console.log(we.toFixed()); //0


// STRINGS TO NUMBER

let greeting;
greeting = Number('Hello');

console.log(greeting); //NaN which means "NOT A NUMBER"
console.log(typeof greeting); //number
console.log(greeting.toFixed()); //NaN

// PARSEINT METHOD

// Not it will only parse it as an intergar without any decimal point

let par;
par = parseInt("100.56");

console.log(par); // Answer = "100" Not it will only parse it as an intergar without any decimal point
console.log(typeof par); //number
console.log(par.toFixed()); //100



// PARSEFLOAT METHOD

// It will bring the result in decimals 

let flot;
flot = parseFloat('100.56');

console.log(flot);
console.log(typeof flot);
console.log(flot.toFixed());

//Sum

const val2 = 8;
const val3 = 89;
const sum = val2 + val3;

console.log(sum); //97
console.log(typeof sum); //number

// TYPE COERSION

const vall2 = String(8);
const vall3 = 89;
const reply = vall2 + vall3;

console.log(reply); // 889  //JavaScript is seeing it as 889 because the frist 1 is a string so its taking "VALL3" also as a String and concatenate it 
console.log(typeof reply); // String


// BASIC MATHS OBJECT  BASIC MATHS OBJECT  BASIC MATHS OBJECT  BASIC MATHS OBJECT  BASIC MATHS OBJECT BASIC MATHS OBJECT 

// ADDITION

const num1 = 100;
const num2 = 50;
let vas;

vas = num1 + num2;
console.log(vas); //150

//MULTIPLICATION

const num11 = 100;
const num22 = 50;
let vas1;

vas1 = num11 * num22;
console.log(vas1); //5000

// SUBTRACTION

const numms1 = 100;
const numms2 = 50;
let numms;

numms = 100 - 50;
console.log(numms1 - numms2); //50

// DIVISION

const devi1 = 100;
const devi2 = 50;
let devi;

devi = devi1 / devi2;
console.log(devi); //2

// REMAINDER

const remain1 = 100;
const remain2 = 50;
let remain;

remain = remain1 % remain2;
console.log(remain); //0


// MATHS OBJECT  MATHS OBJECT  MATHS OBJECT  MATHS OBJECT  MATHS OBJECT  MATHS OBJECT  MATHS OBJECT  MATHS OBJECT

let mas;
mas = Math.PI; //3.14159625
mas = Math.E; //2.718281
mas = Math.round(2.8); //3 (Math.round is used to round-up/approximate a number)
mas = Math.ceil(2.4); //3 (Math.ceil is also used to round-up a number)
mas = Math.floor(2.8); //2 (Math.floor is used to round down)
mas = Math.sqrt(144); //12 (Math.sqrt is used to find the square root of a number)
mas = Math.abs(-3); //3 (Math.abs is used to find the absolute number of a figure)
mas = Math.pow(12, 2) //144 (Math.pow is used to get the power of something "e.g 12 raise to power 2 is 144")
mas = Math.random() //Answer will be any random number with a decimal
mas = Math.random() * 20 //Answer will be any random decimal number between 0 and 19
mas = Math.random() * 20 + 1 //Answer will be any random decimal number between 0 and 20
mas = Math.floor(Math.random() * 20) //Answer will be any random number from 0 to 19 without decimal because we wrap it with a "Math.floor"


console.log(mas);

// STRING AND CONCATENATION  STRING AND CONCATENATION STRING AND CONCATENATION STRING AND CONCATENATION STRING AND CONCATENATION

const firstName1 = 'Akolawole';
const lastName1 = 'Yekini';
let van;

van = firstName1 + ' ' + lastName1; // using the ( + ' ' + ) will leave a space between the firstName and the lastName
console.log(van); //Akolawole Yekini.

// CONCATENATE A SENTENCE

const firstName22 = 'Akolawole';
const lastName22 = 'Yekini';
const age22 = 85;
let prob;

prob = 'My name is ' + firstName22 + ' ' + 'and i am' + ' ' + age22 + ' ' + 'years old';
console.log(prob)

// ESCAPING

let vans1;

vans1 = 'That\'s a man and he\'s cute'
console.log(vans1); //That's a man and he's cute (It will throw a syntax error if we didint add the backslash '\')

// LENGTH

const first_name1 = "Akolawole";
const last_name2 = "Yekini";
let frm;

frm = first_name1.length;
console.log(frm) //9 (The length of first_name1 is 9);



// CONCAT()

const first_name11 = "Akolawole";
const last_name22 = "Yekini";
let frm11;

frm11 = first_name11.concat(' ', last_name22);
console.log(frm11) //9 (The length of first_name1 is 9);



// CHANGE CASE

// Upper Case

const first = "Akolawole";
let first23;

first23 = first.toUpperCase();
console.log(first23);


// Lower case

const first1 = "Montana";
let firsts1;

firsts1 = first1.toLowerCase();
console.log(firsts1);


// Index of 

const ex = 'adebayo'
let fox;

fox = ex.indexOf('b');
console.log(fox); //3 (couting from 0 indexof b will be 3)


// CharAt()
// Similar to indexOf but using number instead of alphabet

const exes = 'Adebayo';
let foxes;

foxes = exes.charAt('2');
console.log(foxes) // e


// GETTING THE LAST CHARACTER IN A STRING

const prom = 'Adebayo';
let proms;

proms = prom.charAt(prom.length - 1);
console.log(proms) // o



// SUBSTRING()
// substring() will pull out the alphabet or figure in a string

const sdt = 'Adebayo';
let sdts;

sdts = sdt.substring(0, 4);
console.log(sdts); //Adeb



// Slice()
// slice() is similar to substring()

const sli = "Adebayo";
let slics;

slics = sli.slice(0, 4); //Adeb
slics = sli.slice(-3)
console.log(slics);



// SPLIT()
// split() will split a string into an array on a seperator

const str = "Hello there, I am Kola";
let srts;

srts = str.slice(',');
console.log(srts); //Hello there, I am Kola


// REPLACE

const kom = "Hello, I love JavaScript";
let koms;

koms = kom.replace('JavaScript', 'React');
console.log(koms);