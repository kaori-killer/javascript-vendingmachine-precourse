const vendingMachineCoin500Quantity = document.getElementById("vending-machine-coin-500-quantity");
const vendingMachineCoin100Quantity = document.getElementById("vending-machine-coin-100-quantity");
const vendingMachineCoin50Quantity = document.getElementById("vending-machine-coin-50-quantity");
const vendingMachineCoin10Quantity = document.getElementById("vending-machine-coin-10-quantity");

let coins = {
    "fiveHundredCoin": 0,
    "oneHundredCoin": 0,
    "fifty": 0,
    "ten": 0
};
const COINS_KEY  = "coins";

function saveCoin(){
    localStorage.setItem(COINS_KEY, JSON.stringify(coins));
}

function paintCoin(newCoin){
    console.log(newCoin);
    vendingMachineCoin500Quantity.innerHTML = `${newCoin.fiveHundredCoin}개`;
    vendingMachineCoin100Quantity.innerHTML = `${newCoin.oneHundredCoin}개`;
    vendingMachineCoin50Quantity.innerHTML = `${newCoin.fifty}개`;
    vendingMachineCoin10Quantity.innerHTML = `${newCoin.ten}개`;
}

function moneyChangeToCoin(newMoney){
    coins["fiveHundredCoin"] += newMoney / 500;
    coins["oneHundredCoin"] += newMoney % 500 / 100;
    coins["fifty"] += newMoney % 500 % 100 / 50;
    coins["ten"] += newMoney % 500 % 100 % 10 / 10;

    for(const [key, val] of Object.entries(coins)){
        coins[key] = parseInt(val);
    }

    paintCoin(coins);
    saveCoin();
}

const savedCoin = localStorage.getItem(COINS_KEY);
if (savedCoin !== null){
    const parsedCoins = JSON.parse(savedCoin);
    coins = parsedCoins;
    paintCoin(coins);
} 

export default moneyChangeToCoin;