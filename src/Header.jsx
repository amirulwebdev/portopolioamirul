import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent text-white py-6">
            <div className="flex justify-between items-center px-6">
                {/* Tombol hamburger di kiri */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden transition-transform duration-300 ease-in-out"
                >
                    {menuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>

                {/* Nav Desktop */}
                <div className="hidden lg:flex justify-center w-full pt-12">
                    <nav className="flex space-x-10 font-cascadiacode font-semibold text-xl group">
                        <a href="beranda" className="transition duration-300 group-hover:opacity-50 hover:opacity-100 hover:text-yellow-400">
                            // beranda
                        </a>
                        <a href="tentang" className="transition duration-300 group-hover:opacity-50 hover:opacity-100 hover:text-yellow-400">
                            // bio
                        </a>
                        <a href="kontak" className="transition duration-300 group-hover:opacity-50 hover:opacity-100 hover:text-yellow-400">
                            // pekerjaan
                        </a>
                        <a href="kontak" className="transition duration-300 group-hover:opacity-50 hover:opacity-100 hover:text-yellow-400">
                            // pengalaman
                        </a>
                        <a href="kontak" className="transition duration-300 group-hover:opacity-50 hover:opacity-100 hover:text-yellow-400">
                            // kontak
                        </a>
                    </nav>
                </div>
            </div>

            {/* Nav Mobile */}
            <div
                className={`fixed top-0 left-0 h-screen w-[80%] bg-gray-100 text-black flex flex-col p-6 transition-transform duration-500 ease-in-out transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Tombol Close */}
                <button
                    onClick={() => setMenuOpen(false)}
                    className="mb-12 self-start z-50"
                >
                    <div className="bg-gray-200 p-2 rounded-full">
                        <X size={24} />
                    </div>
                </button>

                {/* Navigasi Mobile */}
                <nav className="flex flex-col space-y-6 font-inter font-semibold text-lg text-left">
                    <a href="#beranda" onClick={() => setMenuOpen(false)}>// home</a>
                    <a href="#expertise" onClick={() => setMenuOpen(false)}>// keahlian</a>
                    <a href="#work" onClick={() => setMenuOpen(false)}>// work</a>
                    <a href="#experience" onClick={() => setMenuOpen(false)}>// experience</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>// contact</a>
                </nav>

                {/* Footer */}
                <div className="mt-auto pt-12 text-sm text-black font-light">
                    <p>© 2025. Made with passion by Muhammad Amirul.</p>
                    <p>All rights reserved.</p>
                </div>
            </div>

        </header>
    );
};

export default Header;
