import React from 'react';
import { ArrowBigDownDash } from 'lucide-react';

const Hero = () => {
    return (
        <div className="py-20 bg-slate-950  text-slate-50">
            <div className="hidden sm:block absolute -top-20 -left-20 w-72 h-72 bg-purple-900 opacity-20 rounded-full blur-3xl"></div>
            <div className="hidden sm:block absolute top-20 right-20 w-72 h-72 bg-purple-600 opacity-20 rounded-full blur-3xl"></div>
            <div className="pt-32 uppercase text-center">
                <h1 className="text-5xl lg:text-8xl font-bold font-inter">
                    Muhammad<br />Amirul
                </h1>
                <p className="text-base lg:text-4xl pt-6 font-bold font-cascadiacode">
                    Web Developer & Grapich Desainer
                </p>
            </div>

            <div className="flex justify-center pt-14">
                <a href='bio' className="font-cascadiacode sm:text-base lg:text-2xl flex flex-col items-center">
                    Ayo Lihat
                    <div className="animate-bounce mt-2">
                        <ArrowBigDownDash size={32} />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Hero;
