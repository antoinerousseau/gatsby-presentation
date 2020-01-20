# Gatsby

Présentation et retours d'expérience

---

## Sponsors

[Commit42](https://www.commit42.com/) 🍕

[Ô Local](https://www.olocal.fr/) 🏠

---

## Gatsby, c'est quoi ?

Un framework React pour générer des sites statiques rapides

---

## Au début, le Web c'était simple

- Fichiers HTML, CSS, images
- Liens entre les pages
- Une touche de JavaScript pour le fun

---

## Puis PHP est apparu

- Contenu dynamique, portions réutilisables

Mais...

- Applications monolithiques
- Mélange de code serveur et client
- Sécurité
- Scalabilité

---

## Puis les SPA sont arrivés

- Application Web côté client
- 100% JavaScript (même la navigation)
- Séparée du serveur => API

Mais...

- Référencement plus lent et moins maîtrisé
- Page vide durant le chargement
- Un seul point d'entrée (code-splitting possible mais manuel)

---

## Laissez entrer les hybrides

- Toutes les pages statiques sont générées, chacune avec leur HTML/CSS/JavaScript
- Le contenu s'affiche immédiatement, puis l'interactivité arrive pour "augmenter" la page : JavaScript reprend la main (`ReactDOM.hydrate`)
- Fonctionne même sans JavaScript
- Référencement plus rapide et plus fiable
- Possibilité de réserver des portions au côté client (exemple : panier d'achat)

---

## C'est pas ce que fait le SSR ?

Le _Server-Side Rendering_ apporte les mêmes avantages, mais dynamiquement : génération des pages à la demande par un serveur Node

Statique = pas de serveur !

---

## SSR vs statique

De simples fichiers (HTML, CSS, JavaScript, etc.)

- CDN
- Scalable
- Sécurité

---

## Mais si mon contenu change ?!

Selon le contenu, il y a 2 possibilités :

- Régénérer le site (_build_)
- Utiliser des API côté client
- Moins adapté au contenu fortement dynamique => SSR

---

# JAMstack

**J**avaScript • **A**PIs • **M**arkup

https://jamstack.systems/

https://jamstack.org/
