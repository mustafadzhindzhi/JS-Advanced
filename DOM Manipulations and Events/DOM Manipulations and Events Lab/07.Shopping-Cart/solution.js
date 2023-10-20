const cart = [];

function addToCart(productName, price) {
   cart.push({ name: productName, price: price });
   const cartTextarea = document.getElementById('cart-textarea');
   cartTextarea.value += `Added ${productName} for $${price.toFixed(2)} to the cart.\n`;
}

function checkout() {
   const uniqueProducts = Array.from(new Set(cart.map(item => item.name)));
   const totalPrice = cart.reduce((total, item) => total + item.price, 0);
   const cartTextarea = document.getElementById('cart-textarea');
   cartTextarea.value += `You bought ${uniqueProducts.join(', ')} for $${totalPrice.toFixed(2)}.\n`;

   const addButtons = document.querySelectorAll('.add-product');
   const checkoutButton = document.querySelector('.checkout');
   addButtons.forEach(button => {
      button.disabled = true;
   });
   checkoutButton.disabled = true;
}

document.addEventListener('DOMContentLoaded', function () {
   const addButtons = document.querySelectorAll('.add-product');
   const checkoutButton = document.querySelector('.checkout');

   addButtons.forEach(button => {
      button.addEventListener('click', function () {
         const productDiv = button.closest('.product');
         const productName = productDiv.querySelector('.product-title').textContent;
         const productPrice = parseFloat(productDiv.querySelector('.product-line-price').textContent);
         addToCart(productName, productPrice);
      });
   });

   checkoutButton.addEventListener('click', function () {
      checkout();
   });
});