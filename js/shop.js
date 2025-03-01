document.addEventListener("DOMContentLoaded", () => {
  console.log("Shop Page Loaded");

  const cart = [];

  document.querySelectorAll(".add-to-cart").forEach((button, index) => {
    button.addEventListener("click", () => {
      const product = button.parentElement;
      const productName = product.querySelector("h3").textContent;
      const productPrice = product.querySelector(".price").textContent;

      const item = { name: productName, price: productPrice };
      cart.push(item);

      alert(`${productName} has been added to your cart!`);
      updateCart();
    });
  });

  function updateCart() {
    console.log("Cart:", cart);
  }
});
