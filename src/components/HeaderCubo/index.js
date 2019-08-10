import React from "react"

import "./style.css"
import LogoCubo from "../../objects/LogoCubo";
import MenuCubo from "../MenuCubo";

const HeaderCubo = ({ children }) => (
  <header className="header-cubo">
      <LogoCubo />
      <MenuCubo />
  </header>
)

export default HeaderCubo
