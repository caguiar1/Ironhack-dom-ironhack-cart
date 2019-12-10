let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');


console.log($cart);


function updateSubtot($product) {
  // Iteration 1.1
  let unitPrice = $product.querySelector(".pu span").innerHTML;
  unitPrice = Number(unitPrice);
  
  let quantity = $product.querySelector(".qty input").value;
  quantity = Number(quantity);
  
  let subtotal = unitPrice * quantity;
  
  let subtotEle = $product.querySelector(".subtot span");
  subtotEle.innerHTML = subtotal;
  
  return subtotal;
}

function calcAll() {
  // Iteration 1.2
  
  let productsCollection = $cart.getElementsByClassName("product");
  let $product;
  let sumSubtotal = 0;

  for (let i = 0; i < productsCollection.length; i++) {
    $product = productsCollection[i];
    sumSubtotal += updateSubtot($product);
  }

  let total = document.querySelector("h2 span");
  total.innerHTML = sumSubtotal;
}



let deleteProductList = $cart.getElementsByClassName("btn btn-delte");

for (let i = 0; i < deleteProductList.length; i++) {
  let deleteList = deleteProductList[i];

  deleteList.addEventListener("click", function(event) {

    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    calcAll()
  });

}



$calc.onclick = calcAll;

