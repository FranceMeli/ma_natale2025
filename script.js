const riddles = [
  { question: "1) Nell'acronimo FAI, la A sta per?", answer: "ambiente", cardType: "evento", cardName: "Villa Gregoriana" },
  { question: "2) In che regione si trova Mantova?", answer: "lombardia", cardType: "evento", cardName: "Abbazia San Fruttuoso" },
  { question: "3) All'ultimo festival dello sport, quale grande allenatore abbiamo visto all'Auditorium?", answer: "velasco", cardType: "evento", cardName: "Orto colle dell'infinito" },
  { question: "4) Anche per i Pinguini, chi è Star, in un mondo di John e Paul?", answer: "ringo", cardType: "azione", cardName: "Cambio associazione" },
  { question: "5) Il nome dello sceriffo di Stranger Things?", answer: "hopper", cardType: "evento", cardName: "Villa dei Vescovi" },
  { question: "6) La tua pista preferita all'Abetone?", answer: "riva", cardType: "evento", cardName: "Torre Campatelli" },
  { question: "7) Chi ha vinto X-Factor?", answer: "rob", cardType: "azione", cardName: "Sostituzione" }
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
   questionEl.innerHTML = "🎉 Hai completato il gioco! <br>Cerca dentro l'albero e trova un sacchetto con il set del gioco. <br>Utilizza il tabellone, disponi sulla prima riga SOLO le carte che hai vinto (colore arancio) e sulla seconda riga le mie carte verdi nell'ordine in cui le trovi, SENZA guardare. Le carte azione sono quelle arancio-celeste, utilizzabili alla fine. </br></br> Crea le coppie, associando le tue carte alle mie affidandoti alla fortuna. Le carte azione le puoi usare alla fine per eventuali modifiche. Al termine scrivi le coppie ottenute sotto i rispettivi numeri. Alla tua carta corrisponderà un regalo da sfruttare al dovuto momento nel 2026";
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
