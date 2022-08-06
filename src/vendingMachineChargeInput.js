import moneyChangeToCoin from "./vendingMachineChargePaint.js";

const vendingMachineChargeForm = document.getElementById("vending-machine-charge-form");
const vendingMachineChargeInput = document.getElementById("vending-machine-charge-input");
const vendingMachineChargeAmount = document.getElementById("vending-machine-charge-amount");

let vendingMachineMoney = 0;
const VENDINGMACHINE_MONEY_KEY = "vendingMachineMoney";

function saveMoney(){
    localStorage.setItem(VENDINGMACHINE_MONEY_KEY, vendingMachineMoney);
}

function paintMoney(){
    vendingMachineChargeAmount.innerHTML = `보유 금액: ${vendingMachineMoney}`;
}

function isValidMoney(money){
    if (money % 10 == 0)
        return true;
    alert("충전 금액은 충전 값은 10의 배수만 가능하다.");
    return false;
}

function handleMoneySubmit(event){
    event.preventDefault();
    const newVendingMachineMoney = parseInt(vendingMachineChargeInput.value);
    vendingMachineChargeInput.value = "";
    
    if (!isValidMoney(newVendingMachineMoney)) return;

    vendingMachineMoney += newVendingMachineMoney;
    paintMoney();
    saveMoney();

    moneyChangeToCoin(newVendingMachineMoney);
}

const savedvendingMachineMoney = localStorage.getItem(VENDINGMACHINE_MONEY_KEY);
if (savedvendingMachineMoney !== null){
    vendingMachineMoney = parseInt(savedvendingMachineMoney);
    paintMoney();
} 

vendingMachineChargeForm.addEventListener("submit", handleMoneySubmit);

export default isValidMoney;