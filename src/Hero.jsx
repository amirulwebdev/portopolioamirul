import React from 'react';
import { ArrowBigDownDash } from 'lucide-react';

const Hero = () => {
    return (
        <section id="beranda" className="relative py-24 sm:py-32 bg-white text-slate-50 overflow-hidden">
            {/* Background Blurs */}
            <div className="hidden sm:block absolute -top-32 -left-32 w-72 h-72 bg-purple-900 opacity-20 rounded-full blur-3xl"></div>
            <div className="hidden sm:block absolute top-24 right-24 w-72 h-72 bg-purple-600 opacity-20 rounded-full blur-3xl"></div>

            {/* Hero Content */}
            <div className="text-center uppercase px-6 sm:px-0 text-black font-inter">
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight">
                    Muhammad<br />Amirul
                </h1>
                <p className="text-lg sm:text-xl lg:text-3xl pt-4 font-bold">
                    Web Developer & Graphic Designer
                </p>
            </div>

            {/* Scroll Button */}
            <div className="flex justify-center pt-14 sm:pt-20">
                <a href="#bio" className="font-cascadiacode text-base text-black sm:text-lg lg:text-xl flex flex-col items-center hover:text-purple-800 transition-colors">
                    <span className="mb-1 sm:mb-2">// scroll down</span>
                    <div className="animate-bounce">
                        <ArrowBigDownDash size={40} />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
