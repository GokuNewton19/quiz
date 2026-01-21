let score = 0;
let current = 0;

const questions = [
  { q: "What planet do we live on?", o: ["Mars", "Earth", "Venus", "Jupiter"], a: 1 },
  { q: "What color is the sun?", o: ["Blue", "Red", "Yellow", "Green"], a: 2 },
  { q: "How many days are in a week?", o: ["5", "6", "7", "8"], a: 2 },
  { q: "What is 5 + 5?", o: ["8", "9", "10", "11"], a: 2 },
  { q: "Which animal is the king of the jungle?", o: ["Tiger", "Lion", "Elephant", "Dog"], a: 1 },
];

// AUTO-GENERATE TO 100 QUESTIONS
while (questions.length < 100) {
  questions.push({
    q: `Sample Question ${questions.length + 1}`,
    o: ["Option A", "Option B", "Option C", "Option D"],
    a: Math.floor(Math.random() * 4)
  });
}

const questionEl = document.getElementById("question");
const optionsEl = document.querySelectorAll(".option");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = questions[current];
  questionEl.textContent = q.q;
  optionsEl.forEach((btn, i) => btn.textContent = q.o[i]);
}

function checkAnswer(index) {
  if (index === questions[current].a) {
    score += 10;
    alert("✅ Correct!");
  } else {
    alert("❌ Try again!");
  }
  scoreEl.textContent = score;
}

function nextQuestion() {
  current++;
  if (current >= questions.length) {
    alert("🎉 Quiz Finished! Total Points: " + score);
    current = 0;
    score = 0;
  }
  loadQuestion();
}

loadQuestion();
