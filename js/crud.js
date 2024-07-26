class Product {
  constructor(_title, _price) {
    this.title = _title;
    this.price = _price;
  }
}

/********** Basic to see if my form is loading
class ProductController{
  createProduct(){
    const form = document.getElementById("postForm");
    if(form){
      alert("form found")
    }
  }
}
document.addEventListener("DOMContentLoaded", ()=> {
 const productController = new ProductController();
 productController.createProduct();

});*/

class ProductController {
  // C
  createProduct(product) {  // the data isnt persist here only It is created in memory.
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // I am consuming 
      body: JSON.stringify({
        title: product.title,
        price: product.price,
      }),
    })
      .then((res) => res.json())
      .then(console.log)
      .catch((error) => console.error("Error:", error)); // if I have an error I wanted to catch the error
  }
  // R
  readProducts() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(`calling read data`, data);
        const producs = document.getElementById("product-list");
        data.products.forEach((product) => {  // inside data I have "product "array" 
          let newElement = document.createElement("tr");
          newElement.innerHTML += `
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>${product.price}</td>
            `;
          producs.appendChild(newElement); // this should be inside the form
        });
      })
      .catch((error) => console.error("Error:", error));
  }

  //U
  updateProduct() {
    /* updating title of product with id 1 */
    fetch('https://dummyjson.com/products/1', {
      method: 'PUT', /* or PATCH */
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'iPhone Galaxy +1'
      })
    })
      .then(res => res.json())
      .then(console.log)
      .catch((error) => console.error("Error:", error));
  }

  //D
  deleteProduct() {
    fetch('https://dummyjson.com/products/1', {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(console.log);
  }
}



// when the view is ready to use by the client
document.addEventListener("DOMContentLoaded", () => {
  const productController = new ProductController();
  productController.readProducts();

  // connect the form to my controller
  const form = document.getElementById("postForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // helps to not refresh the page
    // get the values from the form assign to const title
    const title = document.getElementById("title").value;
    // get the values from the form assign to const price
    const price = document.getElementById("price").value;
    const product = new Product(title, price); // I am passig the value to the constructor
    productController.createProduct(product);
    productController.updateProduct();
    productController.readProducts(); // after I add a value I read the page.
    productController.deleteProduct();
  });
});
