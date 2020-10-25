import React from 'react'
import { NavList, NavItem, NavLink } from './Navigation.css';

const Navigation = () => {
  return (
    <NavList>
      <NavItem>
        <NavLink to='/rooms'>Rooms</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/video'>Video</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/profile'>Profile</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/account'>Account</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/settings'>Settings</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/logout'>Logout</NavLink>
      </NavItem>
    </NavList>
  )
}

export default Navigation
