/* init variables */
let quantity = 0;

const counter = document.querySelector("span")
/* functions */

function updateQuantityCounter(){
  counter.textContent = quantity;
};

function showQuantity() {
  console.log(`Cart quantity: ${quantity}`);
};

function addQuantity(quantityCount) {
  console.log(`Add ${quantityCount} to cart.`)
  quantity += quantityCount;
  updateQuantityCounter();
  showQuantity();
};

function reset() {
  console.log("Cart was reset.")
  quantity = 0
  updateQuantityCounter();
  showQuantity();
};