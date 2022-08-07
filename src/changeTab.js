const productAddMenu = document.getElementById("product-add-menu");
const vendingMachineManageMenu = document.getElementById("vending-machine-manage-menu");
const productPurchaseMenu = document.getElementById("product-purchase-menu");

const productAdd = document.getElementById("product-add");
const vendingMachineManage = document.getElementById("vending-machine-manage");
const productPurchase = document.getElementById("product-purchase");

const MenuToTab = {
    "product-add-menu": productAdd,
    "vending-machine-manage-menu": vendingMachineManage,
    "product-purchase-menu": productPurchase
};

const HIDDEN_CLASSNAME = "hidden";

let preTab = productAdd
let nowTab = productAdd

function onChangeTab(event){
    // event.preventDefault();
    preTab.classList.add(HIDDEN_CLASSNAME);
    nowTab = MenuToTab[event.target.id];
    nowTab.classList.remove(HIDDEN_CLASSNAME);       
    preTab = nowTab;
}


productAddMenu.addEventListener("click", onChangeTab);
vendingMachineManageMenu.addEventListener("click", onChangeTab);
productPurchaseMenu.addEventListener("click", onChangeTab);
