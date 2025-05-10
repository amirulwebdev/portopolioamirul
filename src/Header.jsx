import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (window.scrollY < 50) {
            setShowHeader(true);
        } else if (window.scrollY > lastScrollY) {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { href: '#beranda', label: '// beranda' },
        { href: '#bio', label: '// bio' },
        { href: '#pekerjaan', label: '// pekerjaan' },
        { href: '#pengalaman', label: '// pengalaman' },
        { href: '#kontak', label: '// kontak' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 bg-transparent bg-opacity-70 backdrop-blur text-white py-4 transition-transform duration-500 ${showHeader ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <div className="flex justify-between items-center px-6">
                {/* Hamburger Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden transition-transform duration-300 ease-in-out"
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex justify-center w-full pt-4 space-x-10 font-cascadiacode font-semibold text-lg">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="transition duration-300 group-hover:opacity-50 hover:opacity-100 hover:text-yellow-400"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`fixed top-0 left-0 h-screen w-[80%] bg-white text-black flex flex-col p-6 transition-transform duration-500 ease-in-out transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <button
                    onClick={() => setMenuOpen(false)}
                    className="mb-12 self-start z-50"
                    aria-label="Close Menu"
                >
                    <div className="bg-gray-200 p-2 rounded-full">
                        <X size={24} />
                    </div>
                </button>

                <nav className="flex flex-col space-y-6 font-inter font-semibold text-lg">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Footer */}
                <div className="mt-auto pt-12 text-sm text-gray-600 font-light">
                    <p>© 2025. Made with passion by Muhammad Amirul.</p>
                    <p>All rights reserved.</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
