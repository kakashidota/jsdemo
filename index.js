// String
const exampleString = "Hello World";

// Number
const exampleNumber = 42;

// BigInt
const exampleBigInt = 12345678901234567890n;

// Boolean
const exampleBoolean = true;

// Undefined
let exampleUndefined; // Declared but not defined

// Symbol
const exampleSymbol = Symbol("example");

// Null
const exampleNull = null;


// Initial array of car models
const carModels = ["Toyota Camry", "Honda Accord", "Ford Mustang", "Tesla Model 3", "Chevrolet Camaro"];

// Add a car model to the end of the array
carModels.push("BMW 3 Series");

// Remove the last car model from the array
carModels.pop();

// Remove the first car model from the array
carModels.shift();

// Add a car model at the beginning of the array
carModels.unshift("Audi A4");

// Remove a specific car model by index (e.g., remove the second item)
carModels.splice(1, 1); // This will remove "Honda Accord"


// IF
if (carModels.length > 3) {
    console.log("The array contains more than 10 car models.");
  } else {
    console.log("The array contains 10 or fewer car models.");
  }





// Create an array
let fruits = ["apple", "banana", "orange"];

// Loop through the array using forEach
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// Loop through the array using a for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


fruits.forEach((fruit)=> {
    console.log(fruit)
})

function addNumbers(number1, number2) {
    return number1 + number2;
  }
  
  // Example usage of the function
  const result = addNumbers(5, 10); // result will be 15
  


const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Software Developer",
    greet: function() {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName + "!");
    }
};

// Example of using the greet method
person.greet(); // Outputs: "Hello, my name is John Doe!"

document.body.style.backgroundColor = "yellow"

document.getElementById("header").style.fontFamily = "Arial, sans-serif";


function addButtons(numButtons) {
    const container = document.getElementById("buttonContainer");

    for (let i = 1; i <= numButtons; i++) {
        const button = document.createElement("button");
        button.innerText = "Button " + i;
        container.appendChild(button);
    }
}

addButtons(5); // Adding 5 buttons
