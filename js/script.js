let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let selectedQuizData = osQuizData;
let maxQuestions = 10;

const questionCard = document.getElementById("question-card");
const answersDiv = document.getElementById("answers");
const feedbackDiv = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const counterDiv = document.getElementById("counter");
const controls = document.getElementById("controls");

const questionCountSelect = document.getElementById("question-count");
const quizTypeSelect = document.getElementById("quiz-type");

const quizMenu = document.getElementById("quiz-menu");
const quizContainer = document.getElementById("quiz-container");
const quizCards = document.querySelectorAll(".quiz-card");
const logoLink = document.getElementById("logo-link");
const inQuizItems = document.querySelectorAll(".in-quiz");

function loadQuestion() {
  answered = false;
  feedbackDiv.textContent = "";
  nextBtn.style.display = "none";
  restartBtn.style.display = "none";

  const oldIcon = document.getElementById("result-icon");
  if (oldIcon) oldIcon.remove();

  const currentQ = selectedQuizData[currentQuestionIndex];

  questionCard.textContent = currentQ.question;
  answersDiv.innerHTML = "";

  currentQ.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", () => answerQuestion(index));
    answersDiv.appendChild(btn);
  });

  updateCounter();
}

function answerQuestion(selectedIndex) {
  if (answered) return;
  answered = true;

  const currentQ = selectedQuizData[currentQuestionIndex];
  const buttons = answersDiv.querySelectorAll("button");

  const oldIcon = document.getElementById("result-icon");
  if (oldIcon) oldIcon.remove();

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === currentQ.answer) btn.classList.add("correct");
    if (idx === selectedIndex && idx !== currentQ.answer) btn.classList.add("wrong");
  });

  const img = document.createElement("img");
  img.id = "result-icon";
  img.src = selectedIndex === currentQ.answer ? "images/correct.png" : "images/wrong.png";
  img.alt = selectedIndex === currentQ.answer ? "Correct" : "Wrong";
  img.className = "result-icon";
  controls.appendChild(img);

  if (selectedIndex === currentQ.answer) {
    feedbackDiv.textContent = "Correct!";
    score++;
  } else {
    feedbackDiv.textContent = `Wrong! The correct answer is: ${currentQ.options[currentQ.answer]}`;
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  const oldIcon = document.getElementById("result-icon");
  if (oldIcon) oldIcon.remove();

  if (currentQuestionIndex < maxQuestions - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    showScore();
  }
});

restartBtn.addEventListener("click", () => {
  restartQuiz();
});

questionCountSelect.addEventListener("change", () => {
  const value = questionCountSelect.value;
  maxQuestions = value === "all"
    ? selectedQuizData.length
    : Math.min(parseInt(value), selectedQuizData.length);
  restartQuiz();
});

quizTypeSelect.addEventListener("change", () => {
  selectQuiz(quizTypeSelect.value);
});

quizCards.forEach(card => {
  card.addEventListener("click", () => {
    const quizType = card.dataset.quiz;
    selectQuiz(quizType);
  });
});

logoLink.addEventListener("click", (e) => {
  e.preventDefault();
  showMenu();
});

function selectQuiz(quizType) {
  if (quizType === "gather") {
    selectedQuizData = gatherQuizData;
  } else if (quizType === "client-engagement") {
    selectedQuizData = clientEngagementQuizData;
  } else if (quizType === "hyperv") {
    selectedQuizData = hypervQuizData;
  } else if (quizType === "virtualharddisk") {
    selectedQuizData = virtualharddiskQuizData;
  } else {
    selectedQuizData = osQuizData;
  }

  quizTypeSelect.value = quizType;
  const value = questionCountSelect.value;
  maxQuestions = value === "all"
    ? selectedQuizData.length
    : Math.min(parseInt(value), selectedQuizData.length);

  quizMenu.style.display = "none";
  quizContainer.style.display = "flex";
  inQuizItems.forEach(item => (item.style.display = "inline-block"));

  restartQuiz();
}

function showMenu() {
  quizMenu.style.display = "grid";
  quizContainer.style.display = "none";
  inQuizItems.forEach(item => (item.style.display = "none"));
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  shuffleArray(selectedQuizData);
  loadQuestion();
  feedbackDiv.textContent = "";
  nextBtn.style.display = "none";
  restartBtn.style.display = "none";

  const oldIcon = document.getElementById("result-icon");
  if (oldIcon) oldIcon.remove();

  const progressBar = document.getElementById("progress-bar");
  if (progressBar) progressBar.style.width = "0%";
}

function showScore() {
  questionCard.innerHTML = `
    <div>Your final score is:</div>
    <div style="font-size: 2em; margin-top: 10px; color: #1976d2;">
      ${score} / ${maxQuestions}
    </div>
  `;
  answersDiv.innerHTML = "";
  feedbackDiv.textContent = "";

  const oldIcon = document.getElementById("result-icon");
  if (oldIcon) oldIcon.remove();

  nextBtn.style.display = "none";
  restartBtn.style.display = "inline-block";
  updateCounter(true);
}

function updateCounter(finished = false) {
  if (finished) {
    counterDiv.textContent = "";
  } else {
    counterDiv.textContent = `${currentQuestionIndex + 1} / ${maxQuestions}`;
  }

  const progressBar = document.getElementById("progress-bar");
  if (progressBar) {
    const percent = finished ? 100 : ((currentQuestionIndex + 1) / maxQuestions) * 100;
    progressBar.style.width = `${percent}%`;
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Initialize view
showMenu();
