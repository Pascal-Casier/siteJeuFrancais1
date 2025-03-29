const questions = [
    // Goûts et activités (6 questions)
    {
        question: "Complétez : J'___ beaucoup la musique.",
        options: ["aime", "aimes", "aimer", "aimons"],
        answer: 0,
        explanation: "Verbe 'aimer' au présent, 1ère personne"
    },
    {
        question: "Quelle phrase exprime un goût ?",
        options: [
            "Je fais du tennis",
            "J'adore le chocolat",
            "Je suis professeur",
            "J'ai un frère"
        ],
        answer: 1,
        explanation: "'Adorer' exprime un goût fort"
    },
    {
        question: "Complétez : Je n'___ pas ___ football.",
        options: [
            "aime - le",
            "aime - du",
            "aimes - le",
            "aime - de"
        ],
        answer: 0,
        explanation: "Aimer + article défini pour les activités"
    },
    {
        question: "Transformez : 'J'aime bien le cinéma' (forme négative)",
        options: [
            "Je n'aime pas bien le cinéma",
            "Je ne aime pas le cinéma",
            "Je n'aime pas du cinéma",
            "Je ne aime pas de cinéma"
        ],
        answer: 0,
        explanation: "Négation standard avec 'bien' conservé"
    },
    {
        question: "Associez : 'J\'aime ___ la natation ___ la danse.'",
        options: [
            "et - et",
            "mais - et",
            "ni - ni",
            "ou - ou"
        ],
        answer: 3,
        explanation: "'Ou' pour exprimer des alternatives"
    },
    {
        question: "Répondez : 'Tu aimes voyager ?' (réponse négative)",
        options: [
            "Oui, beaucoup",
            "Non, pas du tout",
            "Je voyage souvent",
            "C'est intéressant"
        ],
        answer: 1,
        explanation: "Formule négative standard"
    },

    // Profession (4 questions)
    {
        question: "Complétez : Je ___ infirmière.",
        options: ["fait", "suis", "ai", "va"],
        answer: 1,
        explanation: "Profession = verbe 'être'"
    },
    {
        question: "Quelle question est correcte ?",
        options: [
            "Quel est ton travail ?",
            "Qu'est-ce que tu fais comme travail ?",
            "Tu es quoi comme métier ?",
            "Comment tu travailles ?"
        ],
        answer: 1,
        explanation: "Formulation naturelle"
    },
    {
        question: "Complétez : Mon père ___ médecin.",
        options: ["est", "fait", "a", "va"],
        answer: 0,
        explanation: "Profession familiale = 'être'"
    },
    {
        question: "Trouvez l'intrus :",
        options: [
            "Je suis étudiant",
            "Je travaille dans un bureau",
            "Je fais professeur",
            "J'ai un emploi"
        ],
        answer: 2,
        explanation: "On dit 'je suis professeur'"
    },

    // Verbe FAIRE (5 questions - important)
    {
        question: "Conjuguez : Nous ___ du vélo le weekend.",
        options: ["fait", "faits", "faisons", "faites"],
        answer: 2,
        explanation: "Nous faisons"
    },
    {
        question: "Complétez : Tu ___ toujours ___ ménage ?",
        options: [
            "fais - le",
            "fait - du",
            "fais - du",
            "fait - le"
        ],
        answer: 0,
        explanation: "Tu fais + article défini"
    },
    {
        question: "Transformez : 'Je fais la cuisine' (négatif)",
        options: [
            "Je ne fais pas la cuisine",
            "Je ne fait pas la cuisine",
            "Je ne fais pas de cuisine",
            "Je ne fais pas du cuisine"
        ],
        answer: 0,
        explanation: "Négation standard"
    },
    {
        question: "Quelle activité utilise 'faire' ?",
        options: [
            "Faire un gâteau",
            "Faire médecin",
            "Faire Paris",
            "Faire heureux"
        ],
        answer: 0,
        explanation: "'Faire' pour activités manuelles"
    },
    {
        question: "Complétez : Elles ___ de la danse.",
        options: ["fait", "fais", "faisez", "font"],
        answer: 3,
        explanation: "Elles font (verbe irrégulier)"
    },

    // Faire/aller + articles contractés (4 questions)
    {
        question: "Complétez : Je vais ___ supermarché.",
        options: ["à le", "au", "à la", "aux"],
        answer: 1,
        explanation: "Aller à + le = au"
    },
    {
        question: "Complétez : Nous faisons ___ tennis.",
        options: ["le", "du", "au", "de le"],
        answer: 1,
        explanation: "Faire + de + le = du"
    },
    {
        question: "Trouvez l'erreur :",
        options: [
            "Je fais du judo",
            "Il va au parc",
            "Nous allons aux piscine",
            "Tu fais de la natation"
        ],
        answer: 2,
        explanation: "'Piscine' est féminin : 'à la piscine'"
    },
    {
        question: "Complétez : Elles vont ___ États-Unis.",
        options: ["à les", "aux", "au", "en les"],
        answer: 1,
        explanation: "Aller à + les = aux"
    },

    // Centres d'intérêt (3 questions)
    {
        question: "Complétez : Mon ___ principal, c'est la lecture.",
        options: ["intérêt", "passion", "loisir", "centre d'intérêt"],
        answer: 2,
        explanation: "'Loisir' est le terme standard"
    },
    {
        question: "Quelle question est correcte ?",
        options: [
            "Qu'est-ce que tu aimes faire ?",
            "Quel est ton hobby ?",
            "Quels sont tes centres d'intérêt ?",
            "Toutes ces réponses"
        ],
        answer: 3,
        explanation: "Toutes ces formulations sont correctes"
    },
    {
        question: "Associez : J'aime ___ la guitare ___ le chant.",
        options: [
            "et - et",
            "mais - et",
            "ni - ni",
            "et - mais"
        ],
        answer: 3,
        explanation: "'Et' pour ajouter, 'mais' pour contraster"
    },

    // Pronoms toniques (5 questions - important)
    {
        question: "Complétez : ___, j'aime le sport.",
        options: ["Je", "Moi", "Mon", "Me"],
        answer: 1,
        explanation: "Moi = pronom tonique pour insister"
    },
    {
        question: "Complétez : Ce livre est pour ___.",
        options: ["tu", "toi", "te", "ton"],
        answer: 1,
        explanation: "Après préposition = pronom tonique"
    },
    {
        question: "Trouvez l'erreur :",
        options: [
            "Lui et moi",
            "Toi et elle",
            "Je et il",
            "Eux et nous"
        ],
        answer: 2,
        explanation: "On ne dit pas 'je et il' mais 'lui et moi'"
    },
    {
        question: "Complétez : -Qui a fait ça ? - ___ !",
        options: ["Moi", "Je", "Me", "Mon"],
        answer: 0,
        explanation: "Réponse isolée = pronom tonique"
    },
    {
        question: "Complétez : Elle pense souvent à ___.",
        options: ["lui", "il", "elle", "le"],
        answer: 0,
        explanation: "Après préposition = pronom tonique"
    },

    // Famille et possessifs (6 questions - important)
    {
        question: "Complétez : ___ père est ingénieur. (féminin)",
        options: ["Mon", "Ma", "Mes", "Ton"],
        answer: 0,
        explanation: "'Père' est masculin, donc 'mon'"
    },
    {
        question: "Complétez : Voici ___ sœur. (pluriel)",
        options: ["notre", "nos", "vos", "leur"],
        answer: 1,
        explanation: "Pour plusieurs sœurs = 'nos'"
    },
    {
        question: "Trouvez l'intrus :",
        options: [
            "Mon oncle",
            "Ma tante",
            "Mes cousin",
            "Mes grands-parents"
        ],
        answer: 2,
        explanation: "'Cousin' doit être au pluriel : 'mes cousins'"
    },
    {
        question: "Complétez : C'est le frère ___ mère.",
        options: ["de ma", "à ma", "de mon", "à mon"],
        answer: 0,
        explanation: "Possession + 'mère' est féminin"
    },
    {
        question: "Répondez : 'C'est ton chien ?' (négatif)",
        options: [
            "Non, c'est le sien",
            "Non, c'est leur",
            "Non, c'est à moi",
            "Non, c'est de lui"
        ],
        answer: 0,
        explanation: "'Le sien' = pronom possessif"
    },
    {
        question: "Complétez : ___ parents habitent à Lyon.",
        options: ["Ses", "Son", "Sa", "Soi"],
        answer: 0,
        explanation: "'Parents' est pluriel = 'ses'"
    },

    // Verbe DIRE (3 questions)
    {
        question: "Conjuguez : Nous ___ toujours la vérité.",
        options: ["dit", "dis", "disez", "disons"],
        answer: 3,
        explanation: "Nous disons"
    },
    {
        question: "Complétez : Que ___ -tu ?",
        options: ["dit", "dis", "dire", "dites"],
        answer: 1,
        explanation: "Tu dis (verbe irrégulier)"
    },
    {
        question: "Transformez : 'Il dit bonjour' (négatif)",
        options: [
            "Il ne dit pas bonjour",
            "Il ne dis pas bonjour",
            "Il ne dit pas de bonjour",
            "Il ne dis pas de bonjour"
        ],
        answer: 0,
        explanation: "Négation standard avec 'dire'"
    }
];