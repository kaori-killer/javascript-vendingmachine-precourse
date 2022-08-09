const vendingMachineCoin500Quantity = document.getElementById("vending-machine-coin-500-quantity");
const vendingMachineCoin100Quantity = document.getElementById("vending-machine-coin-100-quantity");
const vendingMachineCoin50Quantity = document.getElementById("vending-machine-coin-50-quantity");
const vendingMachineCoin10Quantity = document.getElementById("vending-machine-coin-10-quantity");

export let vendingMachineCoins = {
    fiveHundredCoin: 0,
    oneHundredCoin: 0,
    fifty: 0,
    ten: 0
};

export const vendingMachineCoinsName = {
    500: "fiveHundredCoin",
    100: "oneHundredCoin",
    50: "fifty",
    10: "ten",
}

const VENDING_MACHINE_COINS_KEY  = "coins";

function saveCoin(){
    localStorage.setItem(VENDING_MACHINE_COINS_KEY, JSON.stringify(vendingMachineCoins));
}

function paintCoin(newCoin){
    vendingMachineCoin500Quantity.innerHTML = `${newCoin.fiveHundredCoin}개`;
    vendingMachineCoin100Quantity.innerHTML = `${newCoin.oneHundredCoin}개`;
    vendingMachineCoin50Quantity.innerHTML = `${newCoin.fifty}개`;
    vendingMachineCoin10Quantity.innerHTML = `${newCoin.ten}개`;
}

function moneyChangeToCoin(newMoney){
    const randomNumber = MissionUtils.Random.pickNumberInList([10, 50, 100, 500]);
    vendingMachineCoins[vendingMachineCoinsName[randomNumber]] += newMoney / randomNumber; // 이해 안되는 부분
    newMoney = newMoney % randomNumber;

    console.log(vendingMachineCoins);
    vendingMachineCoins.fiveHundredCoin += newMoney / 500;
    vendingMachineCoins.oneHundredCoin += newMoney % 500 / 100;
    vendingMachineCoins.fifty += newMoney % 500 % 100 / 50;
    vendingMachineCoins.ten += newMoney % 500 % 100 % 50 / 10;

    for(const [key, val] of Object.entries(vendingMachineCoins)){
        vendingMachineCoins[key] = parseInt(val);
    }

    paintCoin(vendingMachineCoins);
    saveCoin();
}

const vendingMachineSavedCoin = localStorage.getItem(VENDING_MACHINE_COINS_KEY);
if (vendingMachineSavedCoin !== null){
    const vendingMachineParsedCoins = JSON.parse(vendingMachineSavedCoin);
    vendingMachineCoins = vendingMachineParsedCoins;
    paintCoin(vendingMachineCoins);
} 

export default moneyChangeToCoin;