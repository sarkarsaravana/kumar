// Define product data
const products = [
  {
    name: "Apple",
    price: 1.00,
    image: "apple.jpg"
  },
  {
    name: "Banana",
    price: 0.50,
    image: "banana.jpg"
  },
  // Add more products here
];

// Define cart data
let cart = [];

// Get product list element from HTML
const productList = document.querySelector("main");

// Render product list on page load
function renderProducts() {
  let productHTML = "";
  for (let i = 0; i < products.length; i++) {
    productHTML += `
      <div class="product">
        <img src="${products[i].image}" alt="${products[i].name}">
        <h3>${products[i].name}</h3>
        <p>$${products[i].price.toFixed(2)} per pound</p>
        <button onclick="addToCart(${i})">Add to Cart</button>
      </div>
    `;
  }
  productList.innerHTML = productHTML;
}

// Add product to cart
function addToCart(index) {
  cart.push(products[index]);
  alert("Item added to cart!");
}

// Render cart on page
function renderCart() {
  let cartHTML = "";
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    cartHTML += `
      <div class="cart-item">
        <img src="${cart[i].image}" alt="${cart[i].name}">
        <h4>${cart[i].name}</h4>
        <p>$${cart[i].price.toFixed(2)}</p>
      </div>
    `;
    total += cart[i].price;
  }
  const cartTotal = document.querySelector("#cart-total");
  cartTotal.innerText = `$${total.toFixed(2)}`;
  const cartItems = document.querySelector("#cart-items");
  cartItems.innerHTML = cartHTML;
}

// Listen for add-to-cart clicks and update cart
productList.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    addToCart(event.target.dataset.index);
    renderCart();
  }
});

// Render products on page load
renderProducts();