window.quizQuestions = window.quizQuestions || {};
window.quizQuestions[`A1-dossier2`] = [
    // Articles définis/indéfinis (4 questions)
    {
        question: "Complétez : C'est ___ livre et ___ livre est intéressant.",
        options: ["un - le", "le - un", "la - un", "un - une"],
        answer: 0,
        explanation: "Première mention = indéfini (un), deuxième mention = défini (le)"
    },
    {
        question: "Trouvez l'erreur :",
        options: [
            "une chaise",
            "un table",
            "l'ordinateur",
            "les cahiers"
        ],
        answer: 1,
        explanation: "'Table' est féminin : 'une table'"
    },
    {
        question: "Complétez : J'ai ___ ordinateur et ___ souris neuve.",
        options: ["un - une", "le - la", "un - la", "l' - une"],
        answer: 0,
        explanation: "Les deux objets sont mentionnés pour la première fois (indéfinis)"
    },
    {
        question: "Quelle phrase utilise correctement les articles ?",
        options: [
            "La voiture est un rouge",
            "Un voiture est la rouge",
            "La voiture est rouge",
            "Voiture est rouge"
        ],
        answer: 2,
        explanation: "Défini pour un objet spécifique + pas d'article avec la couleur"
    },

    // Prépositions de lieu avec articles contractés (3 questions)
    {
        question: "Complétez : Je vais ___ parc.",
        options: ["à le", "au", "à la", "aux"],
        answer: 1,
        explanation: "À + le = au (masculin singulier)"
    },
    {
        question: "Complétez : Elle vient ___ États-Unis.",
        options: ["des", "de les", "aux", "du"],
        answer: 0,
        explanation: "De + les = des (pluriel)"
    },
    {
        question: "Trouvez la phrase correcte :",
        options: [
            "Je suis à la café",
            "Je suis au café",
            "Je suis en café",
            "Je suis aux café"
        ],
        answer: 1,
        explanation: "'Café' est masculin : à + le = au"
    },

    // Pourquoi/Parce que (2 questions)
    {
        question: "Complétez : -Pourquoi pleures-tu ? - ___ je suis triste.",
        options: ["Car", "Parce que", "Pour", "Donc"],
        answer: 1,
        explanation: "La réponse standard à 'pourquoi' est 'parce que'"
    },
    {
        question: "Transformez : 'Il mange car il a faim' avec 'parce que'",
        options: [
            "Il mange parce que il a faim",
            "Il mange parce qu'il a faim",
            "Il mange pour il a faim",
            "Il mange donc il a faim"
        ],
        answer: 1,
        explanation: "Élision obligatoire devant voyelle (qu'il)"
    },

    // Est-ce que (2 questions)
    {
        question: "Formulez la question avec 'est-ce que' : 'Tu aimes le chocolat'",
        options: [
            "Est-ce que aimes-tu le chocolat ?",
            "Est-ce que tu aimes le chocolat ?",
            "Est-ce que t'aimes le chocolat ?",
            "Aimes-tu est-ce que le chocolat ?"
        ],
        answer: 1,
        explanation: "Structure : Est-ce que + sujet + verbe"
    },
    {
        question: "Quelle question est incorrecte ?",
        options: [
            "Est-ce que vous parlez français ?",
            "Est-ce qu'il habite ici ?",
            "Est-ce que nous allons au parc ?",
            "Est-ce que prends-tu le bus ?"
        ],
        answer: 3,
        explanation: "Avec 'est-ce que', pas d'inversion sujet-verbe"
    },

    // Verbes prendre/descendre/aller (4 questions)
    {
        question: "Conjuguez : Nous ___ le train à 8h (prendre)",
        options: ["prend", "prenez", "prenons", "prends"],
        answer: 2,
        explanation: "Nous + verbes en -dre = -ons (prenons)"
    },
    {
        question: "Complétez : Tu ___ à la prochaine station (descendre)",
        options: ["descend", "descends", "descendez", "descendent"],
        answer: 1,
        explanation: "Tu + verbe -re = -s (descends)"
    },
    {
        question: "Complétez : Ils ___ au cinéma ce soir (aller)",
        options: ["va", "vas", "allez", "vont"],
        answer: 3,
        explanation: "Ils vont (verbe irrégulier)"
    },
    {
        question: "Transformez à la forme négative : 'Je prends le bus'",
        options: [
            "Je ne prends pas le bus",
            "Je ne prend pas le bus",
            "Je ne prenons pas le bus",
            "Je ne prends pas de bus"
        ],
        answer: 0,
        explanation: "Négation standard avec 'prendre'"
    },

    // À/en + transport (3 questions)
    {
        question: "Complétez : Je voyage ___ avion",
        options: ["à", "en", "au", "dans"],
        answer: 1,
        explanation: "Transport fermé = 'en'"
    },
    {
        question: "Complétez : Il va ___ vélo",
        options: ["à", "en", "au", "sur"],
        answer: 0,
        explanation: "Transport ouvert = 'à'"
    },
    {
        question: "Trouvez l'erreur :",
        options: [
            "en voiture",
            "à pied",
            "en moto",
            "à train"
        ],
        answer: 3,
        explanation: "On dit 'en train'"
    },

    // Adjectifs démonstratifs (3 questions)
    {
        question: "Complétez : ___ maison est belle (féminin)",
        options: ["Ce", "Cet", "Cette", "Ces"],
        answer: 2,
        explanation: "Féminin singulier = cette"
    },
    {
        question: "Complétez : Regarde ___ arbre ! (masculin devant voyelle)",
        options: ["ce", "cet", "cette", "ces"],
        answer: 1,
        explanation: "Masculin devant voyelle = cet"
    },
    {
        question: "Transformez au pluriel : 'ce livre'",
        options: ["ces livres", "ce livres", "cettes livres", "cet livres"],
        answer: 0,
        explanation: "Pluriel = ces pour tous les genres"
    },

    // Verbe venir (4 questions)
    {
        question: "Conjuguez : Tu ___ de Paris ? (venir)",
        options: ["vient", "viens", "venez", "viennent"],
        answer: 1,
        explanation: "Tu viens (verbe irrégulier)"
    },
    {
        question: "Complétez : Nous ___ du marché (venir)",
        options: ["vient", "venons", "venez", "viennent"],
        answer: 1,
        explanation: "Nous venons"
    },
    {
        question: "Formez la question : '___ tu viens ?'",
        options: ["Où", "D'où", "Comment", "Quand"],
        answer: 1,
        explanation: "Pour l'origine, on utilise 'd'où'"
    },
    {
        question: "Répondez : 'D'où venez-vous ?' (Canada)",
        options: [
            "Je viens de Canada",
            "Je viens du Canada",
            "Je viens au Canada",
            "Je viens en Canada"
        ],
        answer: 1,
        explanation: "Venir de + pays masculin = 'du'"
    }
];