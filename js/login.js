document.addEventListener("DOMContentLoaded", () => {
  console.log("Login Page Loaded");

  const form = document.getElementById("login-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      alert("Please enter both username and password.");
      return;
    }

    alert(`Welcome, ${username}!`);
    form.reset();
  });
});
