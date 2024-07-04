const letterEmoji = document.getElementById("letter");
const letter = "/img/letter_1.png";
const hiddenLetter = document.getElementById("hidden-letter");
const SignLetter = document.getElementById("hidden-signature");

letterEmoji.addEventListener("click", (event) => {
  handleLetterClicked(event);
});
letterEmoji.addEventListener("touchstart", (event) => {
  handleLetterClicked(event);
});

hiddenLetter.addEventListener("click", (event) =>
  handleHiddenLetterClicked(event)
);
hiddenLetter.addEventListener("touchstart", (event) =>
  handleHiddenLetterClicked(event)
);

hiddenLetter.addEventListener("click", (event) =>
  handleHiddenLetterClicked(event)
);
hiddenLetter.addEventListener("touchstart", (event) =>
  handleHiddenLetterClicked(event)
);

function handleLetterClicked(event) {
  event.preventDefault();
  letterEmoji.style.display = "none";
  hiddenLetter.innerHTML = "I miss yall";
 
}

function handleHiddenLetterClicked(event) {
  console.log(event.target);
  hiddenLetter.style.display = "none";
}
