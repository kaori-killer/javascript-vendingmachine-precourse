import {moneyChangeToCoin} from "./productPurchaseItemInput.js";

const coinReturnButton = document.getElementById("coin-return-button");
const coin500Quantity = document.getElementById("coin-500-quantity");
const coin100Quantity = document.getElementById("coin-100-quantity");
const coin50Quantity = document.getElementById("coin-50-quantity");
const coin10Quantity = document.getElementById("coin-10-quantity");

function paintCoin(returnCoins){
    coin500Quantity.innerHTML = `${returnCoins.fiveHundredCoin}개`;
    coin100Quantity.innerHTML = `${returnCoins.oneHundredCoin}개`;
    coin50Quantity.innerHTML = `${returnCoins.fifty}개`;
    coin10Quantity.innerHTML = `${returnCoins.ten}개`;
}

coinReturnButton.addEventListener("click", moneyChangeToCoin);

export default paintCoin;