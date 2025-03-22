import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import ButtonIcon from "../ui/ButtonIcon";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const renderButton = () => {
        switch (location.pathname) {
            case '/':
                return <button className="cursor-pointer hover:bg-secondary px-2 py-1 rounded-lg hover:text-primary transition-all duration-500" onClick={() => navigate('/login')}>Login</button>;
            case '/map':
                return <button className="cursor-pointer hover:bg-secondary px-2 py-1 rounded-lg hover:text-primary transition-all duration-500" onClick={() => navigate('/')}>Home</button>;
            default:
                return <button className="cursor-pointer hover:bg-secondary px-2 py-1 rounded-lg hover:text-primary transition-all duration-500" onClick={() => navigate('/')}>Home</button>;
        }
    };

    function Menu() {
        return (
            <div className={`fixed top-16 left-0 w-1/4 drop-shadow-lg transition-transform transform ${menuOpen ? 'translate-y-0' : '-translate-y-full'} z-20`}>
                <nav className='flex flex-col justify-center bg-[rgba(199,180,147,0.75)] items-center gap-4 text-primary text-2xl p-4'>
                    <NavLink to="/" onClick={toggleMenu} className="hover:text-accent transition-all duration-300">Home</NavLink>
                    <NavLink to="/map" onClick={toggleMenu} className="hover:text-accent transition-all duration-300">Map</NavLink>
                    <NavLink to="/about" onClick={toggleMenu} className="hover:text-accent transition-all duration-300">About</NavLink>
                    <NavLink to="/login" onClick={toggleMenu} className="hover:text-accent transition-all duration-300">Login</NavLink>
                    <NavLink to="/survey" onClick={toggleMenu} className="hover:text-accent transition-all duration-300">Survey</NavLink>
                </nav>
            </div>
        );
    }

    return (
        <>
            <header className="relative z-30 flex justify-between items-center text-secondary py-2 px-8 bg-primary drop-shadow-md">
                <ButtonIcon
                    icon={menuOpen ? <RxCross1 size="28" /> : <RxHamburgerMenu size="28" />}
                    text="Navigation Menu"
                    onClick={toggleMenu}
                />
                <NavLink to="/about" className="text-4xl hover:text-accent duration-500">RepRoute</NavLink>
                {renderButton()}
            </header>
            {menuOpen && <Menu />}
        </>
    );
}

export default Header;
