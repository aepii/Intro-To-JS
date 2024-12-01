/* variables */
const nameInput = document.querySelector("#name-input");
const textInput = document.querySelector("#text-input");
const displayName = document.querySelector("#display-name");
const displayText = document.querySelector("#display-text");
/* functions */
function submit() {
  displayName.textContent = `Your name is: ${nameInput.value}`;
};

function onKeyDown(event) {
  if (event.key == "Enter") {
    submit();
  };
};

function updateText() {
  displayText.textContent = textInput.value;
};