import React from 'react';

const Bio = () => {
    return (
        <section id="bio" className="py-20 bg-black text-white">
            {/* Perkenalan */}
            <div className="px-6 sm:px-12 lg:px-64 text-center font-inter">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                    Hi, saya Muhammad Amirul
                </h2>
                <p className="text-sm sm:text-base lg:text-xl text-slate-300 text-justify font-medium leading-relaxed">
                    Saya adalah Web Developer pemula dengan 9 bulan pengalaman menggunakan HTML, CSS, dan JavaScript.
                    Terbiasa mengerjakan proyek web secara tim maupun mandiri, seperti website sekolah dan sistem internal.
                    Lulusan Manajemen Informatika dan bersertifikasi BNSP. Siap berkembang dan berkontribusi di dunia web modern.
                </p>
            </div>

            {/* Divider */}
            <div className="mt-20 text-center px-6">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">My Expertise</h3>
                <p className="text-gray-400 mt-2 text-sm sm:text-base">Kemampuan utama yang saya kuasai</p>
            </div>

            {/* Card Keahlian */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 sm:px-10 lg:px-32 mt-12 max-w-7xl mx-auto">
                {/* Card 1 */}
                <div className="border border-gray-600 p-6 rounded-xl bg-gray-900 shadow-md hover:shadow-pink-500/20 transition-shadow">
                    <div className="text-3xl sm:text-4xl mb-4">💻</div>
                    <h4 className="text-xl sm:text-2xl font-bold mb-2">
                        <span className="border-b-4 border-pink-500">Software</span> Development
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base mt-2 border-l-2 pl-4 border-gray-500 leading-relaxed">
                        Terbiasa dengan paradigma fungsional dan OOP: Dart, Python, Java, JavaScript, dan TypeScript.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="border border-gray-600 p-6 rounded-xl bg-gray-900 shadow-md hover:shadow-blue-500/20 transition-shadow">
                    <div className="text-3xl sm:text-4xl mb-4">⚛️</div>
                    <h4 className="text-xl sm:text-2xl font-bold mb-2">
                        <span className="border-b-4 border-blue-500">Frontend Dev</span><br />React & NextJS
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base mt-2 border-l-2 pl-4 border-gray-500 leading-relaxed">
                        Antusias dalam UI/UX. Familiar dengan HTML, CSS, JavaScript serta framework React dan Next.js.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="border border-gray-600 p-6 rounded-xl bg-gray-900 shadow-md hover:shadow-orange-500/20 transition-shadow">
                    <div className="text-3xl sm:text-4xl mb-4">📱</div>
                    <h4 className="text-xl sm:text-2xl font-bold mb-2">
                        <span className="border-b-4 border-orange-500">Flutter Dev</span><br />Android & iOS
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base mt-2 border-l-2 pl-4 border-gray-500 leading-relaxed">
                        Mampu membuat aplikasi mobile hybrid dan cross-platform menggunakan framework Flutter.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Bio;
