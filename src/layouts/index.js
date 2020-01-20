import React, { useCallback, useEffect } from "react"
import { Link, navigate, graphql, useStaticQuery } from "gatsby"
import Helmet from "react-helmet"
import { Swipeable } from "react-swipeable"
import Transition from "../components/transition"

import "./index.css"

const Header = ({ name, title, date, author, authorUrl }) => (
  <header>
    <Link to="/1">
      <span>{name}</span> — {title}
    </Link>
    <time>
      {date} — <a href={authorUrl}>{author}</a>
    </time>
  </header>
)

const KEYCODES = {
  NEXT: [13, 32, 39],
  PREV: 37,
}

const TemplateWrapper = ({ data, location, children }) => {
  const { site, allSlide } = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          name
          title
          date
          author
          authorUrl
        }
      }
      allSlide {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  const index = data ? data.slide.index : 0
  const { length } = allSlide.edges

  const next = useCallback(() => {
    if (index < length) {
      navigate(`/${index + 1}`)
    }
  }, [index, length])

  const previous = useCallback(() => {
    if (index > 1) {
      navigate(`/${index - 1}`)
    }
  }, [index])

  useEffect(() => {
    const handleKeydown = ({ keyCode }) => {
      if (KEYCODES.NEXT.includes(keyCode)) {
        next()
      } else if (keyCode === KEYCODES.PREV) {
        previous()
      }
    }

    document.addEventListener("keydown", handleKeydown)
    return () => {
      document.removeEventListener("keydown", handleKeydown)
    }
  }, [next, previous])

  const { title, name } = site.siteMetadata

  return (
    <div>
      <Helmet title={`${title} — ${name}`} />
      <Header {...site.siteMetadata} />
      <Swipeable onSwipedLeft={next} onSwipedRight={previous}>
        <Transition location={location}>
          <div id="slide" style={{ width: "100%" }}>
            {children}
          </div>
        </Transition>
      </Swipeable>
    </div>
  )
}

export default TemplateWrapper
