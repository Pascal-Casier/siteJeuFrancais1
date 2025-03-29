const questions = [
    {
        question: "Quelle phrase utilise correctement 'il y a' pour indiquer une durée ?",
        options: [
            "Je travaille ici il y a trois ans",
            "Il y a trois ans que je travaille ici",
            "J'ai commencé ce travail il y a trois ans",
            "Je travaille ici depuis il y a trois ans"
        ],
        answer: 2,
        explanation: "'Il y a' s'utilise avec le passé pour marquer le temps écoulé depuis un événement. La forme correcte est : 'J'ai commencé... il y a...'"
    },
    {
        question: "Quelle expression est correcte avec 'depuis' ?",
        options: [
            "Je lis ce livre depuis deux heures",
            "Je lis ce livre pour deux heures",
            "Je lis ce livre il y a deux heures",
            "Je lis ce livre pendant deux heures"
        ],
        answer: 0,
        explanation: "'Depuis' indique une action qui a commencé dans le passé et qui continue dans le présent. On l'utilise avec le présent : 'Je lis... depuis...'"
    },
    {
        question: "Quelle phrase utilise correctement 'pendant' ?",
        options: [
            "J'ai habité à Paris pendant cinq ans",
            "J'habite à Paris depuis cinq ans",
            "J'ai habité à Paris il y a cinq ans",
            "J'habite à Paris pour cinq ans"
        ],
        answer: 0,
        explanation: "'Pendant' exprime la durée d'une action passée complètement terminée : 'J'ai habité... pendant...'"
    },
    {
        question: "Quelle expression est correcte avec 'pour' ?",
        options: [
            "Je pars en vacances pour trois semaines",
            "Je pars en vacances depuis trois semaines",
            "Je pars en vacances il y a trois semaines",
            "Je pars en vacances pendant trois semaines"
        ],
        answer: 0,
        explanation: "'Pour' exprime une durée prévue dans le futur : 'Je pars... pour...'"
    },
    {
        question: "Quelle phrase est incorrecte ?",
        options: [
            "Il travaille ici depuis 2020",
            "Il travaille ici il y a trois ans",
            "Il a travaillé ici pendant deux ans",
            "Il va travailler ici pour un an"
        ],
        answer: 1,
        explanation: "'Il y a' ne peut pas s'utiliser ainsi avec le présent. Il faudrait dire : 'Il a commencé à travailler ici il y a trois ans'"
    },
    {
        question: "Complétez : 'Nous avons voyagé en Italie ______ un mois'",
        options: [
            "depuis",
            "il y a",
            "pendant",
            "pour"
        ],
        answer: 2,
        explanation: "'Pendant' est correct car il s'agit d'une action passée complètement terminée"
    },
    {
        question: "Quelle phrase utilise correctement les trois expressions temporelles ?",
        options: [
            "Il y a deux ans, je vis ici depuis cinq ans pour mon travail",
            "J'habite ici depuis cinq ans, mais je vais déménager pour un an il y a deux mois",
            "Je suis arrivé il y a cinq ans et je reste ici pour deux ans depuis maintenant",
            "J'ai travaillé là-bas pendant trois ans, maintenant je travaille ici depuis deux ans"
        ],
        answer: 3,
        explanation: "Cette phrase utilise correctement : 'pendant' pour une durée passée terminée, 'depuis' pour une action en cours, et 'il y a' est implicite dans la chronologie"
    },
    {
        question: "Quelle expression est correcte pour parler d'une durée future ?",
        options: [
            "Je serai absent depuis trois jours",
            "Je serai absent il y a trois jours",
            "Je serai absent pendant trois jours",
            "Je serai absent pour trois jours"
        ],
        answer: 3,
        explanation: "'Pour' est la meilleure option pour exprimer une durée future prévue, bien que 'pendant' soit parfois acceptable"
    },
    {
        question: "Quelle phrase contient une erreur temporelle ?",
        options: [
            "Je pratique le piano depuis l'âge de cinq ans",
            "J'ai pratiqué le piano pendant dix ans",
            "Je vais pratiquer le piano pour une heure",
            "J'ai commencé le piano il y a depuis dix ans"
        ],
        answer: 3,
        explanation: "'Il y a' et 'depuis' ne peuvent pas être utilisés ensemble. Il faut choisir l'un ou l'autre"
    },
    {
        question: "Complétez : '______ deux semaines qu'il neige presque sans arrêt'",
        options: [
            "Il y a",
            "Depuis",
            "Pendant",
            "Pour"
        ],
        answer: 1,
        explanation: "'Depuis' est correct car il s'agit d'une action qui a commencé dans le passé et qui continue au présent"
    }
];