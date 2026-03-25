const extraQuestions = [
    // --- REGRESSION LOGISTIQUE (Cours) ---
    {
        question: "Quel est le but principal de la régression logistique introduit dans le document ?",
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
        question: "Qu'est-ce qu'une Matrice de Confusion décrite dans le support ?",
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
        question: "La Précision a vocation, selon la définition du cours, à mesurer :",
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
        question: "D'après les annexes du support, le \"Taux de Faux Positif\" se définit par :",
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
        question: "Parmi la liste détaillée des « Étapes du Machine Learning » situées en fin de document, quelles phases suivent directement l'Analyse Exploratoire ?",
        options: [
            "Prétraitement des variables et Échantillonnage.",
            "Création de PDF et Sauvegarde SQL.",
            "Modélisation puis Évaluation.",
            "Lancement du test de Student."
        ],
        correctIndexes: [0, 2]
    },
    {
        question: "L'Analyse Exploratoire citée dans ces Étapes comprend traditionnellement :",
        options: [
            "L'Analyse multiforme OLS.",
            "L'Analyse univariée.",
            "L'Analyse Multivariée.",
            "La recherche de minima locaux en continu."
        ],
        correctIndexes: [1, 2]
    },
    
    // -- MORE Qs about the PDF files contents ---
    {
        question: "En reprenant l'exemple parisien de Multivariée avec le prix, des appartements et des mètres carrés. Combien de pièces comporte le pic principal statistique de distribution de la variable X1 ?",
        options: [
            "2 pièces (~265 appartements).",
            "4 pièces (~50 appartements).",
            "1 pièce à vivre (~115 appartements).",
            "8 pièces."
        ],
        correctIndexes: [0]
    },
    {
        question: "Dans ce même exemple immobilier, le pic caractéristique de la variable X2 (superficie) se situe entre :",
        options: [
            "10 et 20 m²",
            "30 et 40 m² (~110 appartements)",
            "70 et 80 m²",
            "Approximativement 120 m²"
        ],
        correctIndexes: [1]
    },
    {
        question: "Le scaler MinMaxScaler, d'après les visuels, transforme la distribution sans la recentrer totalement comme le ferait Standard. Quel est le défaut possible ou caractéristique visuelle notée ?",
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
        question: "Qu'est ce que l'erreur de prévision quantifiée lors de l'étude du Biais/Variance symbolise dans les courbes du document ?",
        options: [
            "Elle symbolise l'incapacité d'une droite de degré 1 à coller aux points.",
            "Elle sert de baromètre du généralisme d'un algorithme : au plus bas, l'algorithme a capturé l'essence sans apprendre le bruit par coeur.",
            "C'est la différence mathématique stricte entre (X^TX) et l'Identité.",
            "Elle sert d'alerte quant à l'impossibilité de poursuivre plus de 3 itérations du gradient."
        ],
        correctIndexes: [1]
    },
    {
        question: "Quelle recommandation générale le cours \"Régression polynomiale\" fait-il pour contrer immédiatement une situation diagnostiquée de Sous-apprentissage ?",
        options: [
            "Il faut simplifier le modèle drastiquement.",
            "L'apprentissage a de trop bons résultats, il faut l'étouffer par normalisation Normalizer.",
            "Il faut augmenter la complexité du modèle (ex: augmenter le degré polynomial).",
            "Cesser de séparer test et train de peur de fausser l'apprentissage."
        ],
        correctIndexes: [2]
    },
    {
        question: "Quelle recommandation le même cours fait-il face à une situation de Surapprentissage confirmée ?",
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
        question: "En lisant les notes de références de la multivariée, que dit le texte concernant la solution aux problèmes de la non-inversibilité (matrice singulière OLS) ?",
        options: [
            "Que le problème est mathématiquement irrésolu pour l'éternité.",
            "Qu'il invite à se référer au Chapitre 15 de l'auteur pour trouver la solution de contournement.",
            "Qu'il s'agit du résultat recherché pour conclure le TD.",
            "Que cela confirme la nullité des résidus."
        ],
        correctIndexes: [1]
    },
    {
        question: "D'après la courbe illustrant le surapprentissage des voitures (simulation 2), la ligne de degré 9 relie quels genres de comportement entre les points x=5 et x=10 ?",
        options: [
            "Une simple droite horizontale de prévision = 0.",
            "Elle plonge et remonte brusquement, oscillant de façon erratique dans des extrêmes irréels au milieu du « vide » d'observation.",
            "Elle devient purement verticale asymptotiquement.",
            "On observe une courbe roc parfaite de 1."
        ],
        correctIndexes: [1]
    },
    {
        question: "Afin de trouver le fameux optimum Biais-Variance, le document incite systématiquement le data scientist à :",
        options: [
            "Diviser le jeu de données pour détecter le point où l'erreur de Prévision remonte brusquement pendant que l'erreur Train s'écroule.",
            "Se concentrer uniquement sur le Log-Odds positif.",
            "Fusionner les deux ensembles d'étude dans une grande table commune indifférenciée.",
            "Privilégier aveuglément la puissance quadratique quoi qu'il se passe."
        ],
        correctIndexes: [0]
    },
    {
        question: "La formule de la probabilité logistique (rappel partiel par l'Odds) stipule indirectement que lorsque le log-odds vaut strictement ZERO, la probabilité vaut :",
        options: [
            "Exactement 0% (événement impossible).",
            "Garantie à 100%.",
            "Précisément de 50% (car ln(1) = 0, odds = P/(1-P) = 1).",
            "ln(0) n'existant pas, la courbe explose."
        ],
        correctIndexes: [2]
    },
    {
        question: "Sur un problème qui exige une distinction vitale de deux événements aux conséquences funestes, quelle configuration a du sens ?",
        options: [
            "Prier pour un biais d'échantillonnage de zéro.",
            "Gérer avec attention l'étude corrélée de la Précision et du Rappel plutôt que l'Accuracy de surface.",
            "Prendre la pire régression OLS.",
            "Mélanger Test et Déploiement sans validation croisée en invoquant le Théorème Central Limite."
        ],
        correctIndexes: [1]
    },
    {
        question: "A quoi s'apparente la démarche d'appliquer les moindres carrés (minimiser MSE) comparativement à l'algorithme de descente gradient ?",
        options: [
            "OLS est la solution analytique stricte en un coup par résolution paramétrique d'équation.",
            "Le Gradient est une exploration incrémentale/numérique itérative de la fonction J pour glisser au fond du bol.",
            "Leur opposition ressemble à Moteur Thermique / Roue Carrée.",
            "OLS ne produira systématiquement que des biais infinis."
        ],
        correctIndexes: [0, 1]
    },
    {
        question: "Quand le chercheur écrit E_c = 1/2 m v² dans Polynôme.txt, il sous-entend de façon tacite que par ce postulat physique :",
        options: [
            "L'énergie étant au carré vis-à-vis de la vitesse, on peut s'attendre à ce que la distance d'arrêt s'efforce de suivre une polynomialité de degré 2 (quadratique) de ce descripteur Vitesse (v).",
            "La constante 'm' obligera l'algorithme à employer une régression l1.",
            "Il faut éviter toute forme d'interaction entre la masse et le temps.",
            "Une dimensionnalité cubique est seule capable de représenter l'inertie dans un modèle de machine learning de freins ABS."
        ],
        correctIndexes: [0]
    },
    {
        question: "L'augmentation aveugle du degré polynomial sur un set comportant du Bruit est une recette assurée pour...",
        options: [
            "Trouver l'équation parfaite de Gausse Logit.",
            "Obliger le modèle à retenir de force le bruit et perdre totalement le signal originel global.",
            "Une baisse continue miraculeuse de l'erreur Test.",
            "Prouver l'homoscédasticité du processus."
        ],
        correctIndexes: [1]
    },
    {
        question: "D'après la synthèse « À Retenir » sur la Polynôme, quelle est la définition expresse (au mot près) du Surapprentissage ?",
        options: [
            "Méthode stochastique garantissant le Biais unitaire idéal.",
            "Bête noire du data scientist : un modèle qui apprend par cœur les données d'entrée, mais qui est peu stable et n'a aucune capacité de généralisation.",
            "Outil magiquement capable de réparer la multicolinéarité grâce au seuillage ROC-AUC.",
            "L'introduction des degrés d'Euler de niveau N."
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
        question: "Un étudiant ayant répondu tout l'entraînement, mais échouant dès qu'il affronte un contrôle avec des valeurs X légèrement déplacées d'un virgule souffre métaphoriquement selon le professeur de :",
        options: [
            "Précision optimale couplée à un Rappel Inversé.",
            "D'Overfitting (Surapprentissage des annales en l'occurrence).",
            "D'Underfitting (N'ayant jamais ouvert son livre).",
            "D'un fort Bias."
        ],
        correctIndexes: [1]
    },
    {
        question: "Les conclusions portées à la fin réitèrent quelles étapes clés sur l'interprétation d'un modèle OLS ?",
        options: [
            "Coefficients exprimant la force/impact direct par incrément d'une variable tout choses égales par ailleurs.",
            "Test Statistiques vérifiant l'importance du Modèle et de chaque paramètre distinct.",
            "R-Carré dictant combien la variable indépendante X est orthogonale à P.",
            "Outils diagnostics des résidus."
        ],
        correctIndexes: [0, 1, 3]
    },
    {
        question: "C'est la fin du QCM des PDF. Pour rappel final, quelle métrique de classification porte le rapport Précis Vrais Positifs sur Tous ceux que j'ai dit Positifs ?",
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
