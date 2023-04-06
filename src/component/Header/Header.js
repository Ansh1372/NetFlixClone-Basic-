import React from 'react';
import logo from './../../logo.png';
import './Header.scss'
import { Link } from 'react-router-dom';
import{ImSearch} from "react-icons/im";

const Header=()=> {
  console.log(logo);
  return (
    <nav className='Header'>
       <img src={logo} alt="logo" />
       <div>
        <Link to='/tvshows'>TV SHOWS</Link>
        <Link to='/movies'>MOVIES</Link>
        <Link to='/reacnt'>RECENT ADD</Link>
        <Link to='/mylist'>MYLIST</Link>
        
       </div>
       <ImSearch/>
      
    </nav>
  )
}

export default Header;
