const flashcards = [
    { portuguese: "Olá", english: "Hello" },
    { portuguese: "Adeus", english: "Goodbye" },
    { portuguese: "Por favor", english: "Please" },
    { portuguese: "Obrigado", english: "Thank you" },
    { portuguese: "Água", english: "Water" },
    { portuguese: "Comida", english: "Food" },
    { portuguese: "Casa", english: "House" },
    { portuguese: "Carro", english: "Car" },
    { portuguese: "Livro", english: "Book" },
    { portuguese: "Sol", english: "Sun" },
    { portuguese: "Lua", english: "Moon" },
    { portuguese: "Estrela", english: "Star" },
    { portuguese: "Feliz", english: "Happy" },
    { portuguese: "Triste", english: "Sad" },
    { portuguese: "Grande", english: "Big" },
    { portuguese: "Pequeno", english: "Small" },
    { portuguese: "Sim", english: "Yes" },
    { portuguese: "Não", english: "No" }
];

let currentCardIndex = 0;

const flashcardElement = document.getElementById('flashcard');
const flashcardFront = document.getElementById('flashcard-front');
const flashcardBack = document.getElementById('flashcard-back');
const flipButton = document.getElementById('flip-button');
const nextButton = document.getElementById('next-button');

function loadCard() {
    // Garante que o card não esteja virado ao carregar um novo
    flashcardElement.classList.remove('flipped');

    // Se terminamos os flashcards, reiniciamos ou mostramos uma mensagem de fim
    if (currentCardIndex >= flashcards.length) {
        flashcardFront.textContent = "Fim dos cards!";
        flashcardBack.textContent = "Comece de novo!";
        nextButton.textContent = "Reiniciar";
        flipButton.disabled = true;
        return;
    }

    const card = flashcards[currentCardIndex];
    flashcardFront.textContent = card.portuguese;
    flashcardBack.textContent = card.english;
    nextButton.textContent = "Próximo Card"; // Garante o texto padrão
    flipButton.disabled = false; // Habilita o botão de virar
}

function flipCard() {
    flashcardElement.classList.toggle('flipped');
}

function nextCard() {
    currentCardIndex++;
    if (currentCardIndex >= flashcards.length) {
        currentCardIndex = 0; // Reinicia para o começo
        alert("Você revisou todos os cards! Reiniciando...");
    }
    loadCard();
}

// Adiciona os event listeners aos botões
flipButton.addEventListener('click', flipCard);
nextButton.addEventListener('click', nextCard);

// Carrega o primeiro card ao iniciar o jogo
loadCard();