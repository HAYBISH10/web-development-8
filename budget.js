// ==========================================
// BUDGET.JS
// Expense calculation and DOM rendering
// ==========================================


// Calculate total expenses
export function calculateTotal(expenses) {

    let total = 0;

    for (let expense of expenses) {
        total = total + Number(expense.amount);
    }

    // Round total to 2 decimal places
    return Math.round((total + Number.EPSILON) * 100) / 100;
}


// Render expenses to the table
export function renderExpenses(expenses) {

    const tableBody = document.getElementById("expenseTableBody");

    // Clear existing table rows
    tableBody.innerHTML = "";

    // Create a row for every expense
    for (let expense of expenses) {

        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = expense.name;

        const amountCell = document.createElement("td");
        amountCell.textContent =
            "$" + Number(expense.amount).toFixed(2);

        const categoryCell = document.createElement("td");
        categoryCell.textContent = expense.category;

        row.appendChild(nameCell);
        row.appendChild(amountCell);
        row.appendChild(categoryCell);

        tableBody.appendChild(row);
    }

    // Update total
    const totalElement = document.getElementById("totalExpenses");

    totalElement.textContent =
        "$" + calculateTotal(expenses).toFixed(2);
}