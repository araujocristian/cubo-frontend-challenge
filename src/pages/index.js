import React from "react"

import "../styles/settings/spacing.css"
import "../styles/generic/reset.css"
import "../styles/elements/base.css"

import SEO from "../components/seo"
import HeaderCubo from "../components/HeaderCubo"

const IndexPage = () => (
  <>
    <SEO title="Cubo Coworking - Home" />
    <HeaderCubo>
      <h1>Home</h1>
    </HeaderCubo>
  </>
)

export default IndexPage
