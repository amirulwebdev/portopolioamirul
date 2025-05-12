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
            className={`fixed pt-6 top-0 left-0 w-full z-50 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'
                } bg-transparent`}
        >
            <div className="flex justify-between items-center px-6 py-4">
                {/* Hamburger Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden text-purple-700 transition-transform duration-300 ease-in-out"
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex justify-center w-full space-x-10 font-cascadiacode font-semibold text-lg">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-black transition duration-300 hover:text-purple-500"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`fixed top-0 left-0 h-screen w-[80%] bg-black text-white flex flex-col p-6 transition-transform duration-500 ease-in-out transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Close Button */}
                <button
                    onClick={() => setMenuOpen(false)}
                    className="mb-12 self-start z-50"
                    aria-label="Close Menu"
                >
                    <div className="bg-purple-700 p-2 rounded-full text-white">
                        <X size={24} />
                    </div>
                </button>

                {/* Mobile Nav Links */}
                <nav className="flex flex-col space-y-6 font-inter font-semibold text-lg">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-purple-400 transition duration-300"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Footer */}
                <div className="mt-auto pt-12 text-sm text-gray-500 font-light">
                    <p>© 2025. Made with passion by Muhammad Amirul.</p>
                    <p>All rights reserved.</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
