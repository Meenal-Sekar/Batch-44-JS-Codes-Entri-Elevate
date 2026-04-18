// Products
const products = [
  { id: 1, name: "Shirt", price: 500, inStock: true },
  { id: 2, name: "Shoes", price: 1000, inStock: false },
  { id: 3, name: "Watch", price: 1500, inStock: true },
  { id: 4, name: "Mobile", price: 15000, inStock: false },
  { id: 5, name: "shampoo", price: 150, inStock: true },
];
//product  total count: 5   avalible products:3 (filter)    to display 3 product(foreach)

//  { id: 1, name: "Shirt", price: 500, inStock: true },{ id: 3, name: "Watch", price: 1500, inStock: true },{ id: 5, name: "soap", price: 150, inStock: false },
let cart = [];

// Display Products (filter + forEach)
function displayProducts() 
{
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  const availableProducts = products.filter(p => p.inStock);

  availableProducts.forEach(product => {
    productList.innerHTML += `
      <div class="card">
        <h3>${product.name}</h3>
        <p>Price: ₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add</button>
      </div>
    `;
  });
}
//id:5   cart=[{shampoo},{mobile}]
function addToCart(id)
{
  const item = products.find(p1 => p1.id === id);
  cart = [...cart, item];
  updateCart();

}

function updateCart() 
{
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  const updatedCart = applyGST(cart);    //{id:5 , name:'shampoo',price: 590, instock:true}

  updatedCart.forEach(item => {

    cartItems.innerHTML += `
      <div class="card">
        ${item.name} -- ₹${item.price}
      </div>
    `;
  });

  const total = calculateTotal(updatedCart);
  document.getElementById("total").innerText = "Total:💵 " + total;

}
//array.reduce(prev,current,initailvalue)

function calculateTotal(items) 
{
  return items.reduce((sum, r1) => sum + r1.price, 0);
}

//cart=[]----->(items)
function applyGST(cart)
{
   return cart.map(c1 => ({
    ...c1,
    price: Math.round(c1.price * 1.18)
  }));

}


// Init
displayProducts();