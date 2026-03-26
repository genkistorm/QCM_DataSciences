const extraQuestions = [
    // --- REGRESSION LOGISTIQUE (Cours) ---
    {
        question: "Quel est le but principal de la régression logistique ?",
        options: [
            "Prédire la valeur continue exacte d'une fonction temporelle.",
            "Modéliser la probabilité d'un événement binaire ou catégoriel (e.g. succès/échec, oui/non).",
            "Évaluer des degrés de complexité de polynômes d'ordre N.",
            "Garantir qu'une matrice des variances-covariances reste diagonale pure."
        ],
        correctIndexes: [1]
    },
    {
        question: "Si la probabilité d'un événement positif est notée P(Y = 1), qu'utilise la régression logistique pour la modéliser ?",
        options: [
            "Une simple droite affine non-restreinte.",
            "Une fonction logistique des variables indépendantes.",
            "Un estimateur géométrique brut indépendant de la probabilité.",
            "Un réseau de SVM aléatoire."
        ],
        correctIndexes: [1]
    },
    {
        question: "Dans ses principes de base, la régression logistique modélise le \"logit\". Qu'est-ce que le logit de P(Y=1) ?",
        options: [
            "C'est la différence arithmétique P - (1-P).",
            "C'est le module absolu ||P(Y=1)||.",
            "C'est le logarithme naturel du rapport des probabilités (le Log-Odds).",
            "Il équivaut mathématiquement à ln(P / (1 - P))."
        ],
        correctIndexes: [2, 3]
    },
    {
        question: "L'estimation des coefficients dans un modèle logistique ne repose pas originellement sur les moindres carrés purs. Quelle est la méthode citée ?",
        options: [
            "Méthode du Maximum de Confiance Limitée.",
            "Méthode du Maximum de Vraisemblance (Maximum Likelihood Estimation).",
            "Minimisation du sous-apprentissage stochastique.",
            "Principe du Moindre Ratio."
        ],
        correctIndexes: [1]
    },
    {
        question: "Que signifie formellement l'utilisation de la \"Vraisemblance\" dans l'ajustement du modèle ?",
        options: [
            "On cherche à rendre les paramètres du modèle aléatoires.",
            "On évalue l'erreur brute et on la met au carré.",
            "On cherche les valeurs des paramètres qui rendent les données observées les plus probables possible.",
            "On sélectionne le modèle ayant strictement l'erreur RMSE la plus réduite."
        ],
        correctIndexes: [2]
    },
    {
        question: "On définit la Vraisemblance (Likelihood) dans ce contexte comme :",
        options: [
            "La fonction qui mesure la probabilité absolue de converger numériquement.",
            "Une fonction qui mesure la probabilité d'obtenir les observations (le jeu de données) étant donné les paramètres fixés.",
            "L'écart type estimé post-déploiement.",
            "Un seuil de classification arbitrairement situé à P=0.5."
        ],
        correctIndexes: [1]
    },
    {
        question: "En régression logistique, chaque coefficient indique l'effet d'une unité de changement de la variable X, toutes choses égales par ailleurs, sur :",
        options: [
            "La probabilité exacte brute P(Y=1) (de façon parfaitement proportionnelle).",
            "L'erreur d'apprentissage de l'observation correspondante.",
            "La matrice de tolérance Fisher.",
            "Le log-odds de l'issue finale."
        ],
        correctIndexes: [3]
    },
    {
        question: "Si l'Odds Ratio (rattaché à ou calculé depuis un coefficient) est SUPÉRIEUR à 1 :",
        options: [
            "Cela indique une diminution brutale du RMSE.",
            "Cela indique une augmentation de la probabilité de l'événement d'intérêt avec l'augmentation de la variable associée.",
            "La relation est strictement nocive d'un point de vue p-value.",
            "La droite logistique a une variance infinie."
        ],
        correctIndexes: [1]
    },
    {
        question: "Si l'Odds Ratio (rapport de cotes) est INFÉRIEUR à 1 :",
        options: [
            "Cela indique une augmentation incontrôlée du logit.",
            "La variable est complètement neutre et doit être éliminée.",
            "L'influence de la variable sur la probabilité de l'issue positive diminue la probabilité de l'événement.",
            "Le taux de vrai positif franchit la barre des 100%."
        ],
        correctIndexes: [2]
    },
    {
        question: "Qu'est-ce qu'une Matrice de Confusion en évaluation de modèle de classification ?",
        options: [
            "Un tableau croisé montrant Vrais Positifs, Vrais Négatifs, Faux Positifs, et Faux Négatifs.",
            "Un graphe superposant erreur Test et erreur Train.",
            "Un outil dédié à la visualisation des performances globales en régression linéaire multivariée OLS.",
            "L'outil fondamental pour évaluer une classification."
        ],
        correctIndexes: [0, 3]
    },
    {
        question: "La 'Précision' (ou Positive Predictive Value) est calculée par :",
        options: [
            "Vrai Positif / (Vrai Positif + Faux Négatif)",
            "Vrai Négatif / (Vrai Positif + Faux Positif)",
            "Vrai Positif / (Vrai Positif + Faux Positif)",
            "Taux d'accuracy total."
        ],
        correctIndexes: [2]
    },
    {
        question: "La métrique \"Précision\" a vocation à mesurer :",
        options: [
            "La capacité à détecter TOUS les individus malades/positifs sans exception.",
            "La capacité du modèle à ne pas faire d'erreur lors d'une prédiction déclarée positive.",
            "L'homogénéité globale du modèle.",
            "La séparation entre apprentissage et validation."
        ],
        correctIndexes: [1]
    },
    {
        question: "Le 'Rappel' (Recall, Sensitivity, True Positive Rate, Hit Rate) a pour définition mathématique :",
        options: [
            "Vrai Positif / (Vrai Positif + Faux Positif)",
            "Vrai Positif / (Vrai Positif + Faux Négatif)",
            "Faux Positif / Total Échantillon",
            "(Vrais Positifs + Vrais Négatifs) / Total"
        ],
        correctIndexes: [1]
    },
    {
        question: "Le but de la métrique 'Rappel' (Sensitivity) est de mesurer :",
        options: [
            "La capacité du modèle à être certain d'une unique prédiction positive.",
            "La capacité du modèle à détecter l'ensemble des individus positifs d'une base de données.",
            "Le taux de faux négatifs exact.",
            "La probabilité de faire face à du multicolinéarisme."
        ],
        correctIndexes: [1]
    },
    {
        question: "Qu'évalue précisément l'AUC-ROC (Area Under the Curve - Receiver Operating Characteristic) ?",
        options: [
            "L'erreur MCO des paramètres theta sous contrainte Lasso.",
            "La capacité intrinsèque du modèle à distinguer et séparer parfaitement les différentes classes.",
            "L'importance de la variable omise sur le vecteur d'apprentissage.",
            "Le degré exact polynomial qu'il aurait fallu admettre."
        ],
        correctIndexes: [1]
    },
    {
        question: "Si l'AUC obtenue lors d'une évaluation ROC vaut 1, que peut-on affirmer de la performance de distinction du modèle ?",
        options: [
            "Qu'il est parfaitement incapable de discerner les classes (hasard total).",
            "Qu'il s'agit d'une performance absolument parfaite de séparation.",
            "Que la sensibilité est nulle.",
            "Qu'il est soumis gravement au phénomène de biais sans variance."
        ],
        correctIndexes: [1]
    },
    {
        question: "Le \"Taux de Faux Positif\" (False Positive Rate) se définit par :",
        options: [
            "La proportion de Faux Positifs parmi tous les cas qui sont réellement Négatifs.",
            "La proportion de Faux Positifs parmi tous les cas prédits Positifs.",
            "Inversément corrélé à la précision stricte absolue.",
            "Le nombre brut absolu d'erreurs commises au total."
        ],
        correctIndexes: [0]
    },
    {
        question: "Et la définition du \"Taux de Vrais Positifs\" (qui équivaut au Rappel) indique :",
        options: [
            "La proportion de modèles bien créés.",
            "La proportion de vrais positifs correctement identifiés parmi tous les cas réellement positifs du jeu.",
            "La somme algébrique (TP + FN).",
            "La surface complète de la courbe AUC."
        ],
        correctIndexes: [1]
    },
    {
        question: "Dans un projet type de Machine Learning, quelles phases suivent généralement l'Analyse Exploratoire ?",
        options: [
            "Prétraitement des variables et Échantillonnage.",
            "Création de PDF et Sauvegarde SQL.",
            "Modélisation puis Évaluation.",
            "Lancement du test de Student."
        ],
        correctIndexes: [0, 2]
    },
    {
        question: "L'Analyse Exploratoire d'un projet data comprend traditionnellement :",
        options: [
            "L'Analyse multiforme OLS.",
            "L'Analyse univariée.",
            "L'Analyse Multivariée.",
            "La recherche de minima locaux en continu."
        ],
        correctIndexes: [1, 2]
    },

    {
        question: "Contrairement au StandardScaler, le MinMaxScaler transforme la distribution sans la recentrer sur 0. Quel défaut ou caractéristique visuelle cela peut-il entraîner sur des données asymétriques ?",
        options: [
            "Il produit nécessairement une courbe cubique.",
            "Sur ces données asymétriques, il peut produire une distribution très étroite contrainte d'un côté.",
            "Il étale aveuglement la courbe de -10 à +100.",
            "Il exige de calculer une matrice inverse singulière."
        ],
        correctIndexes: [1]
    },
    {
        question: "Pour une matrice OLS (X^T X), que signifie explicitement la notion de \"singulière\" ?",
        options: [
            "Que les colonnes sont linéairement dépendantes.",
            "Qu'elle ne possède aucun inverse analytiquement défini.",
            "Que l'équation normale (OLS) y trouvera sa solution unique en O(n) temps.",
            "Qu'elle illustre la présence de surapprentissage direct."
        ],
        correctIndexes: [0, 1]
    },
    {
        question: "Que symbolise l'erreur de prévision (mesurée sur l'ensemble de test) lors de l'étude du compromis Biais/Variance ?",
        options: [
            "Elle symbolise l'incapacité d'une droite de degré 1 à coller aux points.",
            "Elle sert de baromètre du généralisme d'un algorithme : au plus bas, l'algorithme a capturé l'essence sans apprendre le bruit par coeur.",
            "C'est la différence mathématique stricte entre (X^TX) et l'Identité.",
            "Elle sert d'alerte quant à l'impossibilité de poursuivre plus de 3 itérations du gradient."
        ],
        correctIndexes: [1]
    },
    {
        question: "Quelle est l'approche générale recommandée pour contrer immédiatement une situation diagnostiquée de Sous-apprentissage (Underfitting) ?",
        options: [
            "Il faut simplifier le modèle drastiquement.",
            "L'apprentissage a de trop bons résultats, il faut l'étouffer par normalisation Normalizer.",
            "Il faut augmenter la complexité du modèle (ex: augmenter le degré polynomial).",
            "Cesser de séparer test et train de peur de fausser l'apprentissage."
        ],
        correctIndexes: [2]
    },
    {
        question: "Quelle est la recommandation générale face à une situation de Surapprentissage confirmée dans un modèle polynomial ?",
        options: [
            "Diminuer le seuil de décision à 0.5 strict.",
            "Chercher à multiplier le coefficient de corrélation de la Matrice X.",
            "Ajouter toujours plus de caractéristiques X^5, X^6, X^7...",
            "Simplifier le modèle (ex: réduire les degrés en polynôme) pour l'empêcher d'étudier aveuglement les bruits locaux."
        ],
        correctIndexes: [3]
    },
    {
        question: "La formule du test de pré-processing mathématique du centrage-réduction s'exprime fondamentalement par :",
        options: [
            "(Valeur - Moyenne) / Ecart-Type",
            "(Valeur - Minimal) / (Maximal - Minimal)",
            "Vraisemblance / Probabilité",
            "Moyenne (Y - Y_predit)^2"
        ],
        correctIndexes: [0]
    },
    {
        question: "Dans certaines librairies, quelle est la solution algorithmique de contournement utilisée pour résoudre l'équation analytique (OLS) en cas de matrice X^TX non-inversible (singulière) ?",
        options: [
            "L'utilisation exclusive d'arbres de décision.",
            "L'utilisation de la pseudo-inverse de Moore-Penrose (souvent calculée par décomposition en valeurs singulières SVD).",
            "L'interruption forcée du programme R ou Python.",
            "L'ajout automatique de bruit gaussien infini sur Y."
        ],
        correctIndexes: [1]
    },
    {
        question: "En cas de surapprentissage extrême (ex: modèle polynomial de degré 9 passant par presque tous les points), quel comportement erratique observe-t-on souvent entre deux points d'apprentissage voisins (ex: entre x=5 et x=10) ?",
        options: [
            "Une simple droite horizontale de prévision = 0.",
            "Elle plonge et remonte brusquement, oscillant de façon erratique dans des extrêmes irréels au milieu du « vide » d'observation.",
            "Elle devient purement verticale asymptotiquement.",
            "On observe une courbe roc parfaite de 1."
        ],
        correctIndexes: [1]
    },
    {
        question: "Afin de trouver l'optimum Biais-Variance, la démarche classique consiste à :",
        options: [
            "Tracer les courbes d'erreur d'Apprentissage et de Test en fonction de la complexité pour détecter le point de divergence.",
            "Se concentrer uniquement sur l'optimisation de l'erreur d'apprentissage pour la descendre à zéro strict.",
            "Fusionner les deux ensembles d'étude dans une grande table commune indifférenciée.",
            "Privilégier aveuglément la puissance quadratique maximale."
        ],
        correctIndexes: [0]
    },


    {
        question: "Quel est l'effet direct du phénomène de Surapprentissage (Overfitting) sur l'utilisation d'un modèle en production ?",
        options: [
            "Le modèle ne commettra presque aucune erreur grâce à son biais minimal unitaire.",
            "Bien que l'erreur d'entraînement soit très faible, le modèle n'aura aucune fiabilité prédictive sur de nouvelles données.",
            "Le modèle pourra corriger de lui-même la multicolinéarité restante de l'échantillon.",
            "Il n'y a aucun effet négatif, reproduire 100% de la donnée est l'objectif du modélisateur."
        ],
        correctIndexes: [1]
    },
    {
        question: "Et la définition de l'Équation Normale ?",
        options: [
            "Equation qui cherche la normalité des erreurs de Pearson pure.",
            "Conséquence directe de l'annulation de la dérivée de J par rapport au vecteur Theta en format matrice mathématique algébrique formelle.",
            "La relation d'équivalence probabiliste de Bayes étendue au SVM Polynomial.",
            "La conversion du TP(Taux vrais Positifs) par validation K-fold Stratified."
        ],
        correctIndexes: [1]
    },
    {
        question: "Quelles sont les étapes clés réitérées pour l'interprétation correcte d'un modèle de régression linéaire (OLS) une fois entraîné ?",
        options: [
            "Coefficients exprimant la force/impact direct par incrément d'une variable tout choses égales par ailleurs.",
            "Test Statistiques vérifiant l'importance du Modèle et de chaque paramètre distinct.",
            "R-Carré dictant combien la variable indépendante X est orthogonale à P.",
            "Outils diagnostics des résidus."
        ],
        correctIndexes: [0, 1, 3]
    },
    {
        question: "Quelle métrique de classification correspond au rapport : Vrais Positifs divisé par Tous les individus prédits Positifs (TP + FP) ?",
        options: [
            "Le Rappel TP/(TP+FN)",
            "L'Accuracy globale ((TP+TN)/Total)",
            "La Précision TP/(TP+FP)",
            "L'AUC."
        ],
        correctIndexes: [2]
    }
];

// Appending the strictly selected extension array
allQuestions.push(...extraQuestions);
