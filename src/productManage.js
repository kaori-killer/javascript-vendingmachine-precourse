const productAddForm = document.getElementById("product-add-form");
const productNameInput = productAddForm.querySelector("#product-name-input");
const productPriceInput = productAddForm.querySelector("#product-price-input");
const productQuantityInput = productAddForm.querySelector("#product-quantity-input");

let products = [];

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
    console.log(products);
}  

productAddForm.addEventListener("submit", handleToDoSubmit);