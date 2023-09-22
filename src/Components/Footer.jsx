import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {TiSocialInstagram} from 'react-icons/ti'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaYoutube} from 'react-icons/fa'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'> 
    <div className="secContainer container grid">
      <div className="logoDiv">
        <div className="footerLogo grid">
        <h3 className='logo flex'>Buta Bank</h3>
       
        </div>
      </div>

   

      <div className="footerLinks">
       

        <li>
          <a href="#">About us</a>
        </li>
       
      </div>

      <div className="footerLinks">
       

        <li>
          <a href="#">Products</a>
        </li>
      
      </div>

      <div className="footerLinks">
      

        <li>
          <a href="#">Awards</a>
        </li>
       
        
      </div>
      <div className="footerLinks">
      

        <li>
          <a href="#">Help</a>
        </li>
       
        
      </div>
      <div className="footerLinks">
       <div className="socials flex">
        <FaFacebookSquare className='icon'/>
        <TiSocialInstagram className='icon'/>
        <AiOutlineTwitter className='icon'/>
        <FaYoutube className='icon'/>
      </div> 
    </div>
    </div>
    </div>
  )
}

export default Footer