## Pourquoi Gatsby ?

- Popularité (42 000 ⭐️ sur [GitHub](https://github.com/gatsbyjs/gatsby))
- Communauté active, dépôt très vivant
- Modularité, annuaire de plugins
- React

---

## Autres solutions similaires

- [Next.js](https://nextjs.org/) (framework _SSR_ + statique)
- [React-Static](https://github.com/react-static/react-static/)

---

# Particularités de Gatsby

---

## Framework

Outils de base en développement React moderne

- Rechargement à chaud
- Config _Webpack_ et _Babel_ (développement+production)
- [Navigation](https://www.gatsbyjs.org/docs/routing/) (points d'entrée avec _code splitting_, routage, liens)

---

Mais rien de superflu. Ensuite :

- [Plugins Gatsby](https://www.gatsbyjs.org/plugins/) officiels (pour les cas courants) + communautaires
- NPM
- API Node/SSR

---

## Données

- Regroupement des données sources dans un _store_ local
- Plugins source et transformeurs
- Requêtes [_GraphQL_](https://www.gatsbyjs.org/docs/graphql/) pour y accéder

---

## GraphQL ?! 😱

- Première approche déroutante
- Puissance du langage
- N'embarquer que les données nécessaires
- Outil intégré à Gatsby : [_GraphiQL_](https://www.gatsbyjs.org/docs/running-queries-with-graphiql/)

---

## [Gatsby Link](https://www.gatsbyjs.org/docs/gatsby-link/)

- Préchargement des liens approchés
- [Routage](https://www.gatsbyjs.org/docs/routing/) via `@reach/router`

---

## [Gatsby Image](https://www.gatsbyjs.org/docs/using-gatsby-image/)

- Génération de plusieurs tailles (pour _srcset_)
- Affichage progressif (_placeholder_ + transition)
- Affichage des images visibles uniquement

---

## Manifest + offline

_Progressive Web App_ via 2 plugins : [manifest](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest) et [offline](https://www.gatsbyjs.org/packages/gatsby-plugin-offline/)

---

## Faiblesses de Gatsby

- Pas de partage de types entre GraphQL et TypeScript
- Documentation parfois incomplète (mais mieux qu'avant)
- Builds non incrémentaux
- _GraphQL_ overkill pour juste afficher une image optimisée

---

## Futur

Gatsby 3

- Builds incrémentaux
- GraphQL : `useQuery` avec _Suspense_, et [paramètres](https://gist.github.com/sidharthachatterjee/e0c961fd92ce287dc020939037b915ce)
