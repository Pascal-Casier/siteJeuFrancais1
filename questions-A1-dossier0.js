const questions = [
    // Se présenter (4 questions)
    {
        question: "Complétez : ___ m'appelle Sophie.",
        options: ["Je", "Tu", "Il", "Nous"],
        answer: 0,
        explanation: "La formule correcte est 'Je m'appelle...' pour se présenter."
    },
    {
        question: "Quelle réponse est correcte à 'Comment tu t'appelles ?'",
        options: [
            "J'ai 20 ans",
            "Je suis française",
            "Je m'appelle Léa",
            "Je parle anglais"
        ],
        answer: 2,
        explanation: "On répond directement avec son prénom."
    },
    {
        question: "Complétez : ___ suis étudiant.",
        options: ["Je", "Tu", "Il", "Elle"],
        answer: 0,
        explanation: "'Je suis' est la forme correcte pour parler de soi."
    },
    {
        question: "Trouvez l'intrus parmi les présentations :",
        options: [
            "Bonjour, je m'appelle Pierre",
            "Salut, moi c'est Alice",
            "Coucou, je suis Jacques",
            "Bonsoir, j'ai 25 ans"
        ],
        answer: 3,
        explanation: "Donner son âge n'est pas une présentation directe."
    },

    // S'informer sur l'identité (3 questions)
    {
        question: "Quelle question est correcte ?",
        options: [
            "Tu es qui ?",
            "Comment tu t'appelles ?",
            "Tu es comment ?",
            "Tu fais quoi ?"
        ],
        answer: 1,
        explanation: "Forme standard pour demander le nom."
    },
    {
        question: "Répondez à 'Tu es français ?' si vous venez du Portugal :",
        options: [
            "Oui, je suis français",
            "Non, je suis portugais",
            "Je parle français",
            "Je ne sais pas"
        ],
        answer: 1,
        explanation: "Réponse négative avec nationalité correcte."
    },
    {
        question: "Complétez : ___ est-ce que tu viens ?",
        options: ["Où", "Comment", "Quand", "Pourquoi"],
        answer: 0,
        explanation: "'D'où' serait encore mieux mais 'Où' est acceptable."
    },

    // Nombres 0-69 (3 questions)
    {
        question: "Écrivez en lettres : 42",
        options: [
            "Quarante-deux",
            "Quatre-deux",
            "Quarante et deux",
            "Quatre vingt deux"
        ],
        answer: 0,
        explanation: "Forme correcte pour 42."
    },
    {
        question: "Complétez : 50 + 12 = ___",
        options: ["cinquante-deux", "soixante-deux", "cinquante-douze", "soixante et deux"],
        answer: 1,
        explanation: "50 + 12 = 62 (soixante-deux)."
    },
    {
        question: "Trouvez l'erreur :",
        options: [
            "trente",
            "quarante-cinq",
            "seize",
            "dix-six"
        ],
        answer: 3,
        explanation: "16 se dit 'seize'."
    },

    // Communiquer en classe (2 questions)
    {
        question: "Que dit un professeur pour demander le silence ?",
        options: [
            "Écoutez bien !",
            "Taisez-vous !",
            "Regardez moi !",
            "Levez la main !"
        ],
        answer: 1,
        explanation: "Formulation directe pour le silence."
    },
    {
        question: "Comment demander la traduction de 'book' poliment ?",
        options: [
            "Comment dit-on 'book' ?",
            "Je ne comprends pas",
            "C'est quoi 'book' ?",
            "Traduis-moi ça"
        ],
        answer: 0,
        explanation: "Formule standard en classe."
    },

    // Verbes s'appeler/être (2 questions)
    {
        question: "Conjuguez : Vous ___ français ? (être)",
        options: ["es", "est", "êtes", "sommes"],
        answer: 2,
        explanation: "Vous êtes = 2e personne du pluriel."
    },
    {
        question: "Transformez à la forme négative : 'Tu t'appelles Pierre'",
        options: [
            "Tu ne t'appelles Pierre",
            "Tu t'appelles pas Pierre",
            "Tu ne t'appelles pas Pierre",
            "Tu n'appelles pas Pierre"
        ],
        answer: 2,
        explanation: "Négation correcte avec 'ne...pas'."
    },

    // Articles définis (2 questions)
    {
        question: "Complétez : ___ ami Pierre est gentil.",
        options: ["Un", "Le", "La", "Des"],
        answer: 1,
        explanation: "Article défini pour quelqu'un de spécifique."
    },
    {
        question: "Trouvez l'erreur d'article :",
        options: [
            "la table",
            "le chaise",
            "les cahiers",
            "l'ordinateur"
        ],
        answer: 1,
        explanation: "'Chaise' est féminin : 'la chaise'."
    },

    // Genre des pays (1 question)
    {
        question: "Complétez : Je viens ___ France",
        options: ["au", "en", "à la", "aux"],
        answer: 1,
        explanation: "Pays féminin = 'en'."
    },

    // Langues (1 question)
    {
        question: "Complétez : Il parle ___ et ___ (anglais + espagnol)",
        options: [
            "anglais - espagnol",
            "l'anglais - l'espagnol",
            "l'anglais - espagnol",
            "anglais - l'espagnol"
        ],
        answer: 1,
        explanation: "Avec 'parler', on utilise l'article défini pour les langues."
    }
];