import React from 'react';
import { Laptop, Atom } from 'lucide-react';

const Bio = () => {
    return (
        <div id='bio' className="relative bg-white">
            {/* Purple background for top section */}
            <div className="bg-gradient-to-r from-purple-700 to-purple-600 pt-24 pb-32 text-white">
                <div className="container mx-auto px-6 sm:px-8 lg:px-16">
                    {/* Introduction Section */}
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center">
                            Hi, saya Muhammad Amirul
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-white/90 text-center leading-relaxed font-medium">
                            Saya adalah Web Developer pemula dengan 9 bulan pengalaman menggunakan HTML, CSS, dan JavaScript.
                            Terbiasa mengerjakan proyek web secara tim maupun mandiri, seperti website sekolah dan sistem internal.
                            Lulusan Manajemen Informatika dan bersertifikasi BNSP. Siap berkembang dan berkontribusi di dunia web modern.
                        </p>
                    </div>

                    {/* Expertise Header */}
                    <div className="mt-24 text-center">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">My Expertise</h3>
                        <p className="text-white/80 mt-4 text-lg font-medium">
                            Kemampuan utama yang saya kuasai
                        </p>
                    </div>
                </div>
            </div>

            {/* Skills Cards Section */}
            <div className="container mx-auto px-6 sm:px-8 lg:px-16 -mt-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Card 1 - Software Development */}
                    <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:shadow-lg transition-all">
                        <div className="flex items-start space-x-6">
                            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-700 flex items-center justify-center text-white">
                                <Laptop size={28} />
                            </div>
                            <div>
                                <h4 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
                                    <span className="pb-1 border-b-2 border-pink-500">Software</span> Development
                                </h4>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    Terbiasa dengan paradigma fungsional dan OOP: PHP, JavaScript, dan TypeScript.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 - Frontend Development */}
                    <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:shadow-lg transition-all">
                        <div className="flex items-start space-x-6">
                            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                <Atom size={28} />
                            </div>
                            <div>
                                <h4 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
                                    <span className="pb-1 border-b-2 border-blue-500">Frontend Dev</span> React & NextJS
                                </h4>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    Antusias dalam UI/UX. Familiar dengan HTML, CSS, JavaScript serta framework React dan Next.js.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom spacing */}
            <div className="pt-24"></div>
        </div>
    );
};

export default Bio;