const output = document.getElementById('output');
const output2 = document.getElementById('output2');

/* STEP 1a: Create a new object using a regular function */
function createNewPerson(firstName, lastName, age, gender, interests) {
    let obj = {};
    obj.name = {
        "firstName": firstName,
        "lastName": lastName
    };
    obj.age = age;
    obj.gender = gender;
    obj.interests = interests;
    obj.greeting = function () {
        alert(`Hello, this is ${this.name.firstName} ${this.name.lastName}`);
    };
    return obj;
}

/* STEP 1b: Use the console to create a new person, and then invoke the function represented by .greeting() */
let person1 = createNewPerson("P1", "LP1", 10, "Female", ["swimming", "dancing"]);
/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - 
rewrite the above function, without returning anything. Capitalize the name of the function. */
function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        "firstName": firstName,
        "lastName": lastName
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.greeting = function () {
        alert(`Hello, this is ${this.name.firstName} ${this.name.lastName}`);
    };
}

/* STEP 2b: Use the console to create a couple of different people, using the 'new' keyword, 
and again invoking the .greeting() method for each person */
let person2 = new Person("P2", "LP2", 90, "Male", ["dancing", "singing"]);

/* STEP 3a: Build the complete constructor for the object Person (comment out the above function first).
 Include name (first and last), age, gender, interests, bio (function), and greeting (function). */

/* STEP 3b: Instantiate a new Person based on the above constructor */

/* STEP 3c: Attempt to access the various properties of person1 using the console. */
// person1['age']
// person1.interests[1]
// person1.bio()

/* STEP 4a: Alternatively, you can use the Object() constructor to create an object. eg. car*/
let car = new Object();
car.brand = "Honda";
car.model = "Civic";

/* STEP 4b: Once 'car' is created, add various properties and methods… */

/* STEP 4c: Change some of the properties of 'car' in the console, then invoke the car.fun() function */

/* STEP 5a: Yet another approach is to use the create() method. 
Let's see how the above car object can be used to create another object */
let anotherCar = Object.create(car);
console.log(anotherCar.brand);

/* STEP 5b: Output to the paragraph anotherCar.brand - you will see that it has retained the properties of the original object. */

// That's it! Now on to Lab 3...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too

function createHamburger(options) {
    // Default values for the hamburger
    let hamburger = {
        bun: "sesame seed bun",
        garnishes: [],
        cheeses: [],
        sauces: [],
        patties: ["beef"],
        pattyCount: 1,
        toppings: []
    };

    // hamburger options based on the provided object
    if (options) {
        if (options.bun) hamburger.bun = options.bun;
        if (options.garnishes) hamburger.garnishes = options.garnishes;
        if (options.cheeses) hamburger.cheeses = options.cheeses;
        if (options.sauces) hamburger.sauces = options.sauces;
        if (options.patties) hamburger.patties = options.patties;
        if (options.pattyCount) hamburger.pattyCount = options.pattyCount;
        if (options.toppings) hamburger.toppings = options.toppings;
        if (options.drink) hamburger.drink = options.drink;
        if (options.fries !== undefined) hamburger.fries = options.fries;
    }

    // Function to describe the hamburger
    hamburger.describe = function () {
        let description = `This hamburger has a ${hamburger.bun} bun with `;
        description += `${hamburger.pattyCount} ${hamburger.patties.join(", ")} patty(s), `;
        if (hamburger.garnishes.length > 0) {
            description += `garnished with ${hamburger.garnishes.join(", ")}, `;
        }
        if (hamburger.cheeses.length > 0) {
            description += `topped with ${hamburger.cheeses.join(", ")} cheese, `;
        }
        if (hamburger.sauces.length > 0) {
            description += `served with ${hamburger.sauces.join(", ")} sauce, `;
        }
        if (hamburger.toppings.length > 0) {
            description += `and finished with ${hamburger.toppings.join(", ")} toppings. `;
        }
        if (hamburger.drink) {
            description += `It also includes a ${hamburger.drink}. `;
        }
        if (hamburger.fries) {
            description += `Fries are included. `;
        }
        return description;
    };

    return hamburger;
}


let myHamburger = createHamburger({
    bun: "whole grain bun",
    garnishes: ["lettuce", "tomato", "onion"],
    cheeses: ["gudda"],
    sauces: ["BBQ", "Chipotle"],
    patties: ["beef", "chicken"],
    pattyCount: 2,
    toppings: ["pickles", "hot peppers"],
    drink: "soda",
    fries: true
});

console.log(myHamburger.describe());





// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS