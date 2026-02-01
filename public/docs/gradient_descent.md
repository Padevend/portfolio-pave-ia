# Descente des Gradients — Documentation Complète

> 📦 Projet source : [ml-from-scratch / regression_lineaire](https://github.com/Padevend/ml-from-scratch/tree/main/regression_lineaire)  
---

## 1. Intuition géométrique

### 1.1 Le problème d'optimisation

Tout algorithme d'apprentissage se ramène à un problème central : **trouver les paramètres $\theta$ qui minimisent une fonction de coût $J(\theta)$**.

$$\theta^* = \arg\min_{\theta} \; J(\theta)$$

La fonction $J$ définit un **paysage en relief** (surface) dont les axes horizontaux sont les paramètres $\theta$ et l'axe vertical est la valeur du coût. Le minimum global est le point le plus bas de ce paysage.

### 1.2 La métaphore de la colline

Imaginez être debout sur une colline dans le brouillard — vous ne voyez pas le fond de la vallée. La seule information disponible est la **pente locale** sous vos pieds. La stratégie naturelle est :

1. Sentir la pente à votre position actuelle
2. Faire un pas dans la direction **opposée** à la montée (donc vers le bas)
3. Répéter

C'est exactement ce que fait la descente des gradients : à chaque itération, elle se déplace dans la direction qui fait **diminuer $J$ le plus vite localement**.

### 1.3 Rôle du gradient

Le gradient $\nabla_\theta J$ est un vecteur qui point dans la direction de **plus grande croissance** de $J$. On se déplace donc dans la direction **opposée** :

$$\boxed{\theta \leftarrow \theta - \alpha \, \nabla_\theta J(\theta)}$$

Le signe négatif est crucial : sans lui, on monterait au lieu de descendre.

---

## 2. Formulation mathématique

### 2.1 Définition du gradient

Soit $J : \mathbb{R}^{n+1} \to \mathbb{R}$ une fonction differentiable. Le gradient est le vecteur des dérivées partielles :

$$\nabla_\theta J = \begin{pmatrix} \dfrac{\partial J}{\partial \theta_0} \\[10pt] \dfrac{\partial J}{\partial \theta_1} \\[10pt] \vdots \\[6pt] \dfrac{\partial J}{\partial \theta_n} \end{pmatrix} \in \mathbb{R}^{n+1}$$

Chaque composante $\frac{\partial J}{\partial \theta_j}$ mesure comment $J$ change lorsqu'on perturbe uniquement $\theta_j$, en gardant tous les autres paramètres fixes.

### 2.2 Règle de mise à jour

À chaque itération $t$, on met à jour **simultanément** tous les paramètres :

$$\theta^{(t+1)} = \theta^{(t)} - \alpha \, \nabla_\theta J\!\left(\theta^{(t)}\right)$$


### 2.3 Décomposition par paramètre

La mise à jour peut aussi s'écrire composante par composante :

$$\theta_j^{(t+1)} = \theta_j^{(t)} - \alpha \, \frac{\partial J}{\partial \theta_j}\bigg|_{\theta = \theta^{(t)}}, \quad \forall\, j \in \{0, 1, \dots, n\}$$

---

## 3. Application à la régression linéaire

On reprend les notations du document `regression_lineaire.md`.

### 3.1 Fonction de coût (MSE)

$$J(\theta) = \frac{1}{2m} \sum_{i=1}^{m} \left(\theta^\top x^{(i)} - y^{(i)}\right)^2 = \frac{1}{2m} \|X\theta - Y\|_2^2$$

### 3.2 Calcul du gradient — dérivation complète

On développe $J$ pour une composante $\theta_j$ quelconque :

$$\frac{\partial J}{\partial \theta_j} = \frac{\partial}{\partial \theta_j} \left[ \frac{1}{2m} \sum_{i=1}^{m} \left(\sum_{k=0}^{n} \theta_k x_k^{(i)} - y^{(i)}\right)^2 \right]$$

On applique la règle de la chaîne $\frac{d}{dx}[u^2] = 2u \cdot \frac{du}{dx}$ :

$$= \frac{1}{2m} \sum_{i=1}^{m} 2\left(\sum_{k=0}^{n} \theta_k x_k^{(i)} - y^{(i)}\right) \cdot \frac{\partial}{\partial \theta_j}\left(\sum_{k=0}^{n} \theta_k x_k^{(i)}\right)$$

La dérivée partielle intérieure est immédiate : seul le terme $k = j$ survit :

$$\frac{\partial}{\partial \theta_j}\left(\sum_{k=0}^{n} \theta_k x_k^{(i)}\right) = x_j^{(i)}$$

On simplifie le facteur 2 avec $\frac{1}{2m}$ :

$$\boxed{\frac{\partial J}{\partial \theta_j} = \frac{1}{m} \sum_{i=1}^{m} \left(\theta^\top x^{(i)} - y^{(i)}\right) x_j^{(i)}}$$

### 3.3 Forme matricielle du gradient

En regroupant toutes les composantes simultanément :

$$\nabla_\theta J = \frac{1}{m} X^\top (X\theta - Y)$$

**Vérification des dimensions :**

| Matrice | Dimensions |
|---|---|
| $X^\top$ | $(n+1) \times m$ |
| $(X\theta - Y)$ | $m \times 1$ |
| **Résultat** | $(n+1) \times 1$ ✓ |

### 3.4 Règle de mise à jour complète

$$\boxed{\theta \leftarrow \theta - \frac{\alpha}{m}\, X^\top(X\theta - Y)}$$

---

## 4. Le taux d'apprentissage $\alpha$

### 4.1 Rôle géométrique

$\alpha > 0$ contrôle la **longueur du pas** dans la direction du gradient. Le gradient ne donne qu'une direction, pas une distance optimale.

### 4.2 Comportements selon la valeur de $\alpha$

**$\alpha$ trop petit :**

$$\theta^{(0)} \;\xrightarrow{\text{petit pas}}\; \theta^{(1)} \;\xrightarrow{\text{petit pas}}\; \theta^{(2)} \;\to\; \cdots \;\to\; \theta^*$$

La convergence est garantie mais **extrêmement lente**. Il faut un nombre élevé d'itérations.

**$\alpha$ bien choisi :**

$$\theta^{(0)} \;\xrightarrow{\text{pas adapté}}\; \theta^{(1)} \;\xrightarrow{\text{pas adapté}}\; \cdots \;\to\; \theta^*$$

Les pas sont grands mais restent dans la "vallée". $J$ diminue régulièrement à chaque itération.

**$\alpha$ trop grand :**

$$\theta^{(0)} \;\xrightarrow{\text{grand pas}}\; \theta^{(1)} \;\xleftarrow{\text{grand pas}}\; \theta^{(2)} \;\to\; \cdots$$

On "saute" d'un côté à l'autre du minimum. $J$ peut osciller puis **diverger** vers l'infini.

### 4.3 Condition de convergence (cas quadratique)

Pour une fonction de coût quadratique (comme la MSE en régression linéaire), la convergence est garantie si :

$$0 < \alpha < \frac{2}{\lambda_{\max}}$$

où $\lambda_{\max}$ est la plus grande valeur propre de la matrice $X^\top X$. En pratique, on choisit souvent :

$$\alpha \approx \frac{1}{\lambda_{\max}}$$

### 4.4 Stratégie de sélection pratique

En pratique, on teste des valeurs sur une échelle logarithmique et on plot $J$ en fonction des itérations :

$$\alpha \in \{0.0001,\; 0.001,\; 0.01,\; 0.1,\; 1\}$$

On retient la plus grande valeur pour laquelle $J$ décroît régulièrement.

---
