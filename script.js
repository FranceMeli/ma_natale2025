const riddles = [
  { question: "1) Cosa dobbiamo mettere su una fetta di pane?", answer: "olio", cardType: "evento", cardName: "Villa Gregoriana" },
  { question: "2) La regione di Riace, Tropea e Cosenza?", answer: "calabria", cardType: "evento", cardName: "Abbazia San Fruttuoso" },
  { question: "3) Soprannome del più forte difensore (goleador) di Serie A?", answer: "specchio", cardType: "evento", cardName: "Orto colle dell'infinito" },
  { question: "4) Per Flavio, abbiamo tutta la vita davanti a un?", answer: "bar", cardType: "azione", cardName: "Cambio associazione" },
  { question: "5) Sei quel sassolino, nel cielo infinito, nella notte di?", answer: "natale", cardType: "evento", cardName: "Villa dei Vescovi" },
  { question: "6) Quante gare ha vinto Mads all'ultimo Giro d'Italia?", answer: "4", cardType: "evento", cardName: "Torre Campatelli" },
  { question: "7) Capitale della Repubblica Centrafricana?", answer: "bangui", cardType: "azione", cardName: "Sostituzione" }
];

let current = 0;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const feedbackEl = document.getElementById("feedback");
const cardsGrid = document.getElementById("cardsGrid");
const modal = document.getElementById("modal");
const gameBox = document.getElementById("gameBox");
const startBtn = document.getElementById("startBtn");

/* AVVIO GIOCO */
function startGame() {
  startBtn.style.display = "none";
  gameBox.classList.remove("hidden");
  loadQuestion();
}

/* CARICA DOMANDA */
function loadQuestion() {
  feedbackEl.innerText = "";
  answerEl.value = "";

  if (current < riddles.length) {
    questionEl.innerText = riddles[current].question;
  } else {
    questionEl.innerText = "🎉 Hai completato il gioco! <br>In camerina dentro l\'armadio, trovi un sacchetto con il set del gioco. Senza barare prendi SOLO le carte che hai vinto (colore rosso) e disponi senza guardare le mie carte nell'ordine in cui le trovi. Associa le carte 'evento' alle mie, le carte azioni le puoi usare alla fine per eventuali modifiche. Crea quindi le coppie e fai una foto, poi applica le carte azione. Al termine scrivi tutto nella tabella finale.";
    answerEl.style.display = "none";
  }
}

/* VERIFICA RISPOSTA */
function checkAnswer() {
  const user = answerEl.value.toLowerCase().trim();
  const currentRiddle = riddles[current];

  if (user === currentRiddle.answer) {
    unlockCard(currentRiddle);

    feedbackEl.innerHTML = `✅ Risposta corretta!<br>
      Hai vinto la carta: <strong>${currentRiddle.cardName}</strong>`;
    feedbackEl.style.color = "#8dff8d";

    current++;
    setTimeout(loadQuestion, 2000);
  } else {
    feedbackEl.innerText = "❌ Risposta sbagliata! (Hai perso la carta)";
    feedbackEl.style.color = "#ff8d8d";

    current++;
    setTimeout(loadQuestion, 2000);
  }
}

/* SBLOCCA CARTA */
function unlockCard(card) {
  const div = document.createElement("div");
  div.className = `card ${card.cardType}`;
  div.innerHTML = `<span>${card.cardName}</span>`;
  cardsGrid.appendChild(div);
}

/* MODALE */
function openModal() {
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

/* NEVE */
for (let i = 0; i < 40; i++) {
  const snow = document.createElement("div");
  snow.className = "snowflake";
  snow.innerHTML = "❄️";
  snow.style.left = Math.random() * 100 + "vw";
  snow.style.animationDuration = (5 + Math.random() * 5) + "s";
  snow.style.fontSize = (12 + Math.random() * 18) + "px";
  document.body.appendChild(snow);
}
