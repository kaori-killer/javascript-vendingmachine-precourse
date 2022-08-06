import moneyChangeToCoin from "./vendingMachineChargePaint.js";

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

function isValidMoney(money){
    if (money % 10 == 0)
        return true;
    alert("충전 금액은 충전 값은 10의 배수만 가능하다.");
    return false;
}

function handleMoneySubmit(event){
    event.preventDefault();
    const newMoney = parseInt(vendingMachineChargeInput.value);
    vendingMachineChargeInput.value = "";
    
    if (!isValidMoney(newMoney)) return;

    money += newMoney;
    paintMoney();
    saveMoney();
    moneyChangeToCoin(newMoney);
}

const savedMoney = localStorage.getItem(MONEY_KEY);
if (savedMoney !== null){
    money = parseInt(savedMoney);
    paintMoney();
    moneyChangeToCoin(money);
} 

vendingMachineChargeForm.addEventListener("submit", handleMoneySubmit);