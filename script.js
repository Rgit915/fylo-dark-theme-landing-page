document.getElementById("signup-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = document.getElementById("email-input");
  const errorMessage = document.getElementById("error-message");

  if (!emailInput.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    errorMessage.textContent = "Please enter a valid email address.";
    errorMessage.style.display = "block";
    emailInput.classList.add("invalid");
  } else {
    errorMessage.style.display = "none";
    emailInput.classList.remove("invalid");
    this.submit();
  }
});
