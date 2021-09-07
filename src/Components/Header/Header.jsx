import React from 'react';
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBacteria } from "@fortawesome/free-solid-svg-icons";


const Header = () => {

    return (

        <div className='head'>

            <h1>
            <span id='c'>  C </span>  
               <span id='o'> <FontAwesomeIcon icon={faBacteria} /></span>  
               <span id='c'>  VID </span>  
              
            <span id='d'>—</span>
            <span id='c'> 19</span> 
                
                </h1>

        
        </div>

    )
}

export default Header

