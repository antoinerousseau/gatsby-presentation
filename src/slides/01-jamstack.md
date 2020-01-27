# Gatsby

Présentation et retours d'expérience

---

## Sponsors

[Commit42](https://www.commit42.com/) 🍕

[Ô Local](https://www.olocal.fr/) 🏠

[Gatsby](https://www.gatsbyjs.org/) 🎁

---

## Gatsby, c'est quoi ?

Un framework React pour générer des sites statiques rapides

---

## Au début, le Web c'était simple

- Fichiers HTML, CSS, images
- Liens entre les pages
- Une touche de JavaScript 🎉

---

## Puis PHP est apparu

- Contenu dynamique
- Portions réutilisables
- Base de données

---

Mais...

- Applications monolithiques
- Mélange de code serveur et client
- Vulnérabilité aux attaques
- Montée en charge manuelle

---

## Puis les _SPA_ sont arrivés

- Application Web côté client
- 100% JavaScript ➡️ rapide et interactif
- Séparée du serveur ➡️ _API_
- Fichiers statiques ➡️ _CDN_

---

Mais...

- Référencement plus lent et moins maîtrisé 📉
- Page vide durant le chargement ⏱
- Un seul point d'entrée 📦 (code-splitting possible mais manuel ✂️)

---

## Laissez entrer les hybrides

Statique + _PWA_ = ❤️

- Pages statiques = générées au _build_ (chacune avec leur HTML/CSS/JavaScript) à partir de données sources (API, fichiers Markdown, base de données...)

---

## Hydratation 💧

Le contenu s'affiche immédiatement, puis l'interactivité arrive pour "augmenter" la page : JavaScript reprend la main (`ReactDOM.hydrate`)

---

- Fonctionne même sans JavaScript
- Référencement plus rapide et plus fiable
- Possibilité de réserver des portions au côté client

---

## C'est pas ce que fait le SSR ?

_Server-Side Rendering_ = génération des pages à la demande par un serveur Node

Statique = pas de serveur !

---

## SSR vs statique (SSG)

Un _Static Site Generator_ génère de simples fichiers (HTML, CSS, JavaScript, etc.)

- CDN ⚡️
- Scalable ☁︎
- Sécurité 🛡

---

## Mais si mon contenu change ?!

Selon le contenu :

- Régénérer le site
- _API_ côté client (mais coquille pré-générée)
- Contenu fortement dynamique ➡️ _SSR_
- Backoffice ou un espace client ➡️ _SSR_ ou _SPA_ (_CRA_ etc.)

---

# JAMstack

**J**avaScript • **A**PIs • **M**arkup

https://jamstack.systems/

https://jamstack.org/

https://jamstack.wtf/
