// import React from 'react'

import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <NavLink
        style={({ isActive }) =>
          isActive
            ? /* --- the same as ---
         style={(props) => {
    const isActive = props.isActive;
    return isActive } ?*/
              { color: 'lightyellow', textDecoration: 'none' }
            : {}
        }
        to="."
        end
      >
        Home
      </NavLink>

      <NavLink to="courses">My Courses</NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        to="about"
      >
        About
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        to="contacts"
      >
        Contacts
      </NavLink>
    </nav>
  )
}

export default Menu
