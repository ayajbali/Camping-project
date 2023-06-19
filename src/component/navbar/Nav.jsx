import React, { useState } from 'react'

import './navbar.scss'
import { MdTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FcSearch } from 'react-icons/fc';
import {BsList} from 'react-icons/bs';
import { AiOutlineMenu } from "react-icons/ai";
import {SiYourtraveldottv} from 'react-icons/si'
const Navbar = () => {

const [active,setActive]=useState('navBar');
const [actve,setActve]=useState('toggleNavBar');
const [activted,setActivted]=useState('header');

const   addbg =()=>{
  if (window.scrollY>=10){

    setActivted('header  activehider ');
  }
  else{
    setActivted('header');
  }
}
window.addEventListener('scroll',addbg)


const showNav =()=>{
  setActive('navBar  activenavBar ');
}
const hidden =()=>{
  setActve('toggleNavBar  toggleNav ');
}

const apprent =()=>{
  setActve('toggleNavBar');
}


const removeNav =()=>{
  setActive('navBar ');
}
return(
<section className='navBarSection'>
  <div className={activted}>
      <div className="logoDiv">
      <a href="#" className="logo">
      <h1 className='flex'><SiYourtraveldottv className="icon"/>
      Dot
      </h1>
      </a></div>
  
  <div className={active}>


  <ul className='navList flex'>
            <li className='navItem'>
              <a href='#' className='navLink'>
                Home
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>
                travel
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>
                happing
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>
                contact
              </a>
            </li>
            <div className='heraderbtn flex'>
              
              
              

              <button  className='btn   loginbtn'>

              <a href='#' className='navLink'>
                Sing In
              </a>
              </button>
              
              <button  className='btn'>

              <a href='#' className='navLink'>
                Sin Up
              </a>
              </button>
            </div>
            
          </ul>
          <div onClick={() => { removeNav(); apprent(); }} className='closenavBar'>
  <div></div>
  <AiFillCloseCircle className='icon' />
</div>

        </div>
        <div onClick={showNav  }  className={actve}>
          <BsList  onClick={hidden} className='icons' />
        </div>
  </div>
  
  
</section>
);}
export default Navbar
