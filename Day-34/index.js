const productList = document.getElementById("productList");

const categoryFilter = document.getElementById("categoryFilter");

let products = [];

// Fetch products
async function fetchProducts()
 {
  try {
    // TODO: Fetch data from API
    //https://fakestoreapi.com/products

    const res = await fetch("https://fakestoreapi.com/products");

    // TODO: Convert response to JSON
    products = await res.json();

    // TODO: Call display function
    displayProducts(products);

  } 
  catch (error)
   {
    productList.innerHTML = "Failed to load products";
  }
}

// Display products
function displayProducts(data)
 {
  // TODO: Clear previous data
  
    productList.innerHTML="";

  data.forEach(product =>
     {
    const div = document.createElement("div");

    div.classList.add('product-card');

   
    // TODO: Add inner HTML structure
    div.innerHTML = `
      <img src="${product.image}" alt="pic1">
      <h3>${product.title}</h3>
      <p class="price">₹ ${product.price}</p>
      <p>${product.category}</p>
    `;

    // TODO: Append to productList
        productList.appendChild(div);
  });
}

// Call function
fetchProducts();

// Category filter
categoryFilter.addEventListener("change", () => 
{

  // TODO: Get selected value
  const selected = categoryFilter.value;

  if (selected === "all") 
    {
        displayProducts(products); 
    } 
   else 
    {
        //men's clothing
    const filtered = products.filter(
      a1 => a1.category === selected
    );

     displayProducts(filtered);
 }

});



