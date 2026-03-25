import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <>
        <nav className="navbar">
            <div className="logo">
                <span className="logo-icon">{`</>`}</span>
                <span className="logo-text">Annu</span>
            </div>

            {/* Hamburger Menu Button - Mobile ke liye */}
            <button 
                className="menu-icon" 
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? '✕' : '☰'}
            </button>

            {/* Menu Links */}
            <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
                <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
        </nav>
        </>
    );
}

export default Navbar;