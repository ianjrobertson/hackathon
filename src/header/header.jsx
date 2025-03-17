import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import ButtonIcon from "../ui/ButtonIcon";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const renderButton = () => {
        switch (location.pathname) {
            case '/':
                return <button onClick={() => navigate('/login')}>Login</button>;
            case '/map':
                return <button onClick={() => navigate('/')}>Home</button>;
            default:
                return <button onClick={() => navigate('/')}>Home</button>;
        }
    };

    function Menu() {
        return (
            <div className='flex items-center justify-center bg-accent h-64'>
                <nav className='flex flex-col gap-4 text-primary text-2xl'>
                    <NavLink to="/" onClick={toggleMenu} >Home</NavLink>
                    <NavLink to="/map" onClick={toggleMenu} >Map</NavLink>
                    <NavLink to="/about" onClick={toggleMenu} >About</NavLink>
                    <NavLink to="/login" onClick={toggleMenu} >Login</NavLink>
                </nav>
            </div>
        );
    }



    return (
        <>
            <header className="flex justify-between items-center text-primary py-2 px-8 bg-accent drop-shadow-md">
                <ButtonIcon icon={<RxHamburgerMenu size="28" />} text="Navigation Menu" onClick={toggleMenu} />
                <div>Sales App</div>
                {renderButton()}
            </header>
            {menuOpen && <Menu />}
        </>
    );
}
export default Header;



