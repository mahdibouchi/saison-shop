let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement('li');
    li.textContent = `${item.product} - ${item.price.toFixed(2)}€`;
    cartItems.appendChild(li);
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = `${total.toFixed(2)}€`;
}

function checkout() {
  alert('Redirection vers PayPal ou une autre passerelle de paiement.');
  // Ici tu peux intégrer PayPal ou Stripe selon tes préférences
}
