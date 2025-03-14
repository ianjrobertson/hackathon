import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

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
            <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-90 z-50">
                <nav className="flex flex-col gap-4">
                    <NavLink to="/" onClick={toggleMenu} className="text-white text-2xl">Home</NavLink>
                    <NavLink to="/map" onClick={toggleMenu} className="text-white text-2xl">Map</NavLink>
                    <NavLink to="/login" onClick={toggleMenu} className="text-white text-2xl">Login</NavLink>
                </nav>
            </div>
        );
    }

    return (
        <>
            <header className="flex justify-between items-center p-4 bg-teal-800 text-teal-100 shadow-lg h-16 w-full fixed top-0 z-10">
                <button className="text-2xl bg-transparent border-none cursor-pointer hover:bg-teal-100 hover:text-teal-800 rounded p-2" onClick={toggleMenu}>☰</button>
                <div className="text-2xl font-bold">Sales App</div>
                {renderButton()}
            </header>
            {menuOpen && <Menu />}
        </>
    );
}