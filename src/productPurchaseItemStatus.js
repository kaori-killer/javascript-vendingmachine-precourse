const productPurchaseStatusList = document.getElementById("product-purchase-status-list");

function paintPurchaseProduct(newProduct){
    const tr = document.createElement("tr");
    tr.id = newProduct.id;
    tr.className = "product-purchase-item";

    const tdName = document.createElement("td");
    tdName.className = "product-purchase-name";
    tdName.innerHTML = newProduct.name;

    const tdPrice = document.createElement("td");
    tdPrice.className = " product-purchase-price";
    tdPrice.innerHTML = newProduct.price;

    const tdQuantity = document.createElement("td");
    tdQuantity.className = "product-purchase-quantity";
    tdQuantity.innerHTML = newProduct.quantity;

    const tdButton = document.createElement("td");
    const button = document.createElement("button");
    tdButton.className = "purchase-button";
    button.innerHTML = "구매하기";
    tdButton.appendChild(button);

    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    tr.appendChild(tdQuantity);
    tr.appendChild(tdButton);
    productPurchaseStatusList.appendChild(tr);
}

export default paintPurchaseProduct;