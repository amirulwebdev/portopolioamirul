import React from 'react';
import { Mail, Linkedin, Github, File } from 'lucide-react';

const Footer = () => {
    return (
        <div className="relative min-h-screen bg-slate-900"> {/* Background utama diubah ke slate-900 */}
            {/* Dua bagian background dipertahankan tapi dengan warna yang konsisten */}
            <div className="absolute inset-0 z-0">
                <div className="h-1/2 bg-slate-900"></div> {/* Bagian atas dibuat slate-900 */}
                <div className="h-1/2 bg-slate-900"></div> {/* Bagian bawah dibuat slate-900 */}
            </div>

            {/* Konten */}
            <div className="relative z-10">
                {/* CTA Box - posisi dan styling dipertahankan */}
                <div className="max-w-xl mx-auto px-4 py-8 sm:p-10 rounded-xl shadow-lg bg-purple-700 relative sm:top-40 top-24 border border-purple-500 hover:border-white transition-all duration-300">
                    <div className="space-y-4 text-center sm:text-left">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">
                            Start a project
                        </h2>
                        <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
                            Tertarik untuk bekerja sama? Silakan hubungi saya untuk mendiskusikan lebih lanjut. CV saya tersedia untuk ditinjau.
                        </p>
                        <div className="flex justify-center sm:justify-start">
                            <a href='https://drive.google.com/file/d/1aXt6JxUahia7K4xCbzSjSPGXZ9HFgV6I/view?usp=sharing' className="group flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-purple-800 px-6 py-3 rounded-full transition-all duration-300 ease-in-out text-sm font-semibold">
                                <span>Lihat CV saya</span>
                                <File size={20} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer - styling desktop dipertahankan */}
                <div className="bg-slate-900 text-white pt-48 sm:pt-60 pb-16 text-center px-4">
                    {/* Logo Circle */}
                    <div className="flex justify-center mb-6">
                        <div className="bg-white text-purple-700 rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold">
                            M
                        </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-base sm:text-lg mb-6 leading-relaxed">
                        Living, learning, & leveling up<br />one day at a time.
                    </p>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-6 text-white text-xl mb-6">
                        <a href="https://github.com/amirulwebdev"><Github className="w-5 h-5 hover:text-teal-300 transition-colors" /></a>
                        <a href="https://www.linkedin.com/in/muhammadamirul-8060b2285/"><Linkedin className="w-5 h-5 hover:text-teal-300 transition-colors" /></a>
                        <a href="https://muhammadamirul05.am@gmail.com"><Mail className="w-5 h-5 hover:text-teal-300 transition-colors" /></a>
                    </div>

                    {/* Footer Text */}
                    <p id='kontak' className="text-sm text-white/70">Handcrafted by me © twenty twenty five</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;