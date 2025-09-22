// Access HTML elements
const incomeInput = document.getElementById("income");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseTypeSelect = document.getElementById("expense-type");
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const printBtn = document.getElementById("print-btn");
const remainingIncomeEl = document.getElementById("remaining-income");
const totalExpensesEl = document.getElementById("total-expenses");
const expensesListEl = document.getElementById("expenses-list");

// Track total expenses and all expenses
let totalExpenses = 0;
let expenses = [];

// Function to update UI values
// function updateDisplayyy() {
//   remainingIncomeEl.textContent = incomeInput.value;
//   totalExpensesEl.textContent = totalExpenses;
// }
function updateDisplay() {
  remainingIncomeEl.textContent = incomeInput.value;
  totalExpensesEl.textContent = totalExpenses;
}

// Add button click
addBtn.addEventListener("click", () => {
  const income = parseInt(incomeInput.value);
  const expenseAmount = parseInt(expenseAmountInput.value);
  const expenseType = expenseTypeSelect.value;

  if (isNaN(expenseAmount) || expenseAmount <= 0) {
    alert("Please enter a valid expense amount.");
    return;
  }

  if (expenseAmount > income) {
    alert("Expense cannot be greater than income.");
    return;
  }

  // Subtract from income and update total expenses
  incomeInput.value = income - expenseAmount;
  totalExpenses += expenseAmount;

  // Add to expense list
  expenses.push({ type: expenseType, amount: expenseAmount });
  
  // Clear input
  expenseAmountInput.value = "";

  updateDisplay();

  render();
});

// Clear button click
clearBtn.addEventListener("click", () => {
  incomeInput.value = 30000;
  expenseAmountInput.value = "";
  totalExpenses = 0;
  expenses = [];
  expensesListEl.innerHTML = "";
  updateDisplay();
});

// Print button click - show expense list
// printBtn.addEventListener("click", () => {

// });


function render(){
  expensesListEl.innerHTML = "<h4>Expense History:</h4>";
  expenses.forEach((exp, index) => {
    expensesListEl.innerHTML += `<p>${index + 1}. ${exp.type}: Rs. ${exp.amount}</p>`;
  });
}

// Initial update
updateDisplay();


// let type = typeof expenses;
// console.log(type);
/// Question 1 
// const el = document.getElementById("greeting");
// console.log(el.innerHTML);
// el.innerHTML = "Hey!";


// document.getElementById("box").innerHTML;
// document.getElementById("box").innerHTML = "<i>Hi</i>";
// document.getElementById("box").textContent;
// document.getElementById("box").textContent = "<b>Hi</b>";
// document.getElementById("box").textContent; 
// document.getElementById("box").innerText;  // ""
