const options = document.querySelectorAll(".option");
const messageContainer = document.getElementById("message-container");
const scoreContainer = document.getElementById("score-container");

let score = 0;
let answered = false;

options.forEach(option => {
  option.addEventListener("click", () => {
    if (answered) return;

    if (option.textContent === "Jakarta") {
      option.classList.add("correct");
      messageContainer.textContent = "Jawaban Benar!";
      messageContainer.className = "correct";
      score++;
    } else {
      option.classList.add("incorrect");
      messageContainer.textContent = "Jawaban Salah!";
      messageContainer.className = "incorrect";
    }

    scoreContainer.textContent = `Skor: ${score}`;
    answered = true;

    options.forEach(btn => btn.disabled = true);
  });
});
