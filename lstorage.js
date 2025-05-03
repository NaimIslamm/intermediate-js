// const hello = localStorage.getItem("hello");
// console.log(hello);

const setAge = () => {
  localStorage.setItem("age", 12);
};
const addProducts = () => {
  const product = document.getElementById("product-name").value;
  const quantity = document.getElementById("product-quantity").value;
  document.getElementById("product-name").value = "";
  document.getElementById("product-quantity").value = "";

  displayProducts(product, quantity);
  savedProductsInLocalStorage(product, quantity);
};

const displayProducts = (product, quantity) => {
  const ul = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerHTML = `${product}: ${quantity}`;
  ul.appendChild(li);
};

// tar aage check kore nibo j jeta add korbo local storage a seta aage thekei ase naki browser er local storage a----------
const getStoredShoppingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

// ki ki save krbo product r quantity----parameter a nebo--
const savedProductsInLocalStorage = (product, quantity) => {
  const cart = getStoredShoppingCart();
  cart[product] = quantity;
  const cartStrigyfied = JSON.stringify(cart);
  localStorage.setItem("cart", cartStrigyfied);
};
const displayProductsFromLocalStorage = () => {
  const savedCart = getStoredShoppingCart();
  console.log(savedCart);
  for (const product in savedCart) {
    const quantity = savedCart[product];
    displayProducts(product, quantity);
  }
};

// eta call kore rakhlam karon browser a ei site a dhuklei jano cart a store kora product quantity dekhai----------
displayProductsFromLocalStorage();
