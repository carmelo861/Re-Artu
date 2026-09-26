// Chiudi il menu a tendina quando si clicca altrove o su un link
  document.addEventListener("click", () => {
    if (dropdownContent.classList.contains("show")) {
      dropdownContent.classList.remove("show");
    }
  });

  // 2. Contatore dei "Mi Piace" con salvataggio in localStorage
  const likeBtn = document.getElementById("likeBtn");
  const likeCountEl = document.getElementById("likeCount");

  // Recupera il punteggio salvato o parte da 0
  let likes = parseInt(localStorage.getItem("arthurLikes")) || 42;
  likeCountEl.textContent = likes;

  likeBtn.addEventListener("click", () => {
    likes++;
    likeCountEl.textContent = likes;
    localStorage.setItem("arthurLikes", likes);

    // Effetto animazione
    likeBtn.style.transform = "scale(1.2)";
    setTimeout(() => {
      likeBtn.style.transform = "scale(1)";
    }, 200);
  });

  // 3. Gestione FAQ Accordion (Apri/Chiudi)
  function initFaqAccordion() {
    const questions = document.querySelectorAll(".faq-question");
    questions.forEach((q) => {
      q.addEventListener("click", () => {
        const item = q.parentElement;
        item.classList.toggle("active");
        
        // Cambia icona + / -
        const icon = q.querySelector("span");
        if(icon) {
          icon.textContent = item.classList.contains("active") ? "−" : "+";
        }
      });
    });
  }
  
  initFaqAccordion();

  // 4. Aggiungi nuove FAQ Interattive
  const submitQuestionBtn = document.getElementById("submitQuestionBtn");
  const userQuestionInput = document.getElementById("userQuestion");
  const faqList = document.getElementById("faqList");

  submitQuestionBtn.addEventListener("click", () => {
    const questionText = userQuestionInput.value.trim();

    if (questionText === "") {
      alert("Per favore, inserisci una domanda prima di inviare!");
      return;
    }

    // Crea un nuovo elemento FAQ
    const newFaqItem = document.createElement("div");
    newFaqItem.classList.add("faq-item");

    newFaqItem.innerHTML = `
      <button class="faq-question">${questionText} <span>+</span></button>
      <div class="faq-answer">
        <p>Grazie per la tua domanda! Il nostro mastro d'arme o Mago Merlino ti risponderanno presto.</p>
      </div>
    `;

    // Aggiungi in cima alla lista FAQ
    faqList.appendChild(newFaqItem);

    // Reset input
    userQuestionInput.value = "";

    // Inizializza l'evento sul nuovo elemento aggiunto
    const newQuestionBtn = newFaqItem.querySelector(".faq-question");
    newQuestionBtn.addEventListener("click", () => {
      newFaqItem.classList.toggle("active");
      const icon = newQuestionBtn.querySelector("span");
      icon.textContent = newFaqItem.classList.contains("active") ? "−" : "+";
    });

    alert("Domanda inviata con successo!");
  });
});
