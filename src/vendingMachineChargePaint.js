const coins = {
    500: 0,
    100: 0,
    50: 0,
    10: 0
};
const COINS_KEY  = "coins";

function moneyChangeToCoin(money){
    coins[500] += money / 500;
    coins[100] += money % 500 / 100;
    coins[50] += money % 500 % 100 / 50;
    coins[10] += money % 500 % 100 % 10 / 10;

    for(const [key, val] of Object.entries(coins)){
        coins[key] = parseInt(val);
    }

    console.log(coins);
}

export default moneyChangeToCoin;