var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

document.getElementById("inpID").addEventListener("change", updateSubtot);




function updateSubtot($product) {
  // Iteration 1.1
  

  let p = Number(document.querySelector(".product .pu span").innerHTML); 
  let q = Number(document.getElementById("inpID").value);           // Works just fine for one


  let subTotal = p * q;

  
  document.querySelector(" .subtot span").innerHTML = subTotal;


  console.log("P is " + p);
  console.log("Q is " + q);

  // return subtotal;

}

function calcAll() {
  // Iteration 1.2
  

}
$calc.onclick = calcAll;