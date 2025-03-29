// Variables du jeu
let currentQuestion = 0;
let score = 0;
let timeLeft = 20;
let timer;
let gameActive = true;
let shuffledQuestions = [];
let shuffledOptions = [];
let questions = []; // Sera rempli par le fichier chargé

// Musique d'ambiance
const backgroundMusic = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');
let isMusicPlaying = false;

// Charger une musique par défaut (vous pouvez remplacer par votre propre fichier)
backgroundMusic.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
backgroundMusic.volume = 0.3; // Réduire le volume

// Gestionnaire pour le bouton musique
musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        musicToggle.textContent = '🔇';
        musicToggle.classList.add('muted');
    } else {
        backgroundMusic.play();
        musicToggle.textContent = '🔊';
        musicToggle.classList.remove('muted');
    }
    isMusicPlaying = !isMusicPlaying;
});

// Démarrer la musique automatiquement (avec gestion des restrictions navigateur)
document.addEventListener('click', () => {
    if (!isMusicPlaying) {
        backgroundMusic.play()
            .then(() => {
                isMusicPlaying = true;
                musicToggle.textContent = '🔊';
            })
            .catch(e => console.log("La lecture automatique a été bloquée:", e));
    }
}, { once: true });





// Éléments du DOM
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');
const nextButton = document.getElementById('next-btn');
const newGameBtn = document.getElementById('new-game-btn');

// Fonction pour mélanger un tableau (algorithme de Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Charger une question
function loadQuestion() {
    if (currentQuestion >= shuffledQuestions.length) {
        endGame();
        return;
    }

    // Réinitialiser le timer pour chaque nouvelle question
    clearInterval(timer);
    timeLeft = 20;
    timeElement.textContent = timeLeft;
    timeElement.classList.remove('urgent');
    timer = setInterval(updateTimer, 1000);

    const q = shuffledQuestions[currentQuestion];
    questionElement.textContent = q.question;
    
    optionsElement.innerHTML = '';
    shuffledOptions[currentQuestion].forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option.text;
        optionElement.addEventListener('click', () => selectOption(index, option.isCorrect));
        optionsElement.appendChild(optionElement);
    });

    nextButton.style.display = 'none';
}

// Sélectionner une option
function selectOption(index, isCorrect) {
    if (!gameActive) return;

    clearInterval(timer); // Arrêter le timer quand une réponse est sélectionnée

    const options = document.querySelectorAll('.option');
    const currentQ = shuffledQuestions[currentQuestion];
    
    // Désactiver toutes les options
    options.forEach(opt => {
        opt.style.pointerEvents = 'none';
    });

    // Marquer la réponse donnée
    if (isCorrect) {
        options[index].classList.add('correct');
        score++;
        scoreElement.textContent = score;
    } else {
        options[index].classList.add('incorrect');
        // Trouver et marquer la bonne réponse
        const correctIndex = shuffledOptions[currentQuestion].findIndex(opt => opt.isCorrect);
        options[correctIndex].classList.add('correct');
    }

    // Afficher l'explication
    if (currentQ.explanation) {
        const explanation = document.createElement('div');
        explanation.classList.add('explanation');
        explanation.textContent = currentQ.explanation;
        optionsElement.appendChild(explanation);
    }

    nextButton.style.display = 'block';
}

// Préparer une nouvelle partie
function prepareNewGame() {
    // Mélanger les questions
    shuffledQuestions = shuffleArray([...questions]);
    
    // Mélanger les options pour chaque question
    shuffledOptions = shuffledQuestions.map(q => {
        const options = q.options.map((text, i) => ({
            text,
            isCorrect: i === q.answer
        }));
        return shuffleArray(options);
    });

    currentQuestion = 0;
    score = 0;
    timeLeft = 20;
    gameActive = true;
    scoreElement.textContent = score;
    timeElement.textContent = timeLeft;
}

// Mettre à jour le timer (fonction unique maintenant)
function updateTimer() {
    timeLeft--;
    timeElement.textContent = timeLeft;

    // Gérer l'affichage urgent quand il reste peu de temps
    if (timeLeft <= 5) {
        timeElement.classList.add('urgent');
    } else {
        timeElement.classList.remove('urgent');
    }

    if (timeLeft <= 0) {
        clearInterval(timer);
        timeElement.classList.remove('urgent');
        
        const options = document.querySelectorAll('.option');
        options.forEach(opt => {
            opt.style.pointerEvents = 'none';
        });
        
        // Trouver et marquer la bonne réponse
        const correctIndex = shuffledOptions[currentQuestion].findIndex(opt => opt.isCorrect);
        if (options[correctIndex]) {
            options[correctIndex].classList.add('correct');
        }
        
        // Afficher l'explication
        const currentQ = shuffledQuestions[currentQuestion];
        if (currentQ.explanation) {
            const explanation = document.createElement('div');
            explanation.classList.add('explanation');
            explanation.textContent = currentQ.explanation;
            optionsElement.appendChild(explanation);
        }
        
        nextButton.style.display = 'block';
    }
}

// Question suivante
function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

// Fin du jeu
function endGame() {
    clearInterval(timer);
    gameActive = false;
    questionElement.textContent = `Jeu terminé! Votre score final est ${score}/${shuffledQuestions.length}`;
    optionsElement.innerHTML = '';
    nextButton.style.display = 'none';
}

function startGame() {
    // Vérifier qu'on a bien des questions
    if (questions.length === 0) {
        console.error("Aucune question chargée !");
        return;
    }
    
    // Le reste de votre code existant...
    prepareNewGame();
    loadQuestion();
    timer = setInterval(updateTimer, 1000);
}

// Bouton de retour au menu
document.getElementById('backToMenu').addEventListener('click', () => {
    // Sauvegarder la progression si nécessaire
    if (confirm('Voulez-vous vraiment quitter ? Votre progression sera sauvegardée.')) {
        window.location.href = 'index.html';
    }
});


// Événements
nextButton.addEventListener('click', nextQuestion);
newGameBtn.addEventListener('click', startGame);

// Commencer le jeu au chargement de la page
window.onload = startGame;