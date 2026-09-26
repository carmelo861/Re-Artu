// 1. MENU A TENDINA
// Quando clicchi sul pulsante del menu, mostra o nasconde la tendina
const btnMenu = document.getElementById("btnMenu");
const tendina = document.getElementById("tendina");

btnMenu.addEventListener("click", function() {
  tendina.classList.toggle("mostra");
});


// 2. CONTATORE DEI MI PIACE
let conteggio = 0;
const btnLike = document.getElementById("btnLike");
const numeroLike = document.getElementById("numeroLike");

btnLike.addEventListener("click", function() {
  conteggio = conteggio + 1; // Aumenta di 1
  numeroLike.textContent = conteggio; // Aggiorna il numero a schermo
});


// 3. APRI/CHIUDI RISPOSTA FAQ
const domanda = document.querySelector(".domanda");
const risposta = document.querySelector(".risposta");

domanda.addEventListener("click", function() {
  if (risposta.style.display === "block") {
    risposta.style.display = "none"; // Nascondi
  } else {
    risposta.style.display = "block"; // Mostra
  }
});


// 4. INVIA NUOVA DOMANDA NELLA FAQ
const btnInvia = document.getElementById("btnInvia");
const nuovaDomanda = document.getElementById("nuovaDomanda");
const messaggioConferma = document.getElementById("messaggioConferma");

btnInvia.addEventListener("click", function() {
  const testoDomanda = nuovaDomanda.value;

  if (testoDomanda !== "") {
    messaggioConferma.textContent = "Domanda inviata: " + testoDomanda;
    messaggioConferma.style.color = "green";
    nuovaDomanda.value = ""; // Svuota il campo di testo
  } else {
    messaggioConferma.textContent = "Scrivi una domanda prima di inviare!";
    messaggioConferma.style.color = "red";
  }
});