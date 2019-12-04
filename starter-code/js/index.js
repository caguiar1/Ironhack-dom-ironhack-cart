var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  let p = Number(document.getElementsByClassName("pu"));
  let q = Number(document.getElementsByClassName("qty"));

  let t = document.getElementById("inp").value;

  subtotal = p * q;
  document.getElementsByClassName("subtot").innerHTML = subtotal;

  return subtotal;

}

function calcAll() {
  // Iteration 1.2
  

}
$calc.onclick = calcAll;