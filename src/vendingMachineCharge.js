const vendingMachineChargeForm = document.getElementById("vending-machine-charge-form");
const vendingMachineChargeInput = document.getElementById("vending-machine-charge-input");

let money = 0;

function handleMoneySubmit(event){
    event.preventDefault();
    money += parseInt(vendingMachineChargeInput.value);
}

vendingMachineChargeForm.addEventListener("submit", handleMoneySubmit);