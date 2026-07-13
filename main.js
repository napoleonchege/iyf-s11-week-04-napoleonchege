// Store personal information in variables
let myName = "John";
let myAge = 22;
let isStudent = true;
let favoriteColors = ["Blue", "Black", "White"];
let today = new Date();

// Display the values in the console
console.log("My name is:", myName);
console.log("I am", myAge, "years old.");
console.log("Am I a student?", isStudent);
console.log("My favorite colors are:", favoriteColors);
console.log("Today's date is:", today);

// Display the data type of each variable
console.log("Data type of myName:", typeof myName);
console.log("Data type of myAge:", typeof myAge);
console.log("Data type of isStudent:", typeof isStudent);


// Declare two numbers for arithmetic operations
let a = 10;
let b = 3;

// Perform basic arithmetic
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// Create strings
let firstName = "John";
let lastName = "Doe";

// Combine strings into one full name
let fullName = firstName + " " + lastName;

// Demonstrate string methods
console.log("Full name:", fullName);
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("First character:", firstName.charAt(0));
console.log("Contains 'John'?", fullName.includes("John"));


// Calculate the area of a rectangle
function calculateArea(width, height) {
    return width * height;
}

// Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// Get the initials from a full name
function getInitials(fullName) {
    return fullName
        .split(" ")
        .map(word => word[0])
        .join("")
        .toUpperCase();
}

// Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Calculate the tip amount
function calculateTip(bill, tipPercent = 15) {
    return bill * tipPercent / 100;
}


// Add two numbers
function add(a, b) {
    return a + b;
}

// Subtract the second number from the first
function subtract(a, b) {
    return a - b;
}

// Multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Divide two numbers and prevent division by zero
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

// Perform the requested calculation based on the operator
function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "%":
            return num1 % num2;
        case "**":
            return num1 ** num2;
        default:
            return "Invalid Operator";
    }
}



// ====================================
// TASK 8.1: ARRAYS
// ====================================

// Create an array of fruits
const fruits = ["Apple", "Banana", "Orange"];

// Create an array of numbers
const numbers = [1, 2, 3, 4, 5, -2, -5, 15];

// Display the arrays
console.log("Fruits:", fruits);
console.log("Numbers:", numbers);

// Access the first fruit
console.log("First fruit:", fruits[0]);

// Display the total number of fruits
console.log("Number of fruits:", fruits.length);

// Add a fruit to the end of the array
fruits.push("Grape");
console.log("After adding Grape:", fruits);

// Add a fruit to the beginning of the array
fruits.unshift("Mango");
console.log("After adding Mango to the beginning:", fruits);

// Remove the last fruit
fruits.pop();
console.log("After removing the last fruit:", fruits);

// Remove the first fruit
fruits.shift();
console.log("After removing the first fruit:", fruits);

// ===============================
// Array Methods
// ===============================

// Double every number in the array
const doubled = numbers.map(number => number * 2);
console.log("Doubled numbers:", doubled);

// Filter out negative numbers
const positiveNumbers = numbers.filter(number => number >= 0);
console.log("Positive numbers:", positiveNumbers);

// Find the first number greater than 10
const firstGreaterThanTen = numbers.find(number => number > 10);
console.log("First number greater than 10:", firstGreaterThanTen);

// Calculate the product of all numbers
const product = numbers.reduce((total, number) => total * number, 1);
console.log("Product of all numbers:", product);

// Check if the array contains the number 3
console.log("Does the array include 3?", numbers.includes(3));

// Display each number multiplied by 2 using forEach
console.log("Numbers multiplied by 2:");

numbers.forEach(number => {
    console.log(number * 2);
});



// ====================================
// TASK 8.2: OBJECTS
// ====================================

// Create an object to store information about a person
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    hobbies: ["Reading", "Coding", "Gaming"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

// Display the entire object
console.log("Person Object:", person);

// Access object properties using dot notation
console.log("First Name:", person.firstName);
console.log("Age:", person.age);

// Access object properties using bracket notation
console.log("Last Name:", person["lastName"]);

// Access a nested object property
console.log("City:", person.address.city);

// Modify an existing property
person.age = 31;
console.log("Updated Age:", person.age);

// Add a new property
person.email = "john@example.com";
console.log("Email Address:", person.email);

// Remove a property
delete person.isStudent;
console.log("Person Object after deleting isStudent:", person);

// ====================================
// OBJECT METHODS
// ====================================

// Create a calculator object with methods
const calculator = {

    // Add two numbers
    add(a, b) {
        return a + b;
    },

    // Subtract two numbers
    subtract(a, b) {
        return a - b;
    },

    // Multiply two numbers
    multiply(a, b) {
        return a * b;
    }
};

// Test the calculator methods
console.log("Addition (10 + 5):", calculator.add(10, 5));
console.log("Subtraction (10 - 5):", calculator.subtract(10, 5));
console.log("Multiplication (10 × 5):", calculator.multiply(10, 5));

// ====================================
// OBJECT ITERATION
// ====================================

// Create an object containing student scores
const scores = {
    Math: 95,
    English: 88,
    Science: 92
};

// Display all keys (subjects)
console.log("Subjects:", Object.keys(scores));

// Display all values (scores)
console.log("Scores:", Object.values(scores));

// Display all key-value pairs
console.log("Subject and Score Entries:", Object.entries(scores));

// Loop through the object entries
console.log("Student Scores:");

for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}


