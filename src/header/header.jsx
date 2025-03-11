import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './header.css'

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const renderButton = () => {
        switch (location.pathname) {
            case '/':
                return <button onClick={() => navigate('/')}>Home</button>;
            default:
                return <button onClick={() => navigate('/')}>Home</button>;
        }
    };

    function Menu() {
        return (
            <div className="menu">
                <nav>
                    <NavLink to="/" onClick='closeMenu()' className='link'>Home</NavLink>
                    <NavLink to="/map" onClick='closeMenu()' className='link'>Map</NavLink>
                    <NavLink to="/login" onClick='closeMenu()' className='link'>Login</NavLink>
                </nav>
            </div>
        );
    }

    return (
        <>
            <header className="header">
                <button className='navigation' onClick={toggleMenu}>☰</button>
                <div className="logo">Sales App</div>
                {renderButton()}
            </header>
            {menuOpen && <Menu />}
        </>
    );
}

