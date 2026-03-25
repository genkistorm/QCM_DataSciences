const allQuestions = [
    // --- 8 QUESTIONS ORIGINALES DU QCM.PDF ---
    {
        question: "À propos de la régression linéaire multivariée, quelles affirmations sont correctes ?",
        options: [
            "Elle généralise la régression univariée en introduisant plusieurs variables explicatives.",
            "La convexité de la fonction de coût garantit l’absence de minimum local parasite dans le cadre quadratique standard.",
            "Elle ne peut être estimée que par descente de gradient.",
            "En présence de variables à des échelles très différentes, la convergence de la descente de gradient peut être ralentie."
        ],
        correctIndexes: [0, 1, 3]
    },
    {
        question: "Concernant les hypothèses du modèle de régression linéaire multiple, lesquelles sont correctes ?",
        options: [
            "L’homoscédasticité signifie que la variance des erreurs est constante.",
            "L’indépendance signifie que les variables explicatives sont mutuellement indépendantes.",
            "Une forte multicolinéarité peut dégrader l’interprétation et la stabilité des coefficients.",
            "La linéarité porte sur la relation entre Y et les paramètres, pas nécessairement sur la relation brute observée sans transformation."
        ],
        correctIndexes: [0, 2, 3]
    },
    {
        question: "À propos de la normalisation et des outils de scaling, quelles affirmations sont exactes ?",
        options: [
            "StandardScaler centre et réduit les variables.",
            "MinMaxScaler projette par défaut les variables dans l’intervalle [0,1].",
            "Normalizer travaille principalement variable par variable, en colonne.",
            "Pour une descente de gradient sur une régression linéaire multivariée, StandardScaler et MinMaxScaler sont généralement plus pertinents que Normalizer."
        ],
        correctIndexes: [0, 1, 3]
    },
    {
        question: "À propos de la régression logistique, quelles affirmations sont correctes ?",
        options: [
            "Elle modélise directement une variable quantitative continue.",
            "Elle modélise la probabilité d’un événement binaire à l’aide d’une fonction logistique.",
            "Le logit est le logarithme du rapport P(Y=1)/(1−P(Y=1)).",
            "Les coefficients s’interprètent directement comme des variations de probabilité constantes."
        ],
        correctIndexes: [1, 2]
    },
    {
        question: "À propos des métriques de classification, quelles affirmations sont correctes ?",
        options: [
            "La précision vaut TP / (TP + FP).",
            "Le rappel vaut TP / (TP + FN).",
            "Le taux de faux positifs vaut FP / (FP + TN).",
            "Une AUC de 0,5 correspond à une discrimination équivalente au hasard."
        ],
        correctIndexes: [0, 1, 2, 3]
    },
    {
        question: "Parmi les situations suivantes, lesquelles justifient de préférer certaines métriques ou certains diagnostics plutôt qu’une simple accuracy globale ?",
        options: [
            "Données déséquilibrées avec très peu de positifs.",
            "Nécessité métier de limiter les faux négatifs.",
            "Volonté d’évaluer la capacité du modèle indépendamment d’un seuil fixe.",
            "Modèle de régression linéaire où l’on cherche à interpréter R² et les résidus."
        ],
        correctIndexes: [0, 1, 2]
    },
    {
        question: "Dans un modèle de régression linéaire multiple, quelles situations peuvent rendre l’interprétation causale des coefficients problématique, même si les estimations numériques existent ?",
        options: [
            "Multicolinéarité forte entre variables explicatives.",
            "Variable omise pertinente corrélée à un régresseur inclus.",
            "Hétéroscédasticité.",
            "Interprétation naïve d’un coefficient sans notion de “toutes choses égales par ailleurs”."
        ],
        correctIndexes: [0, 1, 3]
    },
    {
        question: "Parmi les affirmations suivantes sur l’évaluation des modèles, lesquelles sont correctes ?",
        options: [
            "En régression linéaire, une MSE faible est favorable mais n’assure pas à elle seule le respect des hypothèses du modèle.",
            "En classification, une forte précision peut coexister avec un rappel faible.",
            "Une AUC proche de 1 indique une bonne capacité de séparation des classes sur l’ensemble des seuils.",
            "Les diagnostics résiduels restent inutiles dès qu’un modèle a de bonnes performances prédictives."
        ],
        correctIndexes: [0, 1, 2]
    },

    // --- REGRESSION LINEAIRE MULTIVARIEE (Cours) ---
    {
        question: "La régression linéaire multivariée est classée dans quel type d'apprentissage ?",
        options: [
            "Apprentissage non supervisé.",
            "Apprentissage par renforcement.",
            "Apprentissage supervisé.",
            "Apprentissage auto-supervisé."
        ],
        correctIndexes: [2]
    },
    {
        question: "Dans le cadre de la régression linéaire multivariée, qu'est-ce qui constitue \"autant de degrés de liberté pour approximer au mieux les données\" ?",
        options: [
            "Les nombreuses valeurs manquantes du système.",
            "Plusieurs variables proposées en entrée.",
            "La constante d'apprentissage.",
            "La division entre Train et Test."
        ],
        correctIndexes: [1]
    },
    {
        question: "Si l'on a n variables d'entrée, comment se présente mathématiquement la fonction hypothèse h ?",
        options: [
            "h(x) = θ_0 + θ_1 x_1 + θ_2 x_2 + ... + θ_n x_n",
            "h(x) = θ_0 * θ_1 * x_1 * ... * θ_n",
            "h(x) = x_0 + x_1 + ... + x_n",
            "h(x) = log(θ_0 + θ_1 x_1)"
        ],
        correctIndexes: [0]
    },
    {
        question: "Les données d'entrée s'organisent sous forme matricielle. Si on a m observations et n variables, quelle est la dimension de la matrice X de base ?",
        options: [
            "(n, m)",
            "(m, n)",
            "(m, m)",
            "(n+1, m)"
        ],
        correctIndexes: [1]
    },
    {
        question: "Pour optimiser la fonction de coût J dans la régression linéaire multivariée par descente de gradient, doit-on s'inquiéter de la présence de minima locaux ?",
        options: [
            "Oui, car la fonction de coût J est très instable.",
            "Non, car J étant toujours convexe, il n'y a pas de problème de minima locaux.",
            "Oui, la plupart des modèles régressifs échouent sans algorithme complexe de relance.",
            "Non, car la descente de gradient ignore les minima locaux mathématiquement."
        ],
        correctIndexes: [1]
    },
    {
        question: "Si deux variables ont des échelles très différentes (ex: 1 à 8 pour les pièces, 20 à 200 pour la superficie), quel est l'impact sur l'optimisation ?",
        options: [
            "Cela empêche toute inversion matricielle.",
            "Cela n'a absolument aucun impact sur la descente de gradient.",
            "Ce déséquilibre modifie la topologie de la fonction J et peut fortement ralentir la convergence de la descente de gradient.",
            "Cela provoque immédiatement un problème de multicolinéarité."
        ],
        correctIndexes: [2]
    },
    {
        question: "Quelles sont les 4 hypothèses fondamentales de la régression linéaire multiple citées dans le cours ?",
        options: [
            "Linéarité et Indépendance.",
            "Variance constante (homoscédasticité).",
            "Absence de Multicolinéarité (les variables explicatives ne doivent pas être trop fortement corrélées entre elles).",
            "Normalité stricte de toutes les variables X explicatives indépendamment de Y."
        ],
        correctIndexes: [0, 1, 2]
    },
    {
        question: "Que signifie le terme 'Homoscédasticité' dans les hypothèses du modèle ?",
        options: [
            "Que les variables indépendantes dépendent les unes des autres.",
            "Que la moyenne des résidus est strictement unitaire.",
            "Que la variance des termes d'erreur est constante pour toutes les valeurs des variables indépendantes.",
            "Que toutes les variables ont été standardisées par StandardScaler."
        ],
        correctIndexes: [2]
    },
    {
        question: "Quel scaler, disponible dans sklearn.preprocessing, effectue un \"centrage réduction\" ?",
        options: [
            "Normalizer.",
            "MinMaxScaler.",
            "StandardScaler.",
            "AbsScaler."
        ],
        correctIndexes: [2]
    },
    {
        question: "Quelles caractéristiques définissent le StandardScaler ?",
        options: [
            "Il normalise les variables pour qu'elles évoluent entre 0 et 1.",
            "Il donne des variables avec une moyenne nulle (μ = 0).",
            "Il donne des variables avec une variance égale à 1 (σ = 1).",
            "Pour chaque observation, on retranche la moyenne et on divise par l'écart-type."
        ],
        correctIndexes: [1, 2, 3]
    },
    {
        question: "Quelle est la formule théorique du MinMaxScaler décrite dans le cours pour une standardisation vers [0,1] ?",
        options: [
            "(X - min(X)) / (max(X) - min(X))",
            "(X - moyenne(X)) / écart-type",
            "(X - max(X)) / min(X)",
            "(X - médiane(X)) / variance(X)"
        ],
        correctIndexes: [0]
    },
    {
        question: "Comment se comporte le Normalizer par rapport aux deux autres Scalers (Standard et MinMax) ?",
        options: [
            "Il travaille en lignes (pour les observations) et non en colonnes.",
            "Il permet d'obtenir une norme unité (l1 ou l2) pour chaque observation.",
            "Il est jugé 'moins pertinent pour la descente de gradient'.",
            "Il retranche systématiquement la moyenne."
        ],
        correctIndexes: [0, 1, 2]
    },
    {
        question: "Pourquoi le Normalizer est-il plutôt utile ?",
        options: [
            "Quand les distances relatives entre observations sont en jeu (ex: classification de textes, clustering).",
            "Pour accélérer la descente de gradient de la régression multivariée.",
            "Pour transformer de la classification en régression aléatoire.",
            "Pour traiter les données très fortement déséquilibrées en classification logistique."
        ],
        correctIndexes: [0]
    },
    {
        question: "Quel Scaler produit une distribution plus étalée (typique de -2 à +4) là où l'autre la contraint fermement (ex: entre 0 et 1) ?",
        options: [
            "StandardScaler s'étale, MinMaxScaler modifie l'intervalle fermement.",
            "MinMaxScaler s'étale de -2 à 4.",
            "Normalizer étire la variance à l'infini.",
            "Ils ont visuellement la même fourchette de valeurs absolues."
        ],
        correctIndexes: [0]
    },
    {
        question: "L'approche analytique de la régression linéaire ('Moindres Carrés' ou OLS) requiert une modification de la matrice X en ajoutant...",
        options: [
            "Une ligne contenant l'écart-type de Y.",
            "Une colonne de 1.",
            "Un vecteur orthogonal strict.",
            "Rien, la matrice (m, n) reste intacte et suffit en l'état."
        ],
        correctIndexes: [1]
    },
    {
        question: "La dimension du vecteur de paramètres Theta attendu par la résolution analytique (OLS) est de :",
        options: [
            "m (le nombre d'observations).",
            "n+1.",
            "(m, n).",
            "2n."
        ],
        correctIndexes: [1]
    },
    {
        question: "Comment s'appelle l'équation obtenue en annulant la dérivée de J par rapport à θ ?",
        options: [
            "L'Équation Anormale.",
            "L'Équation Normale.",
            "Le Théorème de OLS.",
            "L'Hypothèse de Fisher."
        ],
        correctIndexes: [1]
    },
    {
        question: "L'équation normale analytique pour trouver Theta (θ) est :",
        options: [
            "θ = (X^T * X) * X * Y",
            "θ = (X^T * X)^-1 * X^T * Y",
            "θ = (X * X^T)^-1 * Y",
            "θ = X^T * (X^T * X)^-1 * Y"
        ],
        correctIndexes: [1]
    },
    {
        question: "Quelle condition mathématique est requise pour utiliser la forme analytique exacte de la régression linéaire ?",
        options: [
            "La matrice (X^T * X) doit être non singulière (inversible).",
            "La matrice X doit être strictement de taille n = m.",
            "Toutes les valeurs de Y doivent être positives.",
            "(X^T * X) doit être une matrice identité pure."
        ],
        correctIndexes: [0]
    },
    {
        question: "Si les colonnes de X sont linéairement dépendantes, que se passe-t-il ?",
        options: [
            "J est instantanément trouvée à zéro.",
            "(X^T * X) est singulière, la solution analytique classique n'existe pas.",
            "La descente de gradient devient de facto obligatoire sous R.",
            "Le test de Fisher corrige automatiquement l'inversion de matrice."
        ],
        correctIndexes: [1]
    },
    {
        question: "Quelle est la complexité algorithmique de la résolution analytique de la régression linéaire (selon le PDF) ?",
        options: [
            "O(n)",
            "O(n^2)",
            "O(n^3)",
            "O(log(n))"
        ],
        correctIndexes: [2]
    },
    {
        question: "La résolution analytique O(n^3) doit idéalement être privilégiée :",
        options: [
            "Pour des problèmes de très grande dimension (Millions de variables).",
            "Pour des problèmes de dimension raisonnable.",
            "Pour les réseaux de neurones complexes.",
            "La descente de gradient est toujours l'approche préconisée pour les très gros volumes."
        ],
        correctIndexes: [1, 3]
    },
    {
        question: "Que représente un coefficient (par exemple b_1) dans l'interprétation d'un modèle linéaire explicatif ?",
        options: [
            "L'effet moyen d'une augmentation d'une unité de la variable indépendante X_1 sur la variable dépendante Y.",
            "Cet effet est pensé \"tout le reste étant égal\" (indépendamment du reste).",
            "L'indice de corrélation maximal global.",
            "La racine carrée de la variance partielle."
        ],
        correctIndexes: [0, 1]
    },
    {
        question: "Que mesure le R-carré (R²) ?",
        options: [
            "La proportion des observations jugées parfaites.",
            "La proportion de la variance de la variable dépendante expliquée par le modèle.",
            "L'erreur quadratique absolue cumulée.",
            "Le ratio de variables indépendantes par rapport au nombre d'observations."
        ],
        correctIndexes: [1]
    },
    {
        question: "Quel test statistique évoqué dans le PDF permet la vérification de la significativité du modèle dans son ENSEMBLE ?",
        options: [
            "Test de Student.",
            "Test de Fisher.",
            "Test de Durbin-Watson.",
            "R-carré de Pearson."
        ],
        correctIndexes: [1]
    },
    {
        question: "Quel test statistique évoqué dans le PDF permet la vérification de la significativité des COEFFICIENTS de manière isolée ?",
        options: [
            "Test de Fisher.",
            "Test de Kolmogorov.",
            "Test de Student.",
            "Erreur Quadratique Moyenne."
        ],
        correctIndexes: [2]
    },
    {
        question: "Lors de la phase de diagnostic du modèle de régression, on analyse les résidus pour détecter :",
        options: [
            "Des violations des hypothèses telles que l'homoscédasticité.",
            "La présence de minima locaux dans la fonction J.",
            "Des violations potentielles de l'hypothèse de normalité et d'indépendance.",
            "Le learning rate optimal."
        ],
        correctIndexes: [0, 2]
    },
    {
        question: "L'Erreur Quadratique Moyenne (MSE) est une métrique d'évaluation. Quelle affirmation est correcte ?",
        options: [
            "Elle mesure la moyenne des carrés des écarts entre valeurs prédites et réelles.",
            "Une MSE faible indique toujours l'absence de surapprentissage.",
            "Une MSE faible indique que le modèle prédit les observations avec une grande précision.",
            "Elle se calcule avant la normalisation des features obligatoirement."
        ],
        correctIndexes: [0, 2]
    },
    {
        question: "Selon la section \"À retenir\" de la Régression Lineaire Multivariée, OLS signifie :",
        options: [
            "Online Learning Standard.",
            "Ordinary Least Squares.",
            "Optimized Linear Search.",
            "Orthogonal Least Series."
        ],
        correctIndexes: [1]
    },
    {
        question: "Au sujet du centrage réduction en R, le PDF note que la fonction utile est :",
        options: [
            "scale(center=TRUE, scale=TRUE)",
            "normalize(mean=0, sd=1)",
            "minmax()",
            "standard_scaler()"
        ],
        correctIndexes: [0]
    },
    
    // --- REGRESSION POLYNOMIALE (Cours) ---
    {
        question: "La régression polynomiale est fondamentalement présentée comme :",
        options: [
            "Un modèle purement non-linéaire sur sa structure de calcul.",
            "Un modèle linéaire dans sa structure de calcul (vis-à-vis des paramètres), mais introduisant de la non-linéarité vis-à-vis des variables.",
            "Une alternative complète remplaçant la descente de gradient.",
            "Une forme particulière de régression logistique sans probabilité."
        ],
        correctIndexes: [1]
    },
    {
        question: "Les calculs réels utilisés en régression polynomiale sont :",
        options: [
            "Identiques à ceux de la régression linéaire multiple traditionnelle.",
            "Résolus via des méthodes d'arbres de décisions stochastiques.",
            "Exclusifs et ne partagent rien avec la descente de gradient linéaire.",
            "Réalisés avec un algorithme de SVM obligatoirement."
        ],
        correctIndexes: [0]
    },
    {
        question: "Le cours introduit deux problématiques fondamentales illustrées par l'ajout de dimensions polynomiales :",
        options: [
            "Le surapprentissage (overfitting).",
            "Le seuillage du log-odds.",
            "Le compromis biais-variance.",
            "La colinéarité causée par l'encodage One-Hot."
        ],
        correctIndexes: [0, 2]
    },
    {
        question: "Un polynôme de degré 1 correspond visuellement et mathématiquement à :",
        options: [
            "Une parabole.",
            "Une courbe cubique.",
            "Une droite affine classique.",
            "Une fonction S (sigmoïde)."
        ],
        correctIndexes: [2]
    },
    {
        question: "L'ajout d'un terme quadratique (ax² + bx + c) transforme la courbe en :",
        options: [
            "Parabole, ajoutant une première courbure.",
            "Courbe cubique à deux inflexions.",
            "Ligne exponentielle infinie.",
            "Droite oblique complexe."
        ],
        correctIndexes: [0]
    },
    {
        question: "Un polynôme de degré 3 gagne en flexibilité... ",
        options: [
            "Mais élimine complétement chaque variance existante.",
            "En présentant avec un second point d'inflexion.",
            "Et oblige le remplacement des X d'origine par zéro.",
            "Mais ne peut jamais modéliser une relation décroissante."
        ],
        correctIndexes: [1]
    },
    {
        question: "Le jeu de données \"cars\" utilisé en exemple dans la régression polynomiale met en relation :",
        options: [
            "Le prix des appartements à Paris en fonction du volume du garage.",
            "La distance d'arrêt du véhicule en fonction de sa vitesse.",
            "Le taux de survie des passagers et la taille des voitures.",
            "Une relation suggérée quadratique (E_c = 1/2 m v²)."
        ],
        correctIndexes: [1, 3]
    },
    {
        question: "Sur les données cars, la comparaison visuelle montre que :",
        options: [
            "La régression linéaire simple n'est pas parfaite car il manque une courbure.",
            "La régression polynomiale d'ordre 2 suit bien mieux les données.",
            "La droite affine est toujours le meilleur choix indépendamment du phénomène physique.",
            "La régression de degré 2 provoque immédiatement un surapprentissage cataclysmique sur ces données."
        ],
        correctIndexes: [0, 1]
    },
    {
        question: "Le surapprentissage (Overfitting) se produit lorsque :",
        options: [
            "On choisit un degré de polynôme trop grand.",
            "Le modèle passe par un nombre élevé de points d'apprentissage en adoptant une forme très oscillante.",
            "Le modèle a un biais particulièrement élevé.",
            "Le modèle généralise parfaitement à de nouvelles données."
        ],
        correctIndexes: [0, 1]
    },
    {
        question: "Dans la simulation 1 et 2 du cours comparant l'ordre 1, 3 et 9 sur 10 points :",
        options: [
            "L'ordre 9 passe par tous les points d'apprentissage mais oscille erratiquement.",
            "L'ordre 9 est extrêmement stable si on change un tout petit peu le vecteur x.",
            "Un petit changement de x entraîne d'énormes écarts de y pour le modèle d'ordre 9.",
            "L'ordre 3 échoue à expliquer la tendance de base."
        ],
        correctIndexes: [0, 2]
    },
    {
        question: "L'instabilité du modèle d'ordre 9 prouve que :",
        options: [
            "Sa variance est extrêmement faible.",
            "Le meilleur ajustement sur les données de train n'implique pas la stabilité.",
            "Il fait preuve d'une grande confiance en prévision.",
            "Le modèle extrapole très mal et justifie le nom d'overfitting."
        ],
        correctIndexes: [1, 3]
    },
    {
        question: "A quel contexte scolaire le cours compare-il intuitivement le surapprentissage (overfitting) ?",
        options: [
            "Un étudiant qui refuse de lire les annales et improvise totalement.",
            "Un étudiant qui triche en examen.",
            "Un étudiant qui apprendrait des annales par cœur sans savoir appliquer les raisonnements dans d'autres contextes.",
            "Un étudiant qui comprend chaque concept trop lentement."
        ],
        correctIndexes: [2]
    },
    {
        question: "Comment détecte-t-on formellement et quantifie-t-on le surapprentissage dans le cadre du compromis biais-variance ?",
        options: [
            "En divisant les données en données d'apprentissage et données de test (prévision).",
            "En regardant seulement l'évolution du R² sur les données d'apprentissage.",
            "En étudiant un second polynôme orthogonal.",
            "On mesure l'erreur d'apprentissage par rapport à l'erreur de prévision (test) en faisant varier la complexité."
        ],
        correctIndexes: [0, 3]
    },
    {
        question: "Comment évolue l'Erreur d'apprentissage lorsque la complexité du modèle (ex: le degré du polynôme) augmente ?",
        options: [
            "Elle augmente puis diminue.",
            "Elle diminue continuellement avec la complexité.",
            "Elle ne change pas, seule l'erreur test change.",
            "Elle stagne après le degré 2."
        ],
        correctIndexes: [1]
    },
    {
        question: "Comment évolue l'Erreur de prévision (Test) lorsque la complexité du modèle augmente ?",
        options: [
            "Diminue d'abord, puis augmente à partir d'un certain degré (début du surapprentissage).",
            "Diminue indéfiniment sans jamais remonter.",
            "Augmente en continu de manière proportionnelle au biais.",
            "Elle dessine une courbe en forme de 'U'."
        ],
        correctIndexes: [0, 3]
    },
    {
        question: "Le Modèle Optimal visé par le data scientist est celui qui :",
        options: [
            "Passe par l'intégralité des points de Test sans exception.",
            "Minimise l'erreur d'apprentissage au maximum possible (vers 0).",
            "Minimise l'erreur d'apprentissage et l'erreur de prévision simultanément, en se plaçant à l'équilibre idéal.",
            "Maximise le compromis Biais au profit de l'Indépendance."
        ],
        correctIndexes: [2]
    },
    {
        question: "Un modèle en \"Sous-apprentissage\" (Underfitting) est décrit par :",
        options: [
            "Fort Biais.",
            "Faible Variance.",
            "Le modèle est trop simple.",
            "La prévision est stable (peu sensible aux variations) mais inexacte."
        ],
        correctIndexes: [0, 1, 2, 3]
    },
    {
        question: "Dans la situation de sous-apprentissage (ex: droite face à parabole), la recommandation est :",
        options: [
            "D'augmenter significativement le nombre de données.",
            "D'augmenter la complexité du modèle.",
            "De baisser drastiquement le learning rate.",
            "De forcer l'homoscédasticité des données."
        ],
        correctIndexes: [1]
    },
    {
        question: "Un modèle en \"Surapprentissage\" (Overfitting) se définit selon le cours par :",
        options: [
            "Un faible Biais sur les données d'entraînement.",
            "Une forte Variance.",
            "La nécessité de devoir simplifier le modèle.",
            "Une erreur d'apprentissage colossale."
        ],
        correctIndexes: [0, 1, 2]
    },
    {
        question: "Le Biais du modèle correspond selon la définition du cours à :",
        options: [
            "Une erreur causée par la suppression abrupte du Test set.",
            "La constante d'apprentissage aléatoirement tirée.",
            "Une erreur systématique du modèle sur les données d'apprentissage par manque de capacité structurelle.",
            "L'oscillation irrationnelle du modèle entre les points."
        ],
        correctIndexes: [2]
    },
    {
        question: "La Variance du modèle représente :",
        options: [
            "L'écart-type exclusif de la variable Y.",
            "La mesure de la stabilité du modèle et sa sensibilité aux variations des données d'apprentissage.",
            "L'indicateur de multicolinéarité VIF.",
            "La différence entre l'âge et la distance constatée."
        ],
        correctIndexes: [1]
    },
    {
        question: "La notion d'universalité du compromis biais-variance signifie que :",
        options: [
            "Ce concept ne s'applique qu'à la régression polynomiale.",
            "Il apparaît dans toute situation de modélisation.",
            "Toutes les méthodes (forêts aléatoires, réseaux de neurones, SVM) y sont confrontées.",
            "On peut toujours s'affranchir de vérifier la complexité si la PCA a été utilisée."
        ],
        correctIndexes: [1, 2]
    },
    {
        question: "Tous les algorithmes de machine learning cités par le cours comme soumis au compromis biais-variance incluent :",
        options: [
            "Forêts aléatoires.",
            "Réseaux de neurones.",
            "K-Means stochastiques pure forme.",
            "SVM (Support Vector Machines)."
        ],
        correctIndexes: [0, 1, 3]
    },
    {
        question: "Face à n'importe quel algorithme, quelle méthode systématisée permet de détecter l'atteinte du compromis biais-variance optimal ?",
        options: [
            "Minimiser le critère J par Moindres Carrés Uniquement.",
            "Ignorer la Variance pour se concentrer sur l'erreur quadratique absolue de Train.",
            "La division systématique de l'échantillon en données d'apprentissage et données de test.",
            "La suppresion de la constante d'ordonnée polynomiale."
        ],
        correctIndexes: [2]
    },
    {
        question: "En synthèse de la régression polynomiale, le surapprentissage se traduit formellement quand :",
        options: [
            "Le modèle n'a aucune capacité de généralisation en dépit d'une erreur empirique minime.",
            "Le degré polynomial choisi est trop élevé vis-à-vis des données réelles.",
            "Le modèle ne peut plus s'entraîner par descente de gradient car O(n³).",
            "La variance est quasiment éradiquée vers 0."
        ],
        correctIndexes: [0, 1]
    }
];
