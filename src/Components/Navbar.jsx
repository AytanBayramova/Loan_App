
import React, {useRef} from 'react'
import './navbar.css'
import { AiOutlineBars } from "react-icons/ai"
import { GiCrossedSabres } from "react-icons/gi"

import { Link } from 'react-router-dom'

const Navbar = () => {

    const overlayDivininUnvaniRef = useRef()

    const openOverlayMenu =(e)=>{
        
        const kliklenenelement = e.target
        console.log(kliklenenelement)

        if(kliklenenelement.classList.contains('bars-icon')) {
            overlayDivininUnvaniRef.current.classList.add('aktiv')
        }
    }


    const closeOverlayMenu = (e)=>{
        const kliklenenelement = e.target
        console.log(kliklenenelement)

        if(kliklenenelement.classList.contains('cross-icon')) {
            overlayDivininUnvaniRef.current.classList.remove('aktiv')
        }
    }
  return (
    <>
   
    <div className='overlay' ref={overlayDivininUnvaniRef}>
    <button className='btn cross-icon' onClick={closeOverlayMenu}>{GiCrossedSabres}</button>

    <div className="nav-links">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Blog</a>
        <a href="">Contact</a>
    </div>
    </div>

    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <button onClick={openOverlayMenu} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <AiOutlineBars className='bars-icon'/>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="about">About</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="xidmetlerimiz">Services</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="blogg">Blog</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link text-white" to="elaqe">Contact</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
  
  </>
  )
}



export default Navbar
