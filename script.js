
let cards = [
    {
        question: "What is HTML?",
        answer: "HTML stands for HyperText Markup Language."
    },
    {
        question: "What is CSS?",
        answer: "CSS stands for Cascading Style Sheets."
    },
    {
        question: "What is JavaScript?",
        answer: "JavaScript is a programming language used for web development."
    },
    {
        question: "What is Python?",
        answer: "Python is a high-level programming language."
    },
    {
        question: "What is a Website?",
        answer: "A website is a collection of web pages."
    }
];

let currentIndex = 0;

function displayCard() {
    if (cards.length === 0) {
        document.getElementById("question").textContent =
            "No Flashcards Available";

        document.getElementById("answer").style.display = "none";
        document.getElementById("counter").textContent = "0 Cards";
        return;
    }

    document.getElementById("question").textContent =
        cards[currentIndex].question;

    document.getElementById("answer").textContent =
        cards[currentIndex].answer;

    document.getElementById("answer").style.display = "none";

    document.getElementById("counter").textContent =
        "Card " + (currentIndex + 1) + " of " + cards.length;
}

function showAnswer() {
    if (cards.length > 0) {
        document.getElementById("answer").style.display = "block";
    }
}

function nextCard() {
    if (cards.length === 0) return;

    currentIndex = (currentIndex + 1) % cards.length;
    displayCard();
}

function previousCard() {
    if (cards.length === 0) return;

    currentIndex =
        (currentIndex - 1 + cards.length) % cards.length;

    displayCard();
}

function addCard() {
    let question = document.getElementById("newQuestion").value.trim();
    let answer = document.getElementById("newAnswer").value.trim();

    if (question === "" || answer === "") {
        alert("Please enter both question and answer!");
        return;
    }

    cards.push({
        question: question,
        answer: answer
    });

    currentIndex = cards.length - 1;

    document.getElementById("newQuestion").value = "";
    document.getElementById("newAnswer").value = "";

    displayCard();
    alert("Flashcard Added Successfully!");
}

function deleteCard() {
    if (cards.length === 0) return;

    if (confirm("Are you sure you want to delete this card?")) {
        cards.splice(currentIndex, 1);

        if (currentIndex >= cards.length) {
            currentIndex = Math.max(0, cards.length - 1);
        }

        displayCard();
    }
}

displayCard();
      
