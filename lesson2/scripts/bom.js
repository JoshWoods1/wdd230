const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
const feedback = document.querySelector("#feedback");

button.addEventListener("click", () => {
  if (input.value) {
    feedback.textContent = '';
    // console.log("clicked");
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.innerHTML = input.value;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();

    input.focus();
    input.value = '';
    })

  } else {
    input.focus();

    feedback.textContent = 'Please enter a Book and Chapter.'
  }
});
