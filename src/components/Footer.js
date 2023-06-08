import React from "react"
import { Navbar, NavbarBrand } from "reactstrap"

const Footer = () => {
<<<<<<< HEAD
    return(
        <>
            <h1> Made by Justin and Henri </h1>
        </>
    )
=======
  return(
    <>
      <Navbar
        className="my-2"
        color="info"
        fixed="bottom"
      >
        <NavbarBrand href="/">
          &copy; Justin & Henri
        </NavbarBrand>
      </Navbar>
    </>
  )
>>>>>>> cdaba0b (header and foot test coverage done, missing home and NotFound tests)
}

export default Footer