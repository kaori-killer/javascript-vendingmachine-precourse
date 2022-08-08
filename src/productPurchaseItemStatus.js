import saveProduct from "./productManage.js";
import {MinusUserMoney, isValidFullMoney} from "./productPurchaseItemInput.js";

const productPurchaseStatusList = document.getElementById("product-purchase-status-list");

function productPurchase(event){
    const tdButton = event.target.parentElement
    const tr = tdButton.parentElement;
    let returnProducts = []

    products.forEach(product => {
        const productQuantity = tr.children[2];
        if(product.id == parseInt(tr.id)){
            if (isValidPurChase(product) && isValidFullMoney(product.price)) {
                product.quantity -= 1;
                MinusUserMoney(product.price);
                productQuantity.innerHTML = product.quantity;
            }
        }
        returnProducts.push(product);
    }); 
    products = returnProducts;   
    saveProduct();
}

function isValidPurChase(product){
    if (product.quantity > 0) return true;
    alert("품절된 상품입니다.");
    return false;    
}

function paintPurchaseProduct(newProduct){
    const tr = document.createElement("tr");
    tr.id = newProduct.id;
    tr.className = "product-purchase-item";

    const tdName = document.createElement("td");
    tdName.className = "product-purchase-name";
    tdName.setAttribute("data-product-name", newProduct.name);
    tdName.innerHTML = newProduct.name;

    const tdPrice = document.createElement("td");
    tdPrice.className = " product-purchase-price";
    tdPrice.setAttribute("data-product-price", newProduct.price);
    tdPrice.innerHTML = newProduct.price;

    const tdQuantity = document.createElement("td");
    tdQuantity.className = "product-purchase-quantity";
    tdPrice.setAttribute("data-product-quantity", newProduct.quantity);
    tdQuantity.innerHTML = newProduct.quantity;

    const tdButton = document.createElement("td");
    const button = document.createElement("button");
    tdButton.className = "purchase-button";
    button.innerHTML = "구매하기";
    tdButton.appendChild(button);
    button.addEventListener("click", productPurchase);

    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    tr.appendChild(tdQuantity);
    tr.appendChild(tdButton);
    productPurchaseStatusList.appendChild(tr);
}

export default paintPurchaseProduct;