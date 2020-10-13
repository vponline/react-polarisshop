import React from "react"
import { NavLink } from "react-router-dom"

const NavigationComponent = () => {
  return (
    <div className="nav">
      <NavLink activeClassName="active-link" to="/products">
        Products
      </NavLink>
      <NavLink activeClassName="active-link" to="/about">
        About Us
      </NavLink>
    </div>
  )
}

export default NavigationComponent
