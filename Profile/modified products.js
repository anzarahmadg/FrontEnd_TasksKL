// script.js

// Store the cart items and their prices
let cartItems = [];

// Function to show the modal and display the product information
function showModal(productId) {
  const modal = document.getElementById('modal');
  const productInfo = document.getElementById('product-info');

  // Update the product information based on the productId
  // You can fetch the information from a server or use a predefined list
  switch (productId) {
    case 1:
      productInfo.textContent = 'Product 1: This is a great product.';
      break;
    case 2:
      productInfo.textContent = 'Product 2: Another amazing product.';
      break;
    // Add more cases for other products
  }

  modal.style.display = 'block';
}

// Function to hide the modal
function hideModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Function to add a product to the cart
function addToCart(productName, price) {
  cartItems.push({ productName, price });
  updateCart();
}

// Function to remove a product from the cart
function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCart();
}

// Function to update the cart UI
// Function to update the cart UI
function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsElement.innerHTML = '';
    
    let totalPrice = 0;
  
    cartItems.forEach((item, index) => {
      const li = document.createElement('li');
      li.textContent = `${item.productName} - ₹${item.price}`;
  
      const removeButton = document.createElement('button');
      removeButton.className="btn btn-danger btn-sm"
      removeButton.textContent = 'x';
      removeButton.addEventListener('click', () => removeFromCart(index));
  
      li.appendChild(removeButton);
      cartItemsElement.appendChild(li);
  
      totalPrice += item.price;
    });
  
    totalPriceElement.textContent = `Total Price: ₹${totalPrice}`;
  }
  

// Function to show the payment options
function showPaymentOptions() {
  const paymentOptions = document.getElementById('payment');
  paymentOptions.style.display = 'block';
  const productsofPortal = document.getElementById('divProducts');
  productsofPortal.style.display = 'none';
}

// Function to complete the payment
function completePayment() {
  // Perform the payment processing here
  alert('Payment completed successfully!');
  cartItems = []; // Clear the cart after successful payment
  updateCart(); // Update the cart UI
  const paymentOptions = document.getElementById('payment');
  paymentOptions.style.display = 'none';
  const productsofPortal = document.getElementById('divProducts');
  productsofPortal.style.display = 'block';
}

