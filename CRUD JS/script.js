// Store all tasks in memory
let tasks = [];
let editIndex = null; // This tracks which task is being edited

// DOM Elements
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Function to render all tasks in the UI 
function renderTasks() {
  taskList.innerHTML = ""; // Clear old list

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = task;

    const actions = document.createElement("div");
    actions.className = "actions";

    // Edit button
    const editBtn = document.createElement("i");
    editBtn.className = "fas fa-edit";
    editBtn.title = "Edit";
    editBtn.onclick = () => editTask(index);

    // Delete button
    const deleteBtn = document.createElement("i");
    deleteBtn.className = "fas fa-trash-alt";
    deleteBtn.title = "Delete";
    deleteBtn.onclick = () => deleteTask(index);

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    taskList.appendChild(li);
  });
}

// Add or Update Task
addBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();

  // Validation: prevent empty task
  if (task === "") {
    alert("Task cannot be empty!");
    return;
  }

  if (editIndex === null) {
    // ADD
    tasks.push(task);
  } else {
    // UPDATE
    tasks[editIndex] = task;
    editIndex = null;
    addBtn.textContent = "Add Task"; // Reset button text
  }

  taskInput.value = ""; // Clear input
  renderTasks(); // Refresh task list
});

// Edit Task
function editTask(index) {
  taskInput.value = tasks[index];
  editIndex = index;
  addBtn.textContent = "Update Task";
}

// Delete Task
function deleteTask(index) {
  if (confirm("Are you sure you want to delete this task?")) {
    tasks.splice(index, 1); // Remove from array
    renderTasks(); // Refresh list
  }
}

// Initial Render
renderTasks();













//Types of functions 
// 1- Named Function
// Defining a function
function basicFunc(name) {
  console.log("Hello " + name + " Function");
}
basicFunc("basic");


function basicFunc1(alliabcallback) {
  // console.log("Hello " + name + " Function");

  for (let index = 0; index < 10000; index++) {
    console.log(index);
  }
  alliabcallback('done');

}
basicFunc1(function(params) {
  console.log("me chal chuka ho junaid ne chalaaya", params)
});

// 2. Anonymous function:
// A variable must be assigned to an anonymous function.
let annonyFunc = function (a, b) {
  // console.log(a + b);
  return a + b;
}
console.log(annonyFunc(4, 1));

// 3- Nested Function
//3(a)- The inner function has access to the variables and arguments of the outer function. However, variables 
// declared within inner functions cannot be accessed by outer functions.?????
function outerFunc (firstName, secondName){
  function innerFunc(){
console.log("Hello Outer " + firstName + secondName);
  }
  return innerFunc();
  // innerFunc();
}
outerFunc("Funtion ", "Bro");

// function outer(a, b) {
//     function inner() {
//         return a + b;
//     }
//     console.log(inner());
// }
// outer(2, 3);

//3(b)-Returning an Inner Function (Closure)
function outer(x) {
    return function inner(y) {
        return x + y;
    };
}
// const addFive = outer(5);
// console.log(addFive(3));


outer(5)(3)

//3(c)- Nested Functions with Multiple Arguments
function outerMultArr(x, y) {
    function innerMultArr(a, b) {
        return a * b + x + y;
    }
    return innerMultArr(3, 4);
}

console.log(outerMultArr(2, 5));

//3(d)- Nested Functions for Encapsulation
function counter() {
    let count = 0;
    function increment() {
        count += 1;
        return count;
    }
    return increment;
}

const myCounter = counter();
console.log(myCounter());
console.log(myCounter());

//3(e)- Greeting according to time of day
function greet(name) {
    const hours = new Date().getHours();
    const timeOfDay = hours < 12 ? "Good morning" : hours < 18 ? 
        "Good afternoon" : "Good evening";
    console.log(`${timeOfDay}, ${name}!`);
}

greet("Allyan");

// 4. Immediately invoked function expression:

//Array
let a = [1, 2, 3, 4, 5];
console.log(a);

// accessing the elements in from array through index

console.log(a[1]);
console.log(a[3]);

//Accessing the Last Element of an Array
let EleLenArr = a[a.length - 1];
console.log("This is the last element of array " , EleLenArr);
console.log(a[a.length - 1]);

//Modifying the Array Elements
a [2] = "modify the element by [index value]";
console.log(a);

//Adding Elements to the Array
//using methods like push() and unshift()

// Add Element to the beginning unshift()
a.unshift("add the first element by unshift");
// Add Element to the end push()
a.push("add the last element by push");
console.log(a);

//  Removing Elements from an Array

// methods like pop(), shift(), or splice().

// 1- The pop() method removes an element from the last index of the array.
EleLenArr = a.pop();
console.log(a);
// 2- Removes and returns the first element
EleLenArr = a.shift();
console.log(a);

//3-  Removes 2 elements starting from through index values
a.splice(1,2, 'junaid', 'abc');
console.log(a);


// Array Length 
let arryLength = a.length;
console.log(a);


//JavaScript Array map() Method
let b = [4,9,16,25];
let mapTest = b.map(Math.sqrt);

function mapFunc (){
  return b.map(Math.sqrt);
  // return (mapTest);
}
console.log(mapTest);