// Spørsmålene, jeg valgte land som starter enkelt og blir vanskeligere
const questions = [
  {country:"Norge",      code:"no", opts:["Sverige","Danmark","Norge","Finland"]},
  {country:"Frankrike",  code:"fr", opts:["Italia","Frankrike","Nederland","Belgia"]},
  {country:"Japan",      code:"jp", opts:["Kina","Japan","Sør-Korea","Vietnam"]},
  {country:"Brasil",     code:"br", opts:["Argentina","Mexico","Brasil","Colombia"]},
  {country:"Canada",     code:"ca", opts:["USA","Canada","Australia","New Zealand"]},
  {country:"Sør-Afrika", code:"za", opts:["Kenya","Nigeria","Sør-Afrika","Ghana"]},
  {country:"Tyrkia",     code:"tr", opts:["Marokko","Pakistan","Tyrkia","Tunisia"]},
  {country:"Sveits",     code:"ch", opts:["Østerrike","Sveits","Sverige","Danmark"]},
  {country:"Nepal",      code:"np", opts:["Bhutan","Nepal","Tibet","Sri Lanka"]},
  {country:"Maladivene", code:"mv", opts:["Mauritius","Maladivene","Sri Lanka","Komoros"]}
];

// disse variablene holder styr på alt mens quizen kjører
let current = 0; // hvilket spørsmål vi er på
let score = 0;
let answered = false;
let timeLeft = 20;
let timerInterval = null; // trengs for å kunne stoppe timeren senere

// nettsiden har tre skjermer (start, spørsmål, resultat)
// denne funksjonen skjuler alle og viser bare den vi sender inn
function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function startQuiz() {
  current = 0;
  score = 0;
  show('question-screen');
  loadQuestion();
}

// denne funksjonen gjør tre ting: henter flaggbildet, lager svarknappene og starter timeren
function loadQuestion() {
  answered = false;
  const q = questions[current];

  document.getElementById('q-teller').textContent = `${current + 1} / ${questions.length}`;
  document.getElementById('flag-img').src = `https://flagcdn.com/w320/${q.code}.png`; // bruker landkoden til å hente riktig flagg fra flagcdn.com
  document.getElementById('feedback').textContent = '';

  // jeg lager knappene med javascript fordi alternativene er forskjellige for hvert spørsmål
  const ansDiv = document.getElementById('answers');
  ansDiv.innerHTML = '';
  q.opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(opt === q.country);
    ansDiv.appendChild(btn);
  });

  // starter nedtellingen fra 20
  // clearInterval stopper gammel timer så vi ikke får flere timere kjørende samtidig
  clearInterval(timerInterval);
  timeLeft = 20;
  document.getElementById('timer').textContent = timeLeft;

  // setInterval kjører koden inni hvert 1000 millisekund (1 sekund)
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeUp();
    }
  }, 1000);
}

// Sjekker svar
function selectAnswer(isCorrect) {
  if (answered) return; // uten denne kunne man trykke på flere knapper og få poeng flere ganger
  answered = true;
  clearInterval(timerInterval);

  if (isCorrect) {
    document.getElementById('feedback').textContent = 'Riktig!';
    score++;
  } else {
    document.getElementById('feedback').textContent = `Feil! Riktig svar: ${questions[current].country}`;
  }

  setTimeout(() => nextQuestion(), 1500); // venter 1,5 sekunder så man rekker å lese svaret
}

// denne kjører automatisk hvis spilleren ikke svarer innen 20 sekunder
function timeUp() {
  if (answered) return;
  answered = true;
  document.getElementById('feedback').textContent = `Tiden er ute! Riktig svar: ${questions[current].country}`;
  setTimeout(() => nextQuestion(), 1500);
}

// Går videre
function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    showResult(); // alle spørsmål er ferdig
  }
}

// Viser resultat
function showResult() {
  document.getElementById('final-score').textContent = `Du fikk ${score} av ${questions.length} riktige!`;
  show('result-screen');
}

// Starter på nytt
function restartQuiz() {
  startQuiz();
}