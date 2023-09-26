const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
const feedback = document.querySelector("#feedback");

button.addEventListener("click", () => {
  if (input.value) {
    feedback.textContent = '';
    console.log("clicked");
  } else {
    input.focus();

    feedback.textContent = 'Please enter a Book and Chapter.'
  }
});
