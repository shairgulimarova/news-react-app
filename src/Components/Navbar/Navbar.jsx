import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './navbar.scss'
import yLogo from "../../images/y18.gif"

function Navbar() {
    const menuItems = [
        {
            id:1,
            menu:'new |',
            link: '/'

        },
        {
            id:2,
            menu:'past |',
            link: 'past'
        }, 
        {
            id:3,
            menu:"comments |", 
            link:"comments"
        },
        {
            id:4,
            menu:'content |',
            link:'content'
        },
        {
            id:5,
            menu:'submit',
            link:'submit'
        }
    ]
  return (
    <nav className='navbar'>
        <div className="navbar_container">
            <Link to="/" className='navbar_logo'>
                <img className='navbar_img' src={yLogo} alt='logo'/>        
            </Link>
            <p className='navbar_name'>Hacker News</p>
            <div className="navbar_menu">
                {menuItems.map((menuItem)=>{
                    return (<NavLink to={menuItem.link} key={menuItem.id} className='navbar_menu-link'>{menuItem.menu}</NavLink>)
                })}
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar