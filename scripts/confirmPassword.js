const password1 = document.getElementById("password");
const password2 = document.getElementById("confirmed");
const errorMessage = document.getElementById("error-message");

password2.addEventListener("focusout",checkSame);

function checkSame() {
  if (password1.value !== password2.value) {
    errorMessage.textContent = "Passwords do not match.";
    password1.value = "";
    password2.value = "";
    password1.focus();
  } else {
    errorMessage.textContent = "";
  }
};

const ratingInput = document.querySelector('#rating');
const ratingValue = document.querySelector('#ratingValue');

ratingInput.addEventListener("input", () => {
    const currentValue = ratingInput.value;
    ratingValue.textContent = currentValue;
})