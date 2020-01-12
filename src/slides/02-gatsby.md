# Particularités de Gatsby

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
- Améliorations [à](https://www.linkedin.com/posts/sebastienlorber_reactjs-gatsby-nextjs-activity-6618796398550765568-HTVQ) [venir](https://gist.github.com/sidharthachatterjee/e0c961fd92ce287dc020939037b915ce)

---

## Manifest / offline

TODO

---

## Tooling

- Rechargement à chaud en mode `develop`
