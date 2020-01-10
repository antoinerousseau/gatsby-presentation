const path = require("path")
const _ = require("lodash")

// Remove trailing slash
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // Remove trailing slash
  const newPage = {
    ...page,
    path: page.path === `/` ? page.path : page.path.replace(/\/$/, ``),
  }

  if (newPage.path !== page.path) {
    // Remove the old page
    deletePage(page)
    // Add the new page
    createPage(newPage)
  }
}

// Create pages from markdown nodes
exports.createPages = ({ actions, createContentDigest, createNodeId, graphql }) => {
  const { createPage, createNode } = actions
  const slideTemplate = path.resolve(`src/templates/slide.js`)

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
            html
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const slides = result.data.allMarkdownRemark.edges
    slides.sort((a, b) => (a.node.fileAbsolutePath > b.node.fileAbsolutePath ? 1 : -1))
    const nodes = slides.flatMap(slide =>
      slide.node.html.split("<hr>").map(html => ({
        node: slide.node,
        html,
      }))
    )

    nodes.forEach(({ node, html }, index) => {
      createNode({
        id: createNodeId(`${node.id}_${index + 1} >>> Slide`),
        parent: node.id,
        children: [],
        internal: {
          type: `Slide`,
          contentDigest: createContentDigest(html),
        },
        html: html,
        index: index + 1,
      })
    })

    nodes.forEach((_slide, index) => {
      createPage({
        path: `/${index + 1}`,
        component: slideTemplate,
        context: {
          index: index + 1,
          absolutePath: process.cwd() + `/src/slides#${index + 1}`,
        },
      })
    })
  })
}

exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Slide implements Node {
      html: String
      index: Int
    }
  `)
}
