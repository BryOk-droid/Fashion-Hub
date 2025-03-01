document.addEventListener("DOMContentLoaded", () => {
  console.log("Contact Page Loaded");

  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields.");
      return;
    }

    alert("Thank you for your message! We will get back to you soon.");
    form.reset();
  });
});
