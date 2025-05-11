import React from 'react'

const Work = () => {
    return (
        <div className='bg-black px-6 py-12'>
            <div className="text-white font-inter text-4xl md:text-6xl font-bold text-center">
                My Work
            </div>
            <div className="text-gray-400 font-inter pt-4 text-center mb-8">Ini projek yang sudah saya buat.</div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {/* Card 1 */}
                <div
                    className="relative h-60 rounded-xl shadow-md hover:shadow-none transform transition-transform duration-300 hover:scale-105 bg-cover bg-center text-white focus:outline-none"
                    style={{ backgroundImage: `url('/advanweb.png')` }}
                >
                    <div className="absolute inset-0 bg-slate-950 bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
                        <p className="text-center text-sm md:text-xl px-4 font-inter">
                            Menjelaskan laptop advan workplus, laptop terbaik buatan Indonesia.
                            <div className="pt-8">
                                <a
                                    href="https://advanworkplus.netlify.app/"
                                    className="p-2 px-4 rounded-3xl border-2 border-white text-white transition-all duration-300 ease-in-out hover:bg-amber-900 hover:border-amber-900"
                                >
                                    Telusuri Website
                                </a>
                            </div>
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div
                    className="relative h-60 rounded-xl shadow-md hover:shadow-none transform transition-transform duration-300 hover:scale-105 bg-cover bg-center text-white focus:outline-none"
                    style={{ backgroundImage: `url('/advanweb.png')` }}
                >
                    <div className="absolute inset-0 bg-slate-950 bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
                        <p className="text-center text-sm md:text-base px-4">
                            Ini adalah penjelasan tentang gambar atau fitur ini.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div
                    className="relative h-60 rounded-xl shadow-md hover:shadow-none transform transition-transform duration-300 hover:scale-105 bg-cover bg-center text-white focus:outline-none"
                    style={{ backgroundImage: `url('/advanweb.png')` }}
                >
                    <div className="absolute inset-0 bg-slate-950 bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
                        <p className="text-center text-sm md:text-base px-4">
                            Ini adalah penjelasan tentang gambar atau fitur ini.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
