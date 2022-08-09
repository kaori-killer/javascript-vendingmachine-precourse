import isValidMoney from "./vendingMachineChargeInput.js";
import {vendingMachineCoinsName, vendingMachineCoins} from "./vendingMachineChargePaint.js";
import paintCoin from "./returnChargePaint.js";

const chargeForm = document.getElementById("charge-form");
const chargeInput = document.getElementById("charge-input");
const chargeAmount = document.getElementById("charge-amount");

let userMoney = 0;
const USER_MONEY_KEY = "userMoney";

let returnCoins = {
    fiveHundredCoin: 0,
    oneHundredCoin: 0,
    fifty: 0,
    ten: 0
};

function saveMoney(){
    localStorage.setItem(USER_MONEY_KEY, userMoney);
}

function paintMoney(){
    chargeAmount.innerHTML = `투입한 금액: ${userMoney}`;
}

function handleMoneySubmit(event){
    event.preventDefault();
    const newUserMoney = parseInt(chargeInput.value);
    chargeInput.value = "";

    if (!isValidMoney(newUserMoney)) return;

    userMoney += newUserMoney;
    paintMoney();
    saveMoney();
}

export function MinusUserMoney(money){
    userMoney -= money
    saveMoney();
    paintMoney();
}

export function isValidFullMoney(money){
    if(userMoney >= money) return true;
    alert("돈이 부족하다면 상품을 구매할 수 없다.");
    return false;
}

function isValidReturn(){
    const vendingMachineMoneyTotal = 500 * (vendingMachineCoins.fiveHundredCoin) + 100 * (vendingMachineCoins.oneHundredCoin) + 50 * (vendingMachineCoins.fifty) + 10 * (vendingMachineCoins.ten);
    console.log(vendingMachineMoneyTotal);
    if(userMoney <= vendingMachineMoneyTotal) return true;
    else{
        alert("자판기에 돈이 부족합니다.");
        return false;
    }}

export function moneyChangeToCoin(){
    for(const [idx, coin] of [500, 100, 50, 10].entries()){
        let coinCount = vendingMachineCoins[vendingMachineCoinsName[coin]]; 
        if (!isValidReturn()) return;

        while(userMoney){
            if (!coinCount) break;
            coinCount -= 1
            userMoney -= coin;
            returnCoins[vendingMachineCoinsName[coin]] += 1
        }
    }
    paintCoin(returnCoins);
    saveMoney();
    paintMoney();
}

const savedUserMoney = localStorage.getItem(USER_MONEY_KEY);
if(savedUserMoney !== null){
    userMoney = parseInt(savedUserMoney);
    paintMoney();
}
chargeForm.addEventListener("submit", handleMoneySubmit);