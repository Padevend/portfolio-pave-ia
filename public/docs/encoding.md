# Encodage des variables catégorielles (Feature Encoding)

> 📦 Prétraitement fondamental en Machine Learning & NLP

---

## 1. Problématique

Les algorithmes de Machine Learning opèrent sur des **vecteurs numériques** :

$$
x \in \mathbb{R}^n
$$

Or, de nombreux datasets contiennent des **variables catégorielles** :

* pays : Cameroun, France, Canada
* couleur : rouge, vert, bleu
* texte : mots, sous-mots, tokens

Ces variables appartiennent à un **ensemble discret fini** :

$$
x \in \mathcal{C} = {c_1, c_2, \dots, c_K}
$$

Impossible donc de les utiliser directement dans :

* distances (KNN)
* produits scalaires (régression, réseaux)
* optimisations différentiables

---

## 1.1 Objectif de l’encodage

On cherche une application :

$$
\phi : \mathcal{C} \rightarrow \mathbb{R}^d
$$

transformant une catégorie en **représentation numérique exploitable**.

Selon l’algorithme choisi :

* $d = 1$ (Label encoding)
* $d = K$ (One-Hot)
* $d = 1$ (Target encoding)
* $d \gg K$ (BPE / NLP)

---

# 2. Label Encoding

## 2.1 Principe

On associe un **indice entier unique** à chaque catégorie.

$$
\phi(c_k) = k-1
$$

---

## 2.2 Formulation

Soit :

$$
\mathcal{C} = {c_1, \dots, c_K}
$$

On définit :

$$
\phi(c_k) \in {0,1,\dots,K-1}
$$

---

## 2.3 Exemple

| Catégorie | Encodage |
| --------- | -------- |
| Rouge     | 0        |
| Vert      | 1        |
| Bleu      | 2        |

---

## 2.4 Propriétés mathématiques

La variable devient scalaire :

$$
x \in \mathbb{Z}
$$

Mais cela induit **un ordre artificiel** :

$$
0 < 1 < 2
$$

donc :

$$
d(0,2) > d(0,1)
$$

ce qui n’a **aucun sens sémantique**.

---

## 2.5 Avantages / Limites

### Avantages

* simple
* mémoire minimale $O(1)$

### Limites

* faux ordre
* biais dans distances et régressions

---

# 3. One-Hot Encoding

## 3.1 Principe

Chaque catégorie devient un **vecteur binaire orthogonal**.

---

## 3.2 Formulation

$$
\phi(c_k) = e_k
$$

où $e_k$ est le vecteur canonique :

$$
e_k = (0,\dots,1,\dots,0)^\top
$$

---

## 3.3 Exemple

Pour $K=3$ :

$$
Rouge = (1,0,0)
$$
$$
Vert = (0,1,0)
$$
$$
Bleu = (0,0,1)
$$

---

## 3.4 Propriétés géométriques

Orthogonalité :

$$
e_i^\top e_j =
\begin{cases}
1 & i=j \
0 & i\neq j
\end{cases}
$$

Distances :

$$
|e_i - e_j|_2 = \sqrt{2}
$$

Toutes les catégories sont **équidistantes**.

---

## 3.5 Complexité

Dimension :

$$
d = K
$$

Mémoire :

$$
O(mK)
$$

Problème si $K$ grand.

---

## 3.6 Avantages / Limites

### Avantages

* pas d’ordre
* robuste pour modèles linéaires

### Limites

* explosion dimensionnelle
* sparse matrix

---

# 4. Target Encoding

## 4.1 Principe

On remplace chaque catégorie par **l’espérance conditionnelle de la cible**.

---

## 4.2 Formulation

Pour une catégorie $c$ :

$$
\boxed{
\phi(c) =
\mathbb{E}[y \mid x=c]
}
$$

Estimation empirique :

$$
\phi(c)=
\frac{1}{N_c}
\sum_{i : x^{(i)}=c} y^{(i)}
$$

---

## 4.3 Interprétation statistique

C’est une estimation de :

$$
\hat{f}(c) \approx \mathbb{E}[y|c]
$$

Donc une **régression locale bayésienne**.

---

## 4.4 Régularisation (smoothing)

Pour éviter l’overfitting :

$$
\phi(c)=
\frac{N_c \mu_c + \alpha \mu}{N_c + \alpha}
$$

où :

* $\mu_c$ = moyenne locale
* $\mu$ = moyenne globale
* $\alpha$ = paramètre de lissage

---

## 4.5 Avantages / Limites

### Avantages

* faible dimension ($d=1$)
* très performant

### Limites

* fuite de données (data leakage)
* nécessite cross-validation

---

# 5. Byte Pair Encoding (BPE)

## 5.1 Contexte NLP

Dans le texte, l’espace catégoriel est immense :

$$
|\mathcal{V}| \gg 10^5
$$

Un One-Hot serait impossible.

---

## 5.2 Principe

BPE construit un **vocabulaire de sous-mots** par fusion itérative.

---

## 5.3 Algorithme

### Étape 1 — caractères initiaux

```
l o w
l o w e r
```

### Étape 2 — fusion paire fréquente

Si "lo" fréquent :

```
lo w
lo w e r
```

Répéter jusqu’à taille voulue.

---

## 5.4 Formulation probabiliste

On cherche à maximiser :

$$
\text{freq}(ab)
$$

Fusion :

$$
(a,b) \rightarrow ab
$$

Minimisant la longueur totale de description (compression).

---

## 5.5 Représentation vectorielle

Après tokenisation :

* soit One-Hot sur tokens
* soit embeddings :

$$
\phi(token) \in \mathbb{R}^d
$$

---

## 5.6 Avantages

* vocabulaire réduit
* gère mots inconnus
* base des LLM modernes

---

# 6. Comparaison théorique

| Méthode | Dimension | Ordre artificiel | Risque overfit | Cas d’usage         |
| ------- | --------- | ---------------- | -------------- | ------------------- |
| Label   | 1         | Oui              | Faible         | arbres              |
| One-Hot | K         | Non              | Faible         | modèles linéaires   |
| Target  | 1         | Non              | Élevé          | tabulaire supervisé |
| BPE     | variable  | Non              | Faible         | NLP                 |

---

# 7. Choix pratique

## Petit $K$

→ One-Hot

## Grand $K$

→ Target encoding

## NLP

→ BPE

## Arbres (RandomForest, XGBoost)

→ Label encoding acceptable

---

# 8. Résumé mathématique

### Mapping général

$$
\phi : \mathcal{C} \rightarrow \mathbb{R}^d
$$

### Label

$$
\phi(c)=k
$$

### One-Hot

$$
\phi(c)=e_k
$$

### Target

$$
\phi(c)=\mathbb{E}[y|c]
$$

### BPE

$$
texte \rightarrow tokens \rightarrow embeddings
$$

---

# 9. Conclusion

L’encodage transforme un **espace symbolique discret** en **espace vectoriel continu**, condition nécessaire pour :

* distances
* produits scalaires
* optimisation

Le choix dépend :

* cardinalité
* type de modèle
* risque de sur-apprentissage
* nature des données (tabulaire vs texte)

Ainsi, l’encodage constitue une étape **mathématiquement cruciale** du pipeline ML, au même titre que la normalisation ou la réduction de dimension.
