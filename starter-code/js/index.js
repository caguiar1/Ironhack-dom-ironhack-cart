let $cart = document.querySelector("#cart tbody");
let $calc = document.getElementById("calc");

console.log($cart);

console.log($calc);

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

$calc.onclick = calcAll;

deleteThing();

function deleteThing(){

let deleteProductList = $cart.getElementsByClassName("btn btn-delete");

for (let i = 0; i < deleteProductList.length; i++) {
  let deleteList = deleteProductList[i];
  deleteList.addEventListener("click", function(element) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    calcAll();
  });
}

}


//  Creation


document.getElementById("create").addEventListener("click", function(){

  let inputName = document.getElementsByClassName("new")[0].getElementsByTagName("input")[0].value;
  let inputPrice = Number(document.getElementsByClassName("new")[0].getElementsByTagName("input")[1].value);
  
  
  document.querySelector('#cart tbody').innerHTML += `<tr class="product">
<td class="name">
  <span>${inputName}</span>
</td>
<td class="pu">
  $<span>${inputPrice}</span>
</td>
<td class="qty">
  <label>
    <input type="number" value="0" min="0">
  </label>
</td>
<td class="subtot">
  $<span>0</span>
</td>
<td class="rm">
  <button class="btn btn-delete">Delete</button>
</td>
</tr>`

deleteThing();
calcAll()
});




  
  
  
  



 
