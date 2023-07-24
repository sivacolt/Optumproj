import React from 'react'
import './Navbar.css';
import {FaWindowClose} from 'react-icons/fa';
import {FaBars} from 'react-icons/fa';


export const Navbar = () => {
  return (
    <div>
        <section className='header'>
        
        <nav>
            
        
            <a className='logo' href='indec.html'>UnitedHealthGroup</a>
            <div className="nav-links">
            <FaBars className='fa'></FaBars>
                <ul>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>About</a></li>
                    <li><a href=''>Blog</a></li>
                    <li><a href=''>Contact</a></li>

                </ul>
            <FaWindowClose className='fa'></FaWindowClose>
            </div>
        </nav>

        <div className="text-box">
            <h1>Our 2022 Sustainability Report</h1>
            <p className='paragraph'> At UnitedHealth Group, sustainability
is a foundation to fulfill our mission
and deepen our societal impact<br></br>
by improving the health and
well‑being of the people we serve.
            </p>
            <a href='' className='hero-btn'>Learn More</a>
        </div>

        </section>
       
    </div>
    
  )
}
