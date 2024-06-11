import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../context';
import { NavLink } from 'react-router-dom'

import { IoCart } from "react-icons/io5";

const Navbar = () => {
  const {count}= useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'
  const containernavbar = 'flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0'
  return (
    <nav className={containernavbar}>
      <ul className="flex items-center gap-3">
        <li className="font-semibold">
          <NavLink 
            to="/"
            className={({isActive}) => isActive? activeStyle : undefined}
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/"
            className={({isActive}) => isActive? activeStyle : undefined}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/clothes"
            className={({isActive}) => isActive? activeStyle : undefined}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/electronics"
            className={({isActive}) => isActive? activeStyle : undefined}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/furnitures"
            className={({isActive}) => isActive? activeStyle : undefined}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/toys"
            className={({isActive}) => isActive? activeStyle : undefined}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/others"
            className={({isActive}) => isActive? activeStyle : undefined}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3" >
        <li className="text-black/60">
          aleocampo.dev@gmail.com
        </li>
        <li>
          <NavLink 
            to="/my-orders"
            className={({isActive}) => isActive? activeStyle : undefined}
          >
            My orders
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/my-account"
            className={({isActive}) => isActive? activeStyle : undefined}
          >
            My account
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/sign-in"
            className={({isActive}) => isActive? activeStyle : undefined}
          >
            Sign in
          </NavLink>
        </li>
        <li className="flex">
          <IoCart size={30}/>
          {count}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
