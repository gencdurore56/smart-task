/*
Filename: sophisticated_code.js
Description: This code demonstrates a complex, professional, and creative implementation using JavaScript.
*/

// Global variable to keep track of the number of clicks
let clickCount = 0;

// Function to handle click event on the button
function handleClick() {
  clickCount++;

  // Display a message based on the number of clicks
  if (clickCount === 1) {
    console.log("You clicked the button once!");
  } else {
    console.log("You clicked the button " + clickCount + " times!");
  }
}

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// An array of objects representing shopping items
const shoppingItems = [
  { id: 1, name: "Apple", price: 0.99 },
  { id: 2, name: "Banana", price: 0.49 },
  { id: 3, name: "Orange", price: 0.79 },
  { id: 4, name: "Grapes", price: 1.99 },
  { id: 5, name: "Mango", price: 2.49 },
];

// Function to calculate the total price of shopping items in the cart
function calculateTotalPrice(cartItems) {
  let totalPrice = 0;

  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];

    // Check if the item exists in the shoppingItems array
    const foundItem = shoppingItems.find((sItem) => sItem.id === item.id);

    if (foundItem) {
      totalPrice += foundItem.price * item.quantity;
    }
  }

  return totalPrice.toFixed(2);
}

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
  }
}

// Creating instances of Person class
const person1 = new Person("John", 25);
const person2 = new Person("Alice", 30);

person1.sayHello();
person2.sayHello();

// A complex and creative algorithm to sort an array of numbers in ascending order
function bubbleSort(array) {
  const len = array.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap elements
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

// Testing the bubble sort algorithm
const numbers = [5, 3, 8, 1, 2];
console.log("Sorted numbers: ", bubbleSort(numbers));

// This code can be extended with more complex functionalities and creativity as required for a specific project.