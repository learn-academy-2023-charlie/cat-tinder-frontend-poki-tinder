import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import pokemonLogo from "../assets/pokemonLogo.png"

const Header = () => {
    return(
      <Nav className="header-nav custom-nav">
      <NavItem>
        <NavLink to="/">
          <img
            src={pokemonLogo}
            alt="Pokemon logo"
            className="pokemon-logo custom-logo"
          />
        </NavLink>
      </NavItem>
      </Nav>
    )
}
export default Header