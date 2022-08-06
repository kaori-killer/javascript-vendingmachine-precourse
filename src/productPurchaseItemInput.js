const chargeForm = document.getElementById("charge-form");
const chargeInput = document.getElementById("charge-input");
const chargeAmount = document.getElementById("charge-amount");

let userMoney = 0;
const USER_MONEY_KEY = "userMoney";

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

    userMoney += newUserMoney;
    paintMoney();
    saveMoney();
}

const savedUserMoney = localStorage.getItem(USER_MONEY_KEY);
if(savedUserMoney !== null){
    userMoney = parseInt(savedUserMoney);
    paintMoney();
}
chargeForm.addEventListener("submit", handleMoneySubmit);