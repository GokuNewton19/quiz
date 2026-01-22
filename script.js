let score = 0;
let current = 0;

const questions = [
  { q: "What planet do we live on?", o: ["Mars", "Earth", "Venus", "Jupiter"], a: 1 },
{ q: "What color is the sun?", o: ["Blue", "Red", "Yellow", "Green"], a: 2 },
{ q: "How many days are in a week?", o: ["5", "6", "7", "8"], a: 2 },
{ q: "What is 5 + 5?", o: ["8", "9", "10", "11"], a: 2 },
{ q: "Which animal is the king of the jungle?", o: ["Tiger", "Lion", "Elephant", "Dog"], a: 1 },
{ q: "What do humans breathe in to survive?", o: ["Carbon dioxide", "Oxygen", "Smoke", "Nitrogen"], a: 1 },
{ q: "Which body part helps you see?", o: ["Ear", "Eye", "Nose", "Hand"], a: 1 },
{ q: "What is the color of grass?", o: ["Red", "Blue", "Green", "Yellow"], a: 2 },
{ q: "How many hours are in a day?", o: ["12", "18", "24", "36"], a: 2 },
{ q: "Which animal barks?", o: ["Cat", "Cow", "Dog", "Sheep"], a: 2 },
{ q: "What do bees make?", o: ["Milk", "Honey", "Oil", "Bread"], a: 1 },
{ q: "Which shape has three sides?", o: ["Square", "Circle", "Triangle", "Rectangle"], a: 2 },
{ q: "What is the opposite of hot?", o: ["Warm", "Cold", "Dry", "Wet"], a: 1 },
{ q: "Which object gives us light at night?", o: ["Sun", "Moon", "Cloud", "Tree"], a: 1 },
{ q: "What do you use to write on paper?", o: ["Spoon", "Pen", "Plate", "Cup"], a: 1 },
{ q: "Which sense organ helps you hear?", o: ["Eye", "Skin", "Ear", "Nose"], a: 2 },
{ q: "What is water made of?", o: ["Oxygen only", "Hydrogen only", "Hydrogen and Oxygen", "Carbon"], a: 2 },
{ q: "Which vehicle flies in the air?", o: ["Car", "Boat", "Plane", "Train"], a: 2 },
{ q: "What do plants need to grow?", o: ["Plastic", "Sunlight", "Stone", "Metal"], a: 1 },
{ q: "Which number comes after 9?", o: ["8", "9", "10", "11"], a: 2 },
{ q: "What do you call frozen water?", o: ["Steam", "Rain", "Ice", "Cloud"], a: 2 },
{ q: "Which continent is Ghana in?", o: ["Europe", "Asia", "Africa", "Australia"], a: 2 },
{ q: "What do we use to call someone far away?", o: ["Radio", "Television", "Phone", "Fan"], a: 2 },
{ q: "Which food is made from milk?", o: ["Rice", "Cheese", "Bread", "Fish"], a: 1 },
{ q: "What do you wear on your feet?", o: ["Hat", "Gloves", "Shoes", "Shirt"], a: 2 },
{ q: "Which animal can fly?", o: ["Dog", "Bird", "Cow", "Goat"], a: 1 },
{ q: "What is the main source of light on Earth?", o: ["Moon", "Stars", "Sun", "Fire"], a: 2 },
{ q: "What do you use to browse the internet?", o: ["Fridge", "Computer", "Radio", "Fan"], a: 1 },
{ q: "Which color is the sky on a clear day?", o: ["Green", "Blue", "Black", "Red"], a: 1 },
{ q: "What do you call a baby cat?", o: ["Puppy", "Cub", "Kitten", "Calf"], a: 2 },
{ q: "Which object tells time?", o: ["Mirror", "Clock", "Book", "Chair"], a: 1 },
{ q: "How many legs does a human have?", o: ["1", "2", "3", "4"], a: 1 },
{ q: "What do you drink when you are thirsty?", o: ["Sand", "Oil", "Water", "Smoke"], a: 2 },
{ q: "Which tool is used to cut paper?", o: ["Hammer", "Spoon", "Scissors", "Plate"], a: 2 },
{ q: "Which planet is closest to the sun?", o: ["Earth", "Mars", "Mercury", "Venus"], a: 2 },
{ q: "What do we use to travel on water?", o: ["Car", "Bike", "Boat", "Plane"], a: 2 },
{ q: "Which month comes after January?", o: ["March", "April", "February", "May"], a: 2 },
{ q: "What do farmers grow?", o: ["Cars", "Crops", "Phones", "Houses"], a: 1 },
{ q: "Which animal is known for its long neck?", o: ["Elephant", "Giraffe", "Lion", "Zebra"], a: 1 },
{ q: "What is used to clean your teeth?", o: ["Soap", "Sponge", "Toothbrush", "Towel"], a: 2 },
{ q: "Which device shows moving pictures?", o: ["Radio", "Television", "Lamp", "Fan"], a: 1 },
{ q: "What do you use to open a door lock?", o: ["Knife", "Key", "Pen", "Coin"], a: 1 },
{ q: "Which animal lives in water?", o: ["Fish", "Dog", "Cat", "Horse"], a: 0 },
{ q: "What do you use to cook food?", o: ["Bed", "Stove", "Table", "Door"], a: 1 },
{ q: "Which shape is round?", o: ["Square", "Triangle", "Circle", "Rectangle"], a: 2 },
{ q: "What do students use to carry books?", o: ["Basket", "Backpack", "Bucket", "Plate"], a: 1 }
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

