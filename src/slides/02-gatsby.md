## Pourquoi Gatsby ?

- Popularité (41 600 étoiles sur [GitHub](https://github.com/gatsbyjs/gatsby))
- Communauté active, dépôt très vivant
- Modularité, annuaire de plugins
- React

---

# Autres solutions similaires

- [React-Static](https://github.com/react-static/react-static/)
- [Next.js](https://nextjs.org/)
- [Phenomic](https://phenomic.io/)

---

# Particularités de Gatsby

---

## Framework

Intègre et préconfigure les outils de base en développement React moderne

- Configuration Webpack
- Navigation (points d'entrée, routage, liens)
- SSR Node (pour générer les pages statiques à partir de code React)

Mais rien de superflu. Ensuite :

- [Plugins Gatsby](https://www.gatsbyjs.org/plugins/)
- NPM
- API Node

---

## Données

- Regroupement des données sources (différentes APIs, bases de données, fichiers...)
- Requêtes GraphQL pour y accéder

---

## GraphQL ? Mais c'est overkill ! 😱

- Première approche déroutante
- Puissance du langage
- N'embarquer que les données nécessaires dans chaque page
- Outil intégré à Gatsby : GraphiQL

---

## Framework orienté pour le Web moderne

Outils intégrés + plugins officiels pour les cas courants

---

## Gatsby Link

- Préchargement des liens approchés
- Navigation Gatsby = `@reach/router` = `react-router`

---

## Gatsby Image

- Génération de plusieurs tailles de chaque image (pour _srcset_)
- Affichage progressif (_placeholder_ + transition)
- Affichage des images visibles uniquement (`IntersectionObserver`)

---

## Manifest / offline

Une _Progressive Web App_ en configurant un simple plugin

---

## Tooling

- Rechargement à chaud en mode `develop`

---

## Futur

Gatsby 3

- `useQuery` avec _Suspense_, et paramètres (=> [querying 2.0](https://gist.github.com/sidharthachatterjee/e0c961fd92ce287dc020939037b915ce))
- Incremental builds
