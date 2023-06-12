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
            src="https://images.squarespace-cdn.com/content/v1/5b47bb08f8370a85913c511a/1586523429769-V7KX8S0847N3H9UVJW07/Pokemon+Preorder+Header.png"
            alt="Poke fonts"
            height="15"
          />
        </a>
      </Navbar>
    </>
  )
}


export default Header