import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    // Disable scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    const handleScroll = () => {
        if (window.scrollY < 50) {
            setShowHeader(true);
            setIsScrolled(false);
        } else if (window.scrollY > lastScrollY) {
            setShowHeader(false);
            setIsScrolled(true);
        } else {
            setShowHeader(true);
            setIsScrolled(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { href: '#beranda', label: 'beranda' },
        { href: '#bio', label: 'bio' },
        { href: '#pekerjaan', label: 'pekerjaan' },
        { href: '#pengalaman', label: 'pengalaman' },
        { href: '#kontak', label: 'kontak' },
    ];

    return (
        <>
            {/* Mobile Header */}
            <header className={`lg:hidden fixed top-0 left-0 w-full z-50 transition-all duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'
                } ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
                }`}>
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center">
                        <h1 className="text-xl font-bold text-gray-900 mr-4">
                            MUHAMMAD<br />AMIRUL
                        </h1>
                    </div>
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="text-gray-900 p-2"
                        aria-label="Open Menu"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            {/* Desktop Header */}
            <header className={`hidden lg:block fixed top-0 left-0 w-full z-50 transition-all duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'
                } ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
                }`}>
                <div className="container mx-auto px-6 py-4">
                    <nav className="flex justify-center space-x-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-gray-900 hover:text-purple-600 transition-colors text-sm uppercase tracking-wider font-medium relative group"
                            >
                                <span className="text-purple-600 mr-1">//</span>
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>
                </div>
            </header>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-black/95 z-50 transition-all duration-500 ease-in-out transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'
                } lg:hidden`}>
                <div className="container h-full mx-auto px-6 py-8 flex flex-col">
                    <div className="flex justify-between items-start mb-12">
                        <div>
                            <h1 className="text-2xl font-bold text-white">
                                MUHAMMAD<br />AMIRUL
                            </h1>
                            <p className="text-sm text-gray-300 mt-1">
                                WEB DEVELOPER & GRAPHIC DESIGNER
                            </p>
                        </div>
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="text-white p-2"
                            aria-label="Close Menu"
                        >
                            <X size={28} />
                        </button>
                    </div>

                    <nav className="flex-1 flex flex-col justify-center space-y-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-2xl text-white hover:text-purple-400 transition-colors relative group"
                            >
                                <span className="text-purple-400 mr-2">//</span>
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    <div className="pb-8 text-center text-gray-400 text-sm">
                        <p>© 2025 Muhammad Amirul</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;