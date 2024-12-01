/* init variables */
const resultText = document.querySelector("#result-text");
const scoreText = document.querySelector("#score-text");
const options = {
  1: "Rock",
  2: "Paper",
  3: "Scissors"
};
const score = JSON.parse(localStorage.getItem('score')) || {Wins: 0, Ties: 0, Losses: 0};
let result;

/* functions */
function chooseOption(optionNumber) {
  randomNumber = Math.ceil(Math.random() * 3);
  const outcome = (optionNumber - randomNumber + 3) % 3;
  if (outcome === 0) {
    result = "Tie";
    score['Ties'] += 1;
  } else if (outcome === 1) {
    result = "Winner";
    score['Wins'] += 1;
  } else {
    result = "Loser";
    score['Losses'] += 1;
  }
  resultText.textContent = `${result} | You: ${options[optionNumber]} V.S Computer: ${options[randomNumber]}`;
  updateScore();
};

function resetScore() {
  for (const key in score){
    score[key] = 0;
  };
  updateScore();
};

function updateScore(){
  localStorage.setItem('score', JSON.stringify(score));
  scoreText.textContent = `${score['Wins']}W ${score['Ties']}D ${score['Losses']}L`;
}

updateScore();