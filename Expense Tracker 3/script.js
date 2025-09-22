// Access the elements
const incomeInput = document.getElementById("income");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseTypeSelect = document.getElementById("expense-type");
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const totalIncomeEL = document.getElementById("total-income");
const remainingIncomeEL = document.getElementById("remaining-income");
const expenseListEL = document.getElementById("expenses-list");

let totalIncome = parseInt(incomeInput.value);
let remainingIncome = totalIncome;
let allExpenses = [];

function updateDisplay() {
  totalIncomeEL.textContent = "Total Income: " + totalIncome;
  remainingIncomeEL.textContent = "Remaining Income: " + remainingIncome;
}

addBtn.addEventListener("click", () => {
  const expenseAmount = parseInt(expenseAmountInput.value);
  const expenseType = expenseTypeSelect.value;

  if (isNaN(expenseAmount) || expenseAmount <= 0) {
    alert("Amount must be greater than 0");
    return;
  }

  if (expenseType === "select_type") {
    alert("Please select a valid expense type");
    return;
  }

  if (expenseAmount > remainingIncome) {
    alert("Expense cannot be greater than remaining income");
    return;
  }

  // Subtract expense from remaining income
  remainingIncome -= expenseAmount;

  // Store in list
  allExpenses.push({ type: expenseType, amount: expenseAmount });

  // Clear input
  expenseAmountInput.value = "";

  updateDisplay();
  render();
});

clearBtn.addEventListener("click", () => {
  totalIncome = 50000;
  remainingIncome = totalIncome;
  incomeInput.value = totalIncome;
  expenseAmountInput.value = "";
  allExpenses = [];
  expenseListEL.innerHTML = "";
  updateDisplay();
});

function render() {
  expenseListEL.innerHTML = "<h3>Expense History</h3>";
  allExpenses.forEach((exp, index) => {
    expenseListEL.innerHTML += `<p>${index + 1}. ${exp.type}: Rs. ${exp.amount}</p>`;
  });
}

updateDisplay();
