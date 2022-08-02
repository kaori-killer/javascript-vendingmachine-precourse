const productAddForm = document.getElementById("product-add-form");
const productNameInput = productAddForm.querySelector("#product-name-input");
const productPriceInput = productAddForm.querySelector("#product-price-input");
const productQuantityInput = productAddForm.querySelector("#product-quantity-input");
const productStatusList = document.getElementById("product-status-list");

let products = [];

function paintProduct(newProduct){
    const tr = document.createElement("tr");
    tr.id = newProduct.id;
    tr.className = "product-manage-item";

    const tdName = document.createElement("td");
    tdName.className = "product-manage-name";
    tdName.innerHTML = newProduct.name;

    const tdPrice = document.createElement("td");
    tdPrice.className = "product-manage-price";
    tdPrice.innerHTML = newProduct.price;

    const tdQuantity = document.createElement("td");
    tdQuantity.className = "product-manage-quantity";
    tdQuantity.innerHTML = newProduct.quantity;

    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    tr.appendChild(tdQuantity);
    productStatusList.appendChild(tr);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newProductName = productNameInput.value;
    const newProductPrice = productPriceInput.value;
    const newProductQuantity = productQuantityInput.value;
    
    productNameInput.value = "";
    productPriceInput.value = "";
    productQuantityInput.value = "";

    const newProductObj = {
        id: Date.now(),
        name: newProductName,
        price: newProductPrice,
        quantity: newProductQuantity
    }

    products.push(newProductObj);
    paintProduct(newProductObj);
}  

productAddForm.addEventListener("submit", handleToDoSubmit);