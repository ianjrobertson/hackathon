import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import ButtonIcon from '../map/ButtonIcon';

export function Header({className}) {
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
            <div className="">
                <nav className="">
                    <NavLink to="/" onClick={toggleMenu} className="">Home</NavLink>
                    <NavLink to="/map" onClick={toggleMenu} className="">Map</NavLink>
                    <NavLink to="/login" onClick={toggleMenu} className="">Login</NavLink>
                </nav>
            </div>
        );
    }

    return (
        <>
            <header className="flex justify-between items-center p-4 bg-teal-800 text-teal-100 shadow-lg h-16 w-full fixed top-0 z-10">
                <ButtonIcon icon={<RxHamburgerMenu size="28" />} text="Navigation Menu" onClick={toggleMenu} />
                <div className="">Sales App</div>
                {renderButton()}
            </header>
            {menuOpen && <Menu />}
        </>
    );
}