// ====================================
// TASK 8.3: ARRAY OF OBJECTS
// ====================================

// Create an array of student objects
const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// ====================================
// Get all student names
// ====================================

const names = students.map(student => student.name);

console.log("Student Names:", names);

// ====================================
// Get students with grades above 80
// ====================================

const highAchievers = students.filter(student => student.grade > 80);

console.log("Students with grades above 80:", highAchievers);

// ====================================
// Find the student named Charlie
// ====================================

const charlie = students.find(student => student.name === "Charlie");

console.log("Charlie's Record:", charlie);

// ====================================
// Calculate the average grade
// ====================================

const averageGrade =
    students.reduce((total, student) => total + student.grade, 0) / students.length;

console.log("Average Grade:", averageGrade);

// ====================================
// Get Computer Science students only
// ====================================

const csStudents = students.filter(student => student.major === "CS");

console.log("Computer Science Students:", csStudents);

// ====================================
// Sort students by grade (highest first)
// ====================================

const sortedStudents = [...students].sort((a, b) => b.grade - a.grade);

console.log("Students Sorted by Grade:", sortedStudents);

// ====================================
// Check if any student scored above 90
// ====================================

const hasTopStudent = students.some(student => student.grade > 90);

console.log("Is there a student with a grade above 90?", hasTopStudent);

// ====================================
// Check if all students are passing
// ====================================

const allPassing = students.every(student => student.grade >= 60);

console.log("Are all students passing?", allPassing);



// ====================================
// MINI PROJECT: STUDENT GRADE TRACKER
// ====================================

// Create the grade tracker object
const gradeTracker = {
    students: [],

    // Add a new student
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    // Find a student by name
    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },

    // Calculate a student's average grade
    getStudentAverage(name) {
        const student = this.getStudent(name);

        if (!student) {
            return "Student not found";
        }

        const grades = Object.values(student.grades);

        const total = grades.reduce((sum, grade) => sum + grade, 0);

        return (total / grades.length).toFixed(2);
    },

    // Calculate the class average for a subject
    getSubjectAverage(subject) {
        let total = 0;
        let count = 0;

        this.students.forEach(student => {
            if (student.grades[subject] !== undefined) {
                total += student.grades[subject];
                count++;
            }
        });

        return count > 0
            ? (total / count).toFixed(2)
            : "Subject not found";
    },

    // Find the student with the highest average
    getTopStudent() {
        let topStudent = null;
        let highestAverage = 0;

        this.students.forEach(student => {
            const average = Number(this.getStudentAverage(student.name));

            if (average > highestAverage) {
                highestAverage = average;
                topStudent = student;
            }
        });

        return topStudent;
    },

    // Get students whose average is below 70
    getStrugglingStudents() {
        return this.students.filter(student =>
            Number(this.getStudentAverage(student.name)) < 70
        );
    },

    // Convert a score to a letter grade
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },

    // Generate a report card
    generateReportCard(name) {
        const student = this.getStudent(name);

        if (!student) {
            return "Student not found";
        }

        let report = `\n===== Report Card =====\n`;
        report += `Student: ${student.name}\n\n`;

        for (const subject in student.grades) {
            report += `${subject}: ${student.grades[subject]} (${this.getLetterGrade(student.grades[subject])})\n`;
        }

        report += `\nAverage: ${this.getStudentAverage(name)}\n`;

        return report;
    }
};

// ====================================
// Add Sample Students
// ====================================

gradeTracker.addStudent("Alice", {
    math: 95,
    english: 88,
    science: 92
});

gradeTracker.addStudent("Bob", {
    math: 72,
    english: 85,
    science: 78
});

gradeTracker.addStudent("Charlie", {
    math: 60,
    english: 65,
    science: 58
});

// ====================================
// Test the Grade Tracker
// ====================================

// Display all students
console.log("All Students:", gradeTracker.students);

// Display Alice's average
console.log("Alice's Average Grade:", gradeTracker.getStudentAverage("Alice"));

// Display the average Mathematics score
console.log("Mathematics Class Average:", gradeTracker.getSubjectAverage("math"));

// Display the top-performing student
console.log("Top Student:", gradeTracker.getTopStudent());

// Display students who need additional support
console.log("Students Needing Help:", gradeTracker.getStrugglingStudents());

// Display Alice's report card
console.log(gradeTracker.generateReportCard("Alice"));