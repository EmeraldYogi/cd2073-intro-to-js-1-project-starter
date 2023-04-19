/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const products = [  {
  name: "strawberry",
  price: 5.00,
  quantity: 0,
  productId: 8974,
  image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
},  
{    
  name: "orange",
  price: 2.00,
  quantity: 0,
  productId: 4443,
  image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
},
{
  name: "cherry",
  price: 4.00,
  quantity: 0,
  productId: 7365,
  image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
},
{
  name: "banana",
  price: 1.00,
  quantity: 0,
  productId: 7477,
  image: "https://images.unsplash.com/photo-1531326240216-7b04ad593229?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80"
},
{
  name: "tulip bunch",
  price: 10,
  quantity: 0,
  productId: 3561,
  image: "https://images.unsplash.com/photo-1610444028404-09d616461e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
},
{
  name: "shopping bag",
  price: .11,
  quantity: 0,
  productId: 1111,
  image: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
}];
  /* Images provided in /images folder. All images from Unsplash.com
     - cherry.jpg by Mae Mu
     - orange.jpg by Mae Mu
     - strawberry.jpg by Allec Gomes
  */
  
  /* Declare an empty array named cart to hold the items in the cart */
  let cart = []
  
  /* Create a function named addProductToCart that takes in the product productId as an argument
    - addProductToCart should get the correct product based on the productId
    - addProductToCart should then increase the product's quantity
    - if the product is not already in the cart, add it to the cart
  */
  
    function addProductToCart(productId) {
      let product = products.find(element => element.productId === productId);
      // let productIndex = cart.findIndex(item => item.productId === productId);
      product.quantity += 1;
      if (!cart.includes(product)) {
        cart.push(product);
      }
    }
    
  /* Create a function named increaseQuantity that takes in the productId as an argument
    - increaseQuantity should get the correct product based on the productId
    - increaseQuantity should then increase the product's quantity
  */
    function increaseQuantity(productId) {
      let productIndex = cart.findIndex(item => item.productId === productId);
      if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
      }
    }
  /* Create a function named decreaseQuantity that takes in the productId as an argument
    - decreaseQuantity should get the correct product based on the productId
    - decreaseQuantity should decrease the quantity of the product
    - if the function decreases the quantity to 0, the product is removed from the cart
  */
    function decreaseQuantity(productId) {
      let productIndex = cart.findIndex(item => item.productId === productId);
      if (productIndex !== -1) {
        cart[productIndex].quantity -= 1;
        if (cart[productIndex].quantity === 0) {
          cart.splice(productIndex, 1);
        }
      }
    }
  /* Create a function named removeProductFromCart that takes in the productId as an argument
    - removeProductFromCart should get the correct product based on the productId
    - removeProductFromCart should update the product quantity to 0
    - removeProductFromCart should remove the product from the cart
  */
  function removeProductFromCart(productId) {
    let productIndex = cart.findIndex(item => item.productId === productId);
    if (productIndex !== -1) {
      cart[productIndex].quantity = 0;
      if (cart[productIndex].quantity === 0) {
        cart.splice(productIndex, 1);
      }
    }
  }
  /* Create a function named cartTotal that has no parameters
    - cartTotal should iterate through the cart to get the total of all products
    - cartTotal should return the sum of the products in the cart
  */
  function cartTotal() {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
    });
    return Number(total.toFixed(2))
  }
  
  /* Create a function called emptyCart that empties the products from the cart */
  function emptyCart() {
    cart = [];
  }
  /* Create a function named pay that takes in an amount as an argument
    - pay will return a negative number if there is a remaining balance
    - pay will return a positive number if money should be returned to customer
  */
  function pay(cash) {
    let change = (cash - cartTotal()).toFixed(2);
    return Number(change);
  }
  
  
  /* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

  
  /* The following is for running unit tests. 
     To fully complete this project, it is expected that all tests pass.
     Run the following command in terminal to run tests
     npm run test
  */
  
  module.exports = {
    products,
    cart,
    addProductToCart,
    increaseQuantity,
    decreaseQuantity,
    removeProductFromCart,
    cartTotal,
    pay, 
    emptyCart,
    /* Uncomment the following line if completing the currency converter bonus */
    // currency
  }