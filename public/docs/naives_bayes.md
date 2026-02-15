# Gaussian Naive Bayes Classifier

> 📦 Projet source : [ml-from-scratch / Naive Bayes](https://github.com/Padevend/ml-from-scratch/tree/main/Naive_bayes)

---

## 1. Qu'est-ce que le Gaussian Naive Bayes ?

Le **Gaussian Naive Bayes** est un algorithme de classification qui prédit la catégorie d'une nouvelle donnée en utilisant les **probabilités**.

> Exemple : Si on connaît la taille et le poids d'un animal, peut-on prédire si c'est un chat ou un chien ?

L'algorithme suppose que les données suivent une **loi normale** (courbe en cloche) pour chaque classe.

---

## 2. Les données

### 2.1 Structure du dataset

On a $m$ exemples. Chaque exemple $i$ est composé de :

| Symbole | Signification |
|---------|---------------|
| $x^{(i)} = (x_1^{(i)}, x_2^{(i)}, ..., x_n^{(i)})$ | Les caractéristiques (taille, poids, âge...) |
| $y^{(i)}$ | La classe (chat, chien, oiseau...) |
| $m$ | Nombre d'exemples |
| $n$ | Nombre de caractéristiques |

### 2.2 Exemple concret

Pour prédire si un fruit est une **pomme** ou une **orange** :

| Fruit | Poids (g) | Diamètre (cm) | Couleur | Classe |
|-------|-----------|---------------|---------|--------|
| 1 | 150 | 7 | Rouge | Pomme |
| 2 | 130 | 6.5 | Orange | Orange |
| 3 | 160 | 7.5 | Rouge | Pomme |
| ... | ... | ... | ... | ... |

---

## 3. Le théorème de Bayes (simplifié)

### 3.1 La formule magique

Le classifieur Naive Bayes repose sur cette formule :

$$\boxed{P(\text{Classe} \mid \text{Données}) = \frac{P(\text{Données} \mid \text{Classe}) \times P(\text{Classe})}{P(\text{Données})}}$$

### 3.2 Explication simple

Pour notre fruit :

- **Probabilité a priori** $P(\text{Pomme})$ : quelle est la proportion de pommes dans mon dataset ? (ex: 60%)
- **Vraisemblance** $P(\text{Poids}=150g, \text{Diamètre}=7cm \mid \text{Pomme})$ : chez les pommes, à quel point est-il fréquent d'avoir ce poids et ce diamètre ?
- **Preuve** $P(\text{Données})$ : à quel point est-il fréquent d'observer ces caractéristiques en général ?

### 3.3 La règle de décision

On calcule ce score pour chaque classe et on prend la plus probable :

$$\boxed{\hat{y} = \arg\max_{c} \left[ P(\text{Classe}=c) \times P(x_1 \mid c) \times P(x_2 \mid c) \times ... \times P(x_n \mid c) \right]}$$

---

## 4. L'hypothèse "Naive"

### 4.1 Qu'est-ce qui est "naïf" ?

L'algorithme suppose que **toutes les caractéristiques sont indépendantes** entre elles pour une classe donnée.

> Exemple naïf : Pour les pommes, le poids et le diamètre sont considérés comme indépendants.

Dans la réalité, le poids et le diamètre sont corrélés (une plus grosse pomme est généralement plus lourde). Mais cette simplification rend les calculs possibles !

### 4.2 La simplification mathématique

Sans cette hypothèse :

$$P(x_1, x_2, ..., x_n \mid c) est \text{compliqué à calculer}$$

Avec l'hypothèse naive :

$$\boxed{P(x_1, x_2, ..., x_n \mid c) = P(x_1 \mid c) \times P(x_2 \mid c) \times ... \times P(x_n \mid c)}$$

---

## 5. Le "Gaussian" dans Gaussian Naive Bayes

### 5.1 Pourquoi gaussien ?

Pour les caractéristiques **continues** (poids, taille, température...), on suppose qu'elles suivent une **distribution normale** (courbe en cloche) pour chaque classe.

### 5.2 La formule de la Gaussienne

$$P(x \mid c) = \frac{1}{\sqrt{2\pi\sigma_c^2}} e^{-\frac{(x - \mu_c)^2}{2\sigma_c^2}}$$

---

## 6. L'apprentissage (entraînement)

Pendant l'apprentissage, on calcule simplement pour chaque classe :

### 6.1 La probabilité a priori

$$\boxed{P(\text{Classe}) = \frac{\text{Nombre d'exemples de cette classe}}{\text{Nombre total d'exemples}}}$$

Exemple : 40 pommes et 60 oranges sur 100 fruits
- $P(\text{Pomme}) = 40/100 = 0.4$
- $P(\text{Orange}) = 60/100 = 0.6$

### 6.2 La moyenne pour chaque caractéristique

$$\boxed{\mu_{c,j} = \frac{\text{Somme des valeurs de } x_j \text{ pour la classe } c}{\text{Nombre d'exemples de classe } c}}$$

Exemple pour le poids des pommes : (150 + 160 + 140 + ...) / 40

### 6.3 L'écart-type pour chaque caractéristique

$$\boxed{\sigma_{c,j} = \sqrt{\frac{\text{Somme des }(x_j - \mu_{c,j})^2}{\text{Nombre d'exemples de classe } c}}}$$

C'est une mesure de la dispersion des données autour de la moyenne.

---

## 7. La prédiction (étape par étape)

Pour un nouveau fruit avec poids = 155g et diamètre = 7.2cm :

### Étape 1 : Probabilité que ce soit une pomme

$$P(\text{Pomme} \mid \text{données}) \propto P(\text{Pomme}) \times P(155g \mid \text{Pomme}) \times P(7.2cm \mid \text{Pomme})$$

Où $P(155g \mid \text{Pomme})$ est calculé avec la formule gaussienne :
- Si $\mu_{pomme,poids} = 150g$ et $\sigma_{pomme,poids} = 20g$
- $P(155g \mid \text{Pomme}) \approx 0.019$ (valeur lue sur la courbe en cloche)

### Étape 2 : Probabilité que ce soit une orange

$$P(\text{Orange} \mid \text{données}) \propto P(\text{Orange}) \times P(155g \mid \text{Orange}) \times P(7.2cm \mid \text{Orange})$$

### Étape 3 : Comparaison

On compare les deux valeurs et on prend la plus grande.

---

## 8. Astuce pratique : les logarithmes

### 8.1 Le problème des petits nombres

En multipliant plusieurs petites probabilités (ex: 0.3 × 0.2 × 0.1 = 0.006), on obtient des nombres très petits qui peuvent causer des erreurs informatiques.

### 8.2 La solution

On utilise les **logarithmes** car :

$$\log(a \times b) = \log(a) + \log(b)$$

La règle de décision devient :

$$\boxed{\hat{y} = \arg\max_{c} \left[ \log P(c) + \sum_{j=1}^{n} \log P(x_j \mid c) \right]}$$

C'est plus stable numériquement et tout aussi efficace.

---

## 9. Avantages et limites simples

### Points forts
- **Rapide** : apprentissage et prédiction très rapides
- **Peu de données** : fonctionne même avec peu d'exemples
- **Probabilités** : donne un score de confiance

### Points faibles
- **Hypothèse naïve** : l'indépendance des caractéristiques est rarement vraie
- **Distribution normale** : suppose que les données suivent une courbe en cloche

---

## 11. Exemple réel d'utilisation

Le Gaussian Naive Bayes est utilisé pour :
- **Classification de textes** (spam / non-spam)
- **Diagnostic médical** (maladie / pas maladie)
- **Reconnaissance d'images simples**
- **Systèmes de recommandation**

---
