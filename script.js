// ==========================================
// SCRIPT.JS
// Main Expense Tracker Application
// ==========================================

// Import functions from budget.js
import {
    calculateTotal,
    renderExpenses
} from "./budget.js";


// ==========================================
// EXPENSE DATA
// ==========================================

let expenses = [
    {
        name: "Rent",
        amount: 150,
        category: "Rent"
    },

    {
        name: "Food",
        amount: 85,
        category: "Food"
    },

    {
        name: "Transport",
        amount: 60,
        category: "Transport"
    },

    {
        name: "Internet",
        amount: 120,
        category: "Internet"
    },

    {
        name: "Entertainment",
        amount: 75,
        category: "Entertainment"
    },

    {
        name: "Utilities",
        amount: 155,
        category: "Utilities"
    }
];


// ==========================================
// FORM ELEMENTS
// ==========================================

const nameInput = document.getElementById("expenseName");
const amountInput = document.getElementById("expenseAmount");
const categoryInput = document.getElementById("expenseCategory");
const addExpenseButton = document.getElementById("addExpenseBtn");


// ==========================================
// ADD EXPENSE EVENT
// ==========================================

addExpenseButton.addEventListener("click", function () {

    const name = nameInput.value.trim();
    const amount = Number(amountInput.value);
    const category = categoryInput.value;


    // Validate expense name
    if (name === "") {
        alert("Please enter an expense name.");
        return;
    }


    // Validate expense amount
    if (amount <= 0 || isNaN(amount)) {
        alert("Please enter a valid expense amount.");
        return;
    }


    // Create new expense object
    const newExpense = {
        name: name,
        amount: amount,
        category: category
    };


    // Add expense to array
    expenses.push(newExpense);


    // Re-render the page
    renderExpenses(expenses);


    // Clear form
    nameInput.value = "";
    amountInput.value = "";

    nameInput.focus();

});


// ==========================================
// INITIAL RENDER
// ==========================================

renderExpenses(expenses);