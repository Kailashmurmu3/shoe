import React from 'react'
import "./Header.css";

export default function Header() {
  return (
    <>
        <div>
            <nav className='container'>
                <div className='logo'>
                    <img src="/images/brand_logo.png" alt="logo" />
                </div>
                <ul>
                    <li href="#">MENU</li>
                    <li href="#">LOCATION</li>
                    <li href="#">ABOUT</li>
                    <li href="#">CONTACT</li>
                </ul>
                <button className='red-btn'>Login</button>
            </nav>
        </div>
    </>
  );
}
