// CONSTRUCTOR AND THIS KEY WORD

function Person(name, dob) {
    this.name = name;
    this.birthday = new Date(dob);
    this.calculatedAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);

    };
};

const brad = new Person('John', '09-10-1981');

// console.log(brad.calculatedAge());



// BUILT IN CONSTRUCTOR   BUILT IN CONSTRUCTOR    BUILT IN CONSTRUCTOR   BUILT IN CONSTRUCTOR   BUILT IN CONSTRUCTOR   

// STRINGS

const name1 = 'Jeff';
const name2 = new String('Jeff');

console.log(name1); //A STRING
console.log(name2); //AN OBJECT

if (name1 === 'Jeff') {
    console.log('YES');
} else {
    console.log('NO');
}
//ANSWER IS "YES"




// NUMBERS

const num1 = 5;
const num2 = new Number(5);

console.log(num1); //NUMBER
console.log(num2); //AN OBJECT

// BOOLEAN

const boo1 = true,
    boo2 = new Boolean(true);

console.log(boo1); //BOOLEAN

console.log(boo2); //OBJECT

// FUNCTION

const getSum1 = function (x, y) {
    return x + y;
};

console.log(getSum1(1, 6));

console.log(typeof getSum1); //FUNCTION


const getSum2 = new Function('x', 'y', 'return x + y');

console.log(getSum2(1, 6));

console.log(typeof getSum2); //FUNCTION


// OBJECTS

const john1 = {
    name: "John"
};


const john2 = new Object({
    name: "John"
});

console.log(john1);
console.log(john2);


// ARRAY

const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4, 5);

console.log(typeof arr1);
console.log(typeof arr2);


// PROTOTYPES

// Person constructor

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    this.calculatedAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);

    };
};

const jane = new Person('Jane', 'Godswin', '10/10/1960');
const peter = new Person('Peter', 'Pan', '7/7/1977');

console.log(peter);
console.log(jane);

function Persons(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDay = new Date(dob);
    this.calculatedAge = function () {
        const diff = Date.now() - this.birthDay.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}


const james = new Person('James', 'Doe', '10/11/93');

const florence = new Person('Florence', 'Balogun', '7-8-98');

console.log(florence);


// PROTOTYPE


function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDay = new Date(dob);
};

// GET CALCULATED AGE
Person.prototype.calculatedAge = function () {
    const diff = Date.now() - this.birthDay.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};


// GET FULL NAME

Person.prototype.getFullName = function () {
    return ` ${this.firstName}, ${this.lastName}`
};


// GET MARRIED

Person.prototype.getMarried = function (newLastName) {
    this.lastName = newLastName;
};

const doe = new Person('Doe', 'Doe', 10 / 11 / 1993);

doe.getMarried('Smith');

console.log(doe.calculatedAge());
console.log(doe.getFullName());



// PERSON CONSTRUCTOR  PERSON CONSTRUCTOR  PERSON CONSTRUCTOR  PERSON CONSTRUCTOR  PERSON CONSTRUCTOR  PERSON CONSTRUCTOR

function Persin(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Persin.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}`
}

const george = new Persin('George', 'Smith');

console.log(george.greeting());


// CUSTOMER CONSTRUCTOR

function Customer(firstName, lastName, phone, membership) {
    Persin.call(this, firstName, lastName)

    this.phone = phone;
    this.membership = membership;
}

// Inherit the person prototype method
Customer.prototype = Object.create(Persin.prototype);

// Make customer.prototype return customer ();

Customer.prototype.constructor = Customer

const customer1 = new Customer('Anthony', 'Joshua', '444-555-666-6555', 'Standard');

// Customer Greeting

Customer.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}, Welcome to our Company`
}

console.log(customer1.greeting());





// OBJECT.CREATE  OBJECT.CREATE  OBJECT.CREATE  OBJECT.CREATE  OBJECT.CREATE OBJECT.CREATE OBJECT.CREATE OBJECT.CREATE

const personPrototype = {
    greeting: function () {
        return `Hello there ${this.firstName} ${this.lastName} welcome to our team`
    },

    getsMarried: function (newLastName) {
        this.lastName = newLastName;
    }
};


const ben = Object.create(personPrototype)
ben.firstName = 'Benard';
ben.lastName = 'Toye';
ben.age = 96;

ben.getsMarried('Tobi')

console.log(ben.greeting());


const brads = Object.create(personPrototype, {
    firstName: {
        value: 'Brad'
    },
    lastName: {
        value: 'Traversy'
    },
    age: {
        value: 55
    }
})

console.log(brads);

console.log(brads.greeting());


// ES6 CLASSES ES6 CLASSES  ES6 CLASSES  ES6 CLASSES  ES6 CLASSES  ES6 CLASSES  ES6 CLASSES  ES6 CLASSES ES6 CLASSES ES6 CLASSES

class Persins {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = new Date(dob);
    }

    greeting() {
        return `Hello ${this.firstName} ${this.lastName}`
    }

    calculatedAge() {
        const diff = Date.now() - this.birthDay.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970)

    }

    getMarried(newLastName) {
        this.lastName = newLastName;
    }

    static addNumbers(x, y) {
        return x + y;
    }
}

const jons = new Persins('Jons', 'Jonnah', '11-10-1993');

jons.getMarried('Alabi');

console.log(jons);

console.log(Persins.addNumbers(2, 3));