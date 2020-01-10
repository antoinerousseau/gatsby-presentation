import React, { useEffect } from "react"
import { navigate } from "gatsby"

const Index = props => {
  useEffect(() => {
    navigate(`/1`, { replace: true })
  }, [])

  return <div />
}

export default Index
