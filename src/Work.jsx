import React from 'react';

const Work = () => {
    return (
        <div id="pekerjaan" className="bg-white py-20 px-6 sm:px-8 lg:px-16">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">My Work</h2>
                <p className="text-lg sm:text-xl text-gray-600">Ini projek yang sudah saya buat.</p>
            </div>

            {/* Project Grid */}
            <div className="max-w-6xl mx-auto">
                {/* Featured Project - ADVAN Workplus */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    {/* Project Image */}
                    <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-lg">
                        <img
                            src="/advanweb.png"
                            alt="ADVAN Workplus Project"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                            <a
                                href="https://advanworkplus.netlify.app/"
                                className="inline-block px-6 py-3 bg-white text-purple-700 rounded-full font-medium hover:bg-purple-700 hover:text-white transition-colors"
                            >
                                Telusuri Website
                            </a>
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-4">
                            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-2">
                                Laptop Spec Website
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">ADVAN Workplus</h3>
                            <h4 className="text-xl text-purple-600 font-semibold mb-1">AMD RYZEN 5</h4>
                            <h5 className="text-lg text-gray-600 mb-4">6600H 14" FHD IPS 16GB 1TB Win 11</h5>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Dibuat untuk profesional, sistem yang sangat cocok untuk programming, content creator,
                            dan gaming. Anti thermal throttling untuk semua kebutuhan kerja Anda.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {['Produk', 'Sport/Email', 'Review', 'Testimoni'].map((item) => (
                                <span key={item} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Additional Projects Section */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">GET READOUT</h3>
                    <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Lihat lebih banyak proyek yang telah saya kerjakan
                    </p>
                </div>

                {/* More Projects Grid - Uncomment when you have more projects */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="relative h-60 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                            <img 
                                src="/project-placeholder.jpg" 
                                alt={`Project ${item}`} 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                <button className="px-4 py-2 bg-white text-gray-900 rounded-full font-medium">
                                    View Project
                                </button>
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default Work;