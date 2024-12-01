/* init variables */
const counter = document.querySelector("span")
const options = {
  1: "Rock",
  2: "Paper",
  3: "Scissors"
}
let result;

/* functions */
function chooseOption(optionNumber) {
  randomNumber = Math.ceil(Math.random() * 3);
  const outcome = (optionNumber - randomNumber + 3) % 3;
  if (outcome === 0) {
    result = "Tie";
  } else if (outcome === 1) {
    result = "Winner";
  } else {
    result = "Loser";
  }
  console.log(`You: ${options[optionNumber]} V.S Computer: ${options[randomNumber]}`);
  counter.textContent = result;
};