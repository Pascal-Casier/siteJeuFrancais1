const questions = [
    // Goûts et consommation alimentaire (5 questions)
    {
        question: "Complétez : J'___ beaucoup les pâtes.",
        options: ["aime", "aimes", "aimer", "aimons"],
        answer: 0,
        explanation: "Verbe 'aimer' au présent, 1ère personne"
    },
    {
        question: "Quelle phrase exprime une préférence alimentaire ?",
        options: [
            "Je mange à midi",
            "Je préfère le poisson à la viande",
            "J'ai faim",
            "Je vais au restaurant"
        ],
        answer: 1,
        explanation: "'Préférer' exprime un choix entre deux options"
    },
    {
        question: "Complétez : Je ne mange jamais ___ viande.",
        options: ["de la", "la", "une", "des"],
        answer: 1,
        explanation: "Avec 'ne...jamais', on utilise l'article défini"
    },
    {
        question: "Transformez : 'Je bois du café' (forme négative)",
        options: [
            "Je ne bois pas de café",
            "Je ne bois pas du café",
            "Je ne bois pas le café",
            "Je ne bois pas de le café"
        ],
        answer: 0,
        explanation: "Négation avec 'pas de' pour les partitifs"
    },
    {
        question: "Associez : J'aime ___ fromage ___ le dessert.",
        options: ["le - à", "du - pour", "un - avec", "les - sur"],
        answer: 1,
        explanation: "Article partitif + préposition 'pour' exprime l'usage"
    },

    // Prépositions à/de dans les plats (3 questions)
    {
        question: "Complétez : J'ai commandé un steak ___ frites.",
        options: ["à", "de", "avec", "pour"],
        answer: 0,
        explanation: "'Steak à/avec les frites' sont acceptés, mais 'à' est plus courant"
    },
    {
        question: "Trouvez l'intrus :",
        options: [
            "Tarte aux pommes",
            "Glace à la vanille",
            "Soupe de légumes",
            "Café au sucre"
        ],
        answer: 3,
        explanation: "On dit 'café avec du sucre'"
    },
    {
        question: "Complétez : Un verre ___ vin.",
        options: ["à", "de", "en", "pour"],
        answer: 1,
        explanation: "'De' pour indiquer le contenu"
    },

    // Articles (4 questions)
    {
        question: "Complétez : Je voudrais ___ eau minérale.",
        options: ["une", "de l'", "la", "des"],
        answer: 1,
        explanation: "Article partitif devant nom indénombrable"
    },
    {
        question: "Transformez : 'Je mange des fruits' (négatif)",
        options: [
            "Je ne mange pas de fruits",
            "Je ne mange pas des fruits",
            "Je ne mange pas les fruits",
            "Je ne mange pas un fruit"
        ],
        answer: 0,
        explanation: "Négation avec 'pas de'"
    },
    {
        question: "Complétez : ___ enfants adorent ___ glaces.",
        options: [
            "Les - les",
            "Des - des",
            "Les - de la",
            "Des - les"
        ],
        answer: 0,
        explanation: "Enfants spécifiques + glaces en général"
    },
    {
        question: "Trouvez l'erreur :",
        options: [
            "Je prends du pain",
            "Elle veut de la confiture",
            "Nous mangeons des légumes",
            "Tu bois de l'eau minérale"
        ],
        answer: 3,
        explanation: "'De l'' est correct mais 'eau' est féminin : 'de la' serait mieux"
    },

    // Vêtements (5 questions)
    {
        question: "Complétez : Elle porte ___ belle robe ___ soie.",
        options: [
            "une - en",
            "un - de",
            "une - à",
            "la - avec"
        ],
        answer: 0,
        explanation: "Article indéfini + matière avec 'en'"
    },
    {
        question: "Quelle appréciation est positive ?",
        options: [
            "Ce pantalon est trop serré",
            "Cette veste te va parfaitement",
            "Ces chaussures sont usées",
            "Ce chapeau est bizarre"
        ],
        answer: 1,
        explanation: "'Te va parfaitement' est un compliment"
    },
    {
        question: "Complétez : - Quelle ___ faites-vous ? - Je fais du 38.",
        options: ["taille", "pointure", "mesure", "dimension"],
        answer: 0,
        answer: 0,
        explanation: "Demande standard pour les vêtements"
    },
    {
        question: "Transformez : 'Ces bottes sont confortables' (négatif)",
        options: [
            "Ces bottes ne sont pas confortables",
            "Ces bottes sont pas confortables",
            "Ces bottes ne sont confortables pas",
            "Ces bottes ne confortables pas"
        ],
        answer: 0,
        explanation: "Négation standard avec 'ne...pas'"
    },
    {
        question: "Complétez : Pour l'hiver, je te conseille ___ manteau chaud.",
        options: ["un", "le", "du", "des"],
        answer: 0,
        explanation: "Conseil avec article indéfini"
    },

    // Pronoms COD/COI (6 questions - important)
    {
        question: "Transformez : 'Je mange le gâteau' avec pronom",
        options: [
            "Je le mange",
            "Je lui mange",
            "Je la mange",
            "Je les mange"
        ],
        answer: 0,
        explanation: "'Le' remplace 'le gâteau' (masculin singulier)"
    },
    {
        question: "Complétez : Tu ___ vois ? (ton ami)",
        options: ["le", "la", "lui", "les"],
        answer: 0,
        explanation: "'Le' pour masculin singulier (ami)"
    },
    {
        question: "Complétez : Elle ___ parle. (à son frère)",
        options: ["le", "la", "lui", "leur"],
        answer: 2,
        explanation: "'Lui' pour COI masculin/féminin singulier"
    },
    {
        question: "Transformez : 'Je donne le livre à Marie' avec pronoms",
        options: [
            "Je le lui donne",
            "Je lui le donne",
            "Je la lui donne",
            "Je leur le donne"
        ],
        answer: 0,
        explanation: "'Le' (COD) avant 'lui' (COI)"
    },
    {
        question: "Trouvez l'erreur :",
        options: [
            "Je la vois",
            "Nous leur parlons",
            "Tu le lui dis",
            "Il lui la donne"
        ],
        answer: 3,
        explanation: "Ordre incorrect : COD avant COI ('il la lui donne')"
    },
    {
        question: "Complétez : Vous ___ envoyez des lettres ? (à vos parents)",
        options: ["les", "leur", "lui", "en"],
        answer: 1,
        explanation: "'Leur' pour COI pluriel"
    },

    // Servir à/de (3 questions)
    {
        question: "Complétez : Cette cuillère ___ manger la soupe.",
        options: ["sert à", "sert de", "serve à", "servir à"],
        answer: 0,
        explanation: "'Servir à' + infinitif = fonction"
    },
    {
        question: "Complétez : Ce journal ___ emballage.",
        options: ["sert à", "sert d'", "serve de", "servir de"],
        answer: 1,
        explanation: "'Servir de' + nom = utilisation comme autre chose"
    },
    {
        question: "Trouvez la phrase correcte :",
        options: [
            "Cette boîte sert à rangement",
            "Ce couteau sert de couper",
            "Cette pièce sert de bureau",
            "Cette clé sert à la porte"
        ],
        answer: 2,
        explanation: "Structure correcte : 'servir de' + nom"
    },

    // Pronoms relatifs qui/que (4 questions - important)
    {
        question: "Complétez : La robe ___ tu as achetée est jolie.",
        options: ["qui", "que", "où", "dont"],
        answer: 1,
        explanation: "'Que' pour COD (tu as acheté la robe)"
    },
    {
        question: "Complétez : L'homme ___ parle est mon professeur.",
        options: ["qui", "que", "où", "dont"],
        answer: 0,
        explanation: "'Qui' pour sujet (l'homme parle)"
    },
    {
        question: "Transformez : 'J'ai mangé le gâteau. Le gâteau était délicieux.'",
        options: [
            "Le gâteau que j'ai mangé était délicieux",
            "Le gâteau qui j'ai mangé était délicieux",
            "Le gâteau où j'ai mangé était délicieux",
            "Le gâteau dont j'ai mangé était délicieux"
        ],
        answer: 0,
        explanation: "'Que' pour COD relatif"
    },
    {
        question: "Trouvez l'erreur :",
        options: [
            "Le livre que je lis",
            "La femme qui chante",
            "Le restaurant où nous allons",
            "Le stylo qui j'écris"
        ],
        answer: 3,
        explanation: "Devrait être 'avec lequel' ou 'que j'utilise pour écrire'"
    },

    // Conseils (3 questions)
    {
        question: "Complétez : ___ tu prennes un parapluie.",
        options: ["Je conseille que", "Je te conseille de", "Je conseille à", "Je conseille pour"],
        answer: 1,
        explanation: "Structure : conseiller à qqn de faire qqch"
    },
    {
        question: "Transformez : 'Mets une veste' (forme polie)",
        options: [
            "Tu devrais mettre une veste",
            "Mets une veste",
            "Mettez une veste",
            "Il faut mettre une veste"
        ],
        answer: 0,
        answer: 0,
        explanation: "Conditionnel pour conseil poli"
    },
    {
        question: "Complétez : Pour ton mal de tête, ___ prendre un médicament.",
        options: ["il faut", "tu as", "tu peux", "tu dois"],
        answer: 0,
        explanation: "'Il faut' pour conseil impersonnel"
    }
];