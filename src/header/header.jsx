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
                return <button onClick={() => navigate('/home')}>Home</button>;
            case '/SignIn':
                return <button onClick={() => navigate('/Register')}>Create Account</button>;
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
                </nav>
            </div>
        );
    }

    /**return (
        <div className="flex flex-row bg-slate-600 text-center items-center space-x-4 text-white">
            <div>
                <div className="pl-4 text-2xl">Simple-Finance</div>
            </div>
            <div>
                <div className="text-lg">Home</div>
            </div>
            <div>
                <div className="text-lg">Income</div>
            </div>
            <div>
                <div className="text-lg">Settings</div>
            </div>
        </div>
    )*/
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

