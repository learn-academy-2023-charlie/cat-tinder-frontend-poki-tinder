import React from "react"
import { Navbar } from "reactstrap"

const Header = () =>
{
  return (
    <>
      <Navbar
        className="my-2"
        color="warning"
      >
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Pok%C3%A9mon_FanMade_Logo.png"
            alt="Poke fonts"
            height="20"
          />
        </a>
      </Navbar>
    </>
  )
}

export default Header