const vendingMachineChargeForm = document.getElementById("vending-machine-charge-form");
const vendingMachineChargeInput = document.getElementById("vending-machine-charge-input");
const vendingMachineChargeAmount = document.getElementById("vending-machine-charge-amount");

let money = 0;
const MONEY_KEY = "money";

function saveMoney(){
    localStorage.setItem(MONEY_KEY, money);
}

function paintMoney(){
    vendingMachineChargeAmount.innerHTML = `보유 금액: ${money}`;
}

function handleMoneySubmit(event){
    event.preventDefault();
    money += parseInt(vendingMachineChargeInput.value);
    paintMoney();
    saveMoney();
}

const savedMoney = localStorage.getItem(MONEY_KEY);
if (savedMoney !== null){
    money = parseInt(savedMoney);
    paintMoney();
} 

vendingMachineChargeForm.addEventListener("submit", handleMoneySubmit);