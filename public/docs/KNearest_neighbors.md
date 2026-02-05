# K-Nearest Neighbors (KNN)

> 📦 Projet source : [ml-from-scratch / K-Nearest Neighbors](https://github.com/Padevend/ml-from-scratch/blob/main/KNearest_Neighbors)

---

## 1. Dataset

### 1.1 Représentation

On considère un dataset $\mathcal{D}$ composé de $m$ exemples. Chaque exemple $i$ est un couple $(x^{(i)},, y^{(i)})$ :

| Symbole                    | Meaning                            |
| -------------------------- | ---------------------------------- |
| $x^{(i)} \in \mathbb{R}^n$ | Vecteur de caractéristiques        |
| $y^{(i)}$                  | Label (classe ou valeur réelle)    |
| $m$                        | Nombre d'exemples                  |
| $n$                        | Dimension de l’espace des features |

---

### 1.2 Matrice des données

On empile les exemples :

$$
X =
\begin{pmatrix}
— & (x^{(1)})^\top & — \\
— & (x^{(2)})^\top & — \\
\vdots & \vdots & \vdots \\
— & (x^{(m)})^\top & —
\end{pmatrix}
\in \mathbb{R}^{m \times n}
$$

$$
Y =
\begin{pmatrix}
y^{(1)} \
y^{(2)} \
\vdots \
y^{(m)}
\end{pmatrix}
$$

Chaque **ligne** correspond à un point dans l’espace $\mathbb{R}^n$.

---

## 2. Modèle — Principe du voisinage

Le **K-Nearest Neighbors** s'illustre par cet petite anecdote :

> Si il marche et agit comme un canard alors c'est forcement un canard

Contrairement à la régression linéaire :

$$
f(x)=\theta^\top x
$$

KNN **n’apprend pas de paramètres $\theta$**.

Il définit la prédiction uniquement à partir de la proximité géométrique

### 2.1 Ensemble des voisins

Pour une nouvelle observation $x^*$ :

$$
\mathcal{N}_K(x^*) =
\text{ensemble des } K \text{ plus proches voisins}
$$

### 2.2 Fonction de prédiction

De manière générale :

$$
\boxed{\hat{y}(x^*) = \text{mode}\big({y_i \mid x_i \in \mathcal{N}_K(x^*)}\big)}
$$
le label ou l'etiquette a attribuer a la nouvelle observation est le label qui apparait le plus de foit dans la liste $$\mathcal{N}_K(x^*)$$

---

# 3. Métriques de distance

La notion de proximité repose sur une métrique $d(x,z)$.

---

## 3.1 Distance euclidienne ($L_2$)

$$
\boxed{
d(x,z) =
\sqrt{\sum_{j=1}^{n}(x_j - z_j)^2}
}
$$

Norme :

$$
d(x,z)=|x-z|_2
$$

---

## 3.2 Distance de Manhattan ($L_1$)

$$
\boxed{
d(x,z)=\sum_{j=1}^{n}|x_j - z_j|
}
$$

Norme :

$$
d(x,z)=|x-z|_1
$$

---

## 3.3 Distance de Minkowski (générale)

$$
\boxed{
d(x,z)=\left(\sum_{j=1}^{n}|x_j-z_j|^p\right)^{1/p}
}
$$

Cas particuliers :

| $p$      | Distance    |
| -------- | ----------- |
| $1$      | Manhattan   |
| $2$      | Euclidienne |
| $\infty$ | Chebyshev   |

---

## 3.4 Normalisation (obligatoire)

Pour éviter qu’une feature domine la distance :

$$
x'_j = \frac{x_j - \mu_j}{\sigma_j}
$$

Ainsi chaque dimension possède :

$$
\mathbb{E}[x'_j]=0, \quad Var(x'_j)=1
$$

---

# 4. Pipeline de prédiction

Pour un point $x^*$ :

### 4.1 Distances

$$
d_i = d(x^*, x^{(i)}), \quad i=1,\dots,m
$$

### 4.2 Tri

On ordonne :

$$
d_{(1)} \le d_{(2)} \le \dots \le d_{(m)}
$$

### 4.3 Sélection

$$
\mathcal{N}*K(x^*) = {x*{(1)}, \dots, x_{(K)}}
$$

### 4.4 Agrégation

Selon la tâche :

* moyenne → régression
* vote majoritaire → classification

---

# 5. KNN en régression

## 5.1 Prédiction

On estime la moyenne locale :

$$
\boxed{
\hat{y}(x^*) =
\frac{1}{K}
\sum_{x_i \in \mathcal{N}_K(x^*)} y_i
}
$$

---

## 5.2 Erreur quadratique moyenne (MSE)

Résidus :

$$
e^{(i)} = y^{(i)} - \hat{y}^{(i)}
$$

Fonction de coût :

$$
\boxed{
\text{MSE} =
\frac{1}{m}
\sum_{i=1}^{m} (y^{(i)}-\hat{y}^{(i)})^2
}
$$

---

# 6. KNN en classification

## 6.1 Vote majoritaire

$$
\boxed{
\hat{y}(x^*) =
\arg\max_{c}
\sum_{x_i \in \mathcal{N}_K(x^*)}
\mathbf{1}(y_i=c)
}
$$

---

## 6.3 Accuracy

$$
\boxed{
\text{Accuracy} =
\frac{1}{m}
\sum_{i=1}^{m}
\mathbf{1}(y^{(i)}=\hat{y}^{(i)})
}
$$

Interprétation :

$$
0 \le \text{Accuracy} \le 1
$$

---

# 7. Choix du paramètre $K$

## 7.1 Biais–Variance

| $K$ petit         | $K$ grand          |
| ----------------- | ------------------ |
| faible biais      | fort biais         |
| forte variance    | faible variance    |
| sur-apprentissage | sous-apprentissage |

---

## 7.2 Sélection optimale

Validation croisée :

il n'existe pas de valeur de k que l'on pourrait qualifier de valeur optimale, le tous depends du probleme et des donnnées a dispositions, l'option la plus simple et efficace est de teste des valeurs et choisir celle qui minimise au mieux les erreurs du model.

---

# 8. Complexité algorithmique

## 8.1 Mémoire

$$
O(mn)
$$

## 8.2 Temps de prédiction

Calcul des distances :

$$
O(mn)
$$

Tri :

$$
O(m \log m)
$$

KNN est donc coûteux **au moment de l’inférence**.
Sur d'enorme jeux de donnees il devient tres vite inefficace du fait que contrairment au autre model le KNN a la particularite qu'il n'a pas de phase d'entrainement (apprentissage dit **paresseux**)

---


# 10. Résumé mathématique — Pipeline

### Données

$$X \in \mathbb{R}^{m \times n},\quad Y$$

### Distances

$$d_i = d(x^*, x^{(i)})$$

### Voisins

$$\mathcal{N}_K(x^*)$$

### Régression

$$\hat{y} = \frac{1}{K}\sum y_i$$

### Classification

$$\hat{y} = \arg\max_c \sum \mathbf{1}(y_i=c)$$

### Métriques

$$\text{MSE}, \quad \text{Accuracy}$$

---

# 11. Propriétés

## Avantages

* simple
* sans entraînement
* non paramétrique
* flexible

## Limites

* lent en prédiction
* sensible à l’échelle
* malédiction de la dimension
* stockage complet du dataset

---

# 12. Conclusion

Le **K-Nearest Neighbors** illustre une idée fondamentale du Machine Learning :

> la similarité géométrique suffit pour apprendre.

Sans optimisation ni modèle explicite, il fournit une estimation locale robuste, aussi bien pour la **régression** que pour la **classification**, ce qui en fait une excellente baseline théorique et pratique.

---