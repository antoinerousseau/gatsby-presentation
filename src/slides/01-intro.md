# Gatsby

Présentation et retours d'expérience

---

## Sponsors

Commit42 (Occitech) 🍕

Ô Local 🏠

---

## Gatsby, c'est quoi ?

Un framework React pour générer des sites statiques

---

## Un site statique, pourquoi ?

- Référencement plus rapide et plus fiable
- Pages hybrides : le contenu s'affiche immédiatement, puis l'interactivité arrive pour "augmenter" la page (`ReactDOM.hydrate`)
- Fonctionne même sans Javascript

---

## C'est pas ce que fait le SSR ?

Le _Server-Side Rendering_ apporte les mêmes avantages, mais dynamiquement : génération des pages à la demande par un serveur Node

Statique = pas de serveur !

---

## SSR vs statique

De simples fichiers (HTML, CSS, JavaScript, etc.) :

- CDN
- Scalable
- Sécurité (pas de serveur => pas d'attaque !)

---

## Mais si mon contenu change ?!

Selon le contenu, il y a 2 possibilités :

- Régénérer le site (_build_)
- Utiliser des APIs côté client

---

# JAMstack

**J**avaScript • **A**PIs • **M**arkup

https://jamstack.systems/

https://jamstack.org/
