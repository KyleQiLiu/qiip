import React from 'react'
import logo from './img/qi_logo.png'

export default function Header() {
  return (
    <div class="header">
        <a href="#">
            <img class="header-img" alt="Qi" src={logo}/>
        </a>
        {/* 
        <div class="px-10">
            <a class="header-nav-link" href="#">Projects</a>
            <a class="header-nav-link" href="#">Blogs</a>
            <a class="header-nav-link" href="#">Contact</a>
        </div>
        */}
    </div>
  )
}
