const balance = document.querySelector("#balance");
const inc_amt = document.querySelector("#inc-amt");
const exp_amt = document.querySelector("#exp-amt");
const trans = document.querySelector("#trans");
const form = document.querySelector("#form");
const description = document.querySelector("#desc");
const amount = document.querySelector("#amount");

const localStorageTrans = JSON.parse(localStorage.getItem("trans"));
let transactions = localStorage.getItem("trans") !== null ? localStorageTrans : [];

function loadTransactionDetails(transaction) {
  const sign = transaction.amount < 0 ? "-" : "+";
  const item = document.createElement("li");
  item.classList.add(transaction.amount < 0 ? "exp" : "inc");
  item.innerHTML = `
    ${transaction.description}
    <span>${sign} ${Math.abs(transaction.amount)}</span>
    <button class="btn-del" onclick="removeTrans(${transaction.id})">x</button>
    <button class="btn-edit" onclick="editTrans(${transaction.id})">Edit</button>
  `;
  trans.appendChild(item);
}

function removeTrans(id) {
  if (confirm("Are you sure you want to delete this transaction?")) {
    transactions = transactions.filter((transaction) => transaction.id != id);
    config();
    updateLocalStorage();
  }
}

function editTrans(id) {
  const transaction = transactions.find((transaction) => transaction.id == id);
  if (!transaction) return;

  const updatedDescription = prompt("Enter a new description:", transaction.description);
  if (updatedDescription === null) return;

  const updatedAmount = parseFloat(prompt("Enter a new amount:", transaction.amount));
  if (isNaN(updatedAmount)) return;

  transaction.description = updatedDescription;
  transaction.amount = updatedAmount;

  config();
  updateLocalStorage();
}

function updateAmount() {
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  balance.innerHTML = `₹ ${total}`;

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  inc_amt.innerHTML = `₹ ${income}`;

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  exp_amt.innerHTML = `₹ ${Math.abs(expense)}`;
}

function config() {
  trans.innerHTML = "";
  transactions.forEach(loadTransactionDetails);
  updateAmount();
}

function addTransaction(e) {
  e.preventDefault();
  if (description.value.trim() == "" || amount.value.trim() == "") {
    alert("Please enter a description and amount.");
  } else {
    const transaction = {
      id: uniqueId(),
      description: description.value,
      amount: +amount.value,
    };
    transactions.push(transaction);
    loadTransactionDetails(transaction);
    description.value = "";
    amount.value = "";
    updateAmount();
    updateLocalStorage();
  }
}

function uniqueId() {
  return Math.floor(Math.random() * 10000000);
}

form.addEventListener("submit", addTransaction);

window.addEventListener("load", function () {
  config();
});

function updateLocalStorage() {
  localStorage.setItem("trans", JSON.stringify(transactions));
}





 /* js for dashboard menu @ azar  */
const dashboardMenu = document.querySelector('.dashboard-menu');
const dashboardContent = document.querySelector('.dashboard-content');

dashboardMenu.addEventListener('click', () => {
  dashboardMenu.classList.toggle('show');
  dashboardContent.classList.toggle('show');
});






/* js for Chat widget @ azar  */

document.addEventListener('DOMContentLoaded', function() {
  const chatWidget = document.querySelector('.chat-widget');
  const chatToggleBtn = chatWidget.querySelector('.chat-toggle-btn');

  chatToggleBtn.addEventListener('click', function() {
    chatWidget.classList.toggle('open');
    
    if (chatWidget.classList.contains('open')) {
      chatToggleBtn.textContent = 'Close';
    } else {
      chatToggleBtn.textContent = 'Open';
    }
  });
});



/*   Dont Touch under constrcution

js for date feature @ azar   
const dateInput = document.getElementById('date-input');
const selectedDate = document.getElementById('selected-date');

dateInput.addEventListener('change', function() {
  const date = dateInput.value;
  selectedDate.textContent = `Selected Date: ${date}`;
});
*/