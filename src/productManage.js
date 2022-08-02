const productAddForm = document.getElementById("product-add-form");
const productNameInput = productAddForm.querySelector("#product-name-input");
const productPriceInput = productAddForm.querySelector("#product-price-input");
const productQuantityInput = productAddForm.querySelector("#product-quantity-input");
const productStatusList = document.getElementById("product-status-list");

let products = [];
PRODUCTS_KEY = "products";

function saveProduct(){
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
}

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

function isValidProductPrice(prcie){
    if (prcie >= 100 && prcie % 10 == 0) {
        return true;
    }
    alert("상품 가격은 100원부터 시작하며, 10원으로 나누어 떨어져야 한다.");
    return false;
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newProductName = productNameInput.value;
    const newProductPrice = productPriceInput.value;
    const newProductQuantity = productQuantityInput.value;
    
    productNameInput.value = "";
    productPriceInput.value = "";
    productQuantityInput.value = "";

    if (!isValidProductPrice(parseInt(newProductPrice))) return;

    const newProductObj = {
        id: Date.now(),
        name: newProductName,
        price: newProductPrice,
        quantity: newProductQuantity
    }

    products.push(newProductObj);
    paintProduct(newProductObj);
    saveProduct();
}  

productAddForm.addEventListener("submit", handleToDoSubmit);

const savedProducts = localStorage.getItem(PRODUCTS_KEY);
if (savedProducts !== null){
    const parsedProducts = JSON.parse(savedProducts);
    products = parsedProducts;
    products.forEach(paintProduct);
}