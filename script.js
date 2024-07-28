const questionelem = document.getElementById("question");
const answerbtn = document.getElementById("answer_button");
const nextbtn = document.getElementById("next_btn");
let currentQuestionIndex = 0;
let Score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  Score = 0;
  nextbtn.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionelem.innerHTML = questionNo + "- " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerbtn.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextbtn.style.display = "none";
  while (answerbtn.firstChild) {
    answerbtn.removeChild(answerbtn.firstChild);
  }
}
function selectAnswer(e) {
  const selectedbtn = e.target;
  const iscorrect = selectedbtn.dataset.correct === "true";
  if (iscorrect) {
    selectedbtn.classList.add("correct");
    Score++;
  } else {
    selectedbtn.classList.add("incorrect");
  }
  Array.from(answerbtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextbtn.style.display = "block";
}

function showScore(){
    resetState(); 
    questionelem.innerHTML = `You scored ${Score} out of ${questions.length}!`;
    nextbtn.innerHTML = "Play Again";
    nextbtn.style.display = "block";

}
function handleNextbtn() {
    currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    
    showQuestion();
  } else {
    showScore();
  }
}
nextbtn.addEventListener("click", ()=>{
  if (currentQuestionIndex < questions.length) {
    handleNextbtn();
  } else {
    startQuiz();
  }
});

startQuiz();
