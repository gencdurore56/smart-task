/*
* Filename: ComplexCode.js
* Description: This JavaScript code showcases a complex and elaborate program that handles various tasks and operations.
*/

// Utility functions
function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

// Task management
class Task {
    constructor(description, priority) {
        this.description = description;
        this.priority = priority;
        this.completed = false;
    }

    complete() {
        this.completed = true;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    getTasks() {
        return this.tasks;
    }

    getCompletedTasks() {
        return this.tasks.filter(task => task.completed);
    }
}

// User management
class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
    }
}

// User input handling
function handleUserInput() {
    let name = prompt("Enter your name:");
    let age = parseInt(prompt("Enter your age:"));
    let email = prompt("Enter your email:");

    let user = new User(name, age, email);

    console.log(`Hello, ${user.name}!`);
    console.log(`Your details: ${user.getDetails()}`);
}

// Perform calculations
function performCalculations() {
    let num1 = parseInt(prompt("Enter number 1:"));
    let num2 = parseInt(prompt("Enter number 2:"));

    let sumResult = sum(num1, num2);
    let multiplicationResult = multiply(num1, num2);
    let powerResult = power(num1, num2);

    console.log(`Sum: ${sumResult}`);
    console.log(`Multiplication: ${multiplicationResult}`);
    console.log(`Power: ${powerResult}`);
}

// Main program
function main() {
    console.log("===== Welcome to ComplexCode.js =====");

    let taskManager = new TaskManager();

    // Adding tasks
    taskManager.addTask(new Task("Complete project", "High"));
    taskManager.addTask(new Task("Prepare presentation", "Medium"));
    taskManager.addTask(new Task("Write documentation", "Low"));

    // Complete a task
    taskManager.getTasks()[0].complete();

    // Print completed tasks
    console.log("Completed Tasks:");
    taskManager.getCompletedTasks().forEach(task => console.log(`- ${task.description}`));

    handleUserInput();
    performCalculations();

    console.log("===== End of ComplexCode.js =====");
}

// Initializing the program
main();