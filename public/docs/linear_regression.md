# Régression Linéaire

> 📦 Projet source : [ml-from-scratch / regression_lineaire](https://github.com/Padevend/ml-from-scratch/tree/main/regression_lineaire)

---

## 1. Dataset

### 1.1 Représentation

On considère un dataset $\mathcal{D}$ composé de $m$ exemples. Chaque exemple $i$ est un couple $(x^{(i)},\, y^{(i)})$ où :

| Symbole | Meaning |
|---|---|
| $x^{(i)} \in \mathbb{R}^n$ | Vecteur de caractéristiques de l'exemple $i$ |
| $y^{(i)} \in \mathbb{R}$ | Valeur cible (label) associée |
| $m$ | Nombre total d'exemples |
| $n$ | Nombre de caractéristiques |

$$\mathcal{D} = \left\{\, \big(x^{(1)}, y^{(1)}\big),\; \big(x^{(2)}, y^{(2)}\big),\; \dots,\; \big(x^{(m)}, y^{(m)}\big) \,\right\}$$

### 1.2 Convention : ajout du biais dans $x$

Pour simplifier les calculs, on ajoute une colonne constante égale à 1 en première position de chaque vecteur :

$$x^{(i)} = \begin{pmatrix} 1 \\ x_1^{(i)} \\ x_2^{(i)} \\ \vdots \\ x_n^{(i)} \end{pmatrix} \in \mathbb{R}^{n+1}$$

Le premier élément correspond au terme de biais $b$ dans le modèle (voir §2). Le vecteur de paramètres sera donc de dimension $n+1$.

### 1.3 Matrices $X$ et $Y$

On empile tous les exemples dans une matrice $X$ et un vecteur $Y$ :

$$X = \begin{pmatrix} — & (x^{(1)})^\top & — \\ — & (x^{(2)})^\top & — \\ \vdots & \vdots & \vdots \\ — & (x^{(m)})^\top & — \end{pmatrix} \in \mathbb{R}^{m \times (n+1)}$$

$$Y = \begin{pmatrix} y^{(1)} \\ y^{(2)} \\ \vdots \\ y^{(m)} \end{pmatrix} \in \mathbb{R}^{m}$$

Chaque **ligne** de $X$ est un exemple ; chaque **colonne** (après la première) est une caractéristique.

---

## 2. Modèle — $f(x) = ax + b$

### 2.1 Cas univarié ($n = 1$)

Le modèle prédit une valeur $\hat{y}$ à partir d'une entrée scalaire $x$ :

$$\boxed{f(x) = ax + b}$$

| Paramètre | Rôle |
|---|---|
| $a \in \mathbb{R}$ | Pente (coefficient directeur) |
| $b \in \mathbb{R}$ | Ordonnée à l'origine (biais) |

### 2.2 Généralisation multivariée ($n$ caractéristiques)

Pour $n > 1$, le modèle devient un produit scalaire :

$$f(x) = \underbrace{w_1 x_1 + w_2 x_2 + \cdots + w_n x_n}_{\text{somme pondérée}} + b$$

En utilisant la convention de §1.2 (composante 1 ajoutée), on regroupe tout dans un seul produit scalaire :

$$f(x) = \theta^\top x = \sum_{j=0}^{n} \theta_j\, x_j$$

où :

$$\theta = \begin{pmatrix} \theta_0 \\ \theta_1 \\ \vdots \\ \theta_n \end{pmatrix}, \quad x = \begin{pmatrix} 1 \\ x_1 \\ \vdots \\ x_n \end{pmatrix}$$

$\theta_0$ joue le rôle de $b$ et $\theta_1, \dots, \theta_n$ jouent le rôle de $a$.

### 2.3 Prédiction sur le dataset entier

En forme matricielle, les prédictions pour les $m$ exemples sont :

$$\hat{Y} = X\theta \in \mathbb{R}^m$$

$$\hat{Y} = \begin{pmatrix} (x^{(1)})^\top \theta \\ (x^{(2)})^\top \theta \\ \vdots \\ (x^{(m)})^\top \theta \end{pmatrix} = \begin{pmatrix} \hat{y}^{(1)} \\ \hat{y}^{(2)} \\ \vdots \\ \hat{y}^{(m)} \end{pmatrix}$$

---

## 3. Fonction de coût

L'objectif est de trouver $\theta$ qui minimise l'écart entre les prédictions $\hat{Y}$ et les valeurs réelles $Y$.

### 3.1 Erreur sur un seul exemple

Pour l'exemple $i$, l'erreur (résidu) est :

$$e^{(i)} = \hat{y}^{(i)} - y^{(i)} = \theta^\top x^{(i)} - y^{(i)}$$

### 3.2 Mean Squared Error (MSE)

On utilise l'erreur quadratique moyenne, qui pénalise les grands écarts :

$$\boxed{J(\theta) = \frac{1}{2m} \sum_{i=1}^{m} \left(\theta^\top x^{(i)} - y^{(i)}\right)^2}$$

Le facteur $\frac{1}{2}$ est une convention pratique : il simplifie la dérivée lors de la descente de gradient (voir §3.3). Le facteur $\frac{1}{m}$ normalise par rapport au nombre d'exemples.

**Forme vectorielle :**

$$\boxed{J(\theta) = \frac{1}{2m} \left\| X\theta - Y \right\|_2^2 = \frac{1}{2m} (X\theta - Y)^\top (X\theta - Y)}$$

### 3.3 Gradient de $J$

Pour optimiser $\theta$ par descente de gradient, on calcule $\nabla_\theta J$ :

$$\nabla_\theta J = \frac{\partial J}{\partial \theta} = \frac{1}{m} X^\top (X\theta - Y)$$

**Dérivation détaillée :**

On pose $R = X\theta - Y$ (vecteur des résidus). Alors :

$$J = \frac{1}{2m} R^\top R$$

$$\frac{\partial J}{\partial \theta} = \frac{1}{2m} \cdot 2\, X^\top R = \frac{1}{m} X^\top (X\theta - Y)$$

On utilise ici la règle $\frac{\partial}{\partial \theta}(R^\top R) = 2 X^\top R$ qui vient du fait que $R$ est linéaire en $\theta$.

### 3.4 Mise à jour par descente de gradient

On répète itérativement :

$$\boxed{\theta \leftarrow \theta - \alpha \cdot \frac{1}{m} X^\top(X\theta - Y)}$$

où $\alpha > 0$ est le **taux d'apprentissage** (learning rate). Il contrôle la taille du pas vers le minimum.

| Valeur de $\alpha$ | Comportement |
|---|---|
| Trop petit | Convergence très lente |
| Bien choisi | Convergence régulière vers le minimum |
| Trop grand | Oscillations, divergence possible |

---


## 4. Écriture en matrice — Récapitulatif

Voici l'ensemble des formules clés sous forme matricielle, dans l'ordre logique du pipeline :

### 4.1 Données

$$X \in \mathbb{R}^{m \times (n+1)}, \quad Y \in \mathbb{R}^{m}, \quad \theta \in \mathbb{R}^{n+1}$$

### 4.2 Prédiction

$$\hat{Y} = X\theta$$

### 4.3 Résidus

$$R = \hat{Y} - Y = X\theta - Y$$

### 4.4 Fonction de coût

$$J(\theta) = \frac{1}{2m}\, R^\top R = \frac{1}{2m} \|X\theta - Y\|_2^2$$

### 4.5 Gradient

$$\nabla_\theta J = \frac{1}{m}\, X^\top R = \frac{1}{m}\, X^\top(X\theta - Y)$$

### 4.6 Mise à jour (gradient descent)

$$\theta \leftarrow \theta - \frac{\alpha}{m}\, X^\top(X\theta - Y)$$

### 4.7 Solution analytique (équation normale)

$$\theta^* = (X^\top X)^{-1} X^\top Y$$

---

## 5. Liens & Ressources

 📂 Projet GitHub : [ml-from-scratch / regression_lineaire](https://github.com/Padevend/ml-from-scratch/tree/main/regression_lineaire) 
 📂 Repo racine : [Padevend / ml-from-scratch](https://github.com/Padevend/ml-from-scratch)