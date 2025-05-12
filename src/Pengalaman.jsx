import React, { useState } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    const experienceData = [
        {
            id: 1,
            title: 'Processing Staff',
            period: '2024 – Present',
            locations: [
                { name: 'Banten, Indonesia' }
            ],
            description: 'Melakukan penyortiran barang berdasarkan kode, pemindaian pickup, pengukuran dimensi, penempelan resi, serta berperan dalam proses pengiriman dan bongkar muat barang.',
            skills: ['Kerja sama tim', 'Logistik', 'Operational Guiding'],
        },
        {
            id: 2,
            title: 'Web Developer',
            period: 'Mei 2024 – Jul 2024',
            locations: [{ name: 'Jakarta Selatan, Indonesia' }],
            description: 'Mengembangkan website informasi sekolah menggunakan HTML, CSS, dan JavaScript, termasuk mendesain elemen visual seperti carousel dan banner PPDB untuk wilayah Bogor dan Palembang. Bertanggung jawab atas dokumentasi kode serta penyusunan panduan penggunaan, sekaligus mengelola dan merekap data pendaftar secara terstruktur.',
            skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Tailwind', 'Laravel', 'Adobe Illustrator', 'Adobe Photoshop', 'Kerjasama Tim',],
        },
        {
            id: 3,
            title: 'Magang Web Developer',
            period: 'November 2023 – April 2024',
            locations: [{ name: 'Jakarta Selatan, Indonesia' }],
            description: 'Aktif mempelajari pemrograman lanjutan, berkolaborasi dalam tim menggunakan metode Scrum, dan membangun pemahaman terhadap etika serta budaya kerja profesional.',
            skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Tailwind', 'Laravel', 'Kerjasama Tim',],
        },
    ];

    return (
        <div id="pengalaman" className="bg-white pt-12 pb-20 px-6 sm:px-8 lg:px-16">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Experience</h2>
                <p className="text-lg sm:text-xl text-gray-600">Pengalaman kerja saya</p>
                <div className="w-24 h-1 bg-purple-600 mx-auto mt-6"></div>
            </div>

            {/* Experience Timeline */}
            <div className="max-w-3xl mx-auto">
                {/* Tabs Navigation */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {experienceData.map((exp, index) => (
                        <button
                            key={exp.id}
                            onClick={() => setActiveTab(index)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === index
                                ? 'bg-purple-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {exp.title}
                        </button>
                    ))}
                </div>

                {/* Experience Content */}
                <div className="space-y-8">
                    {experienceData.filter((_, index) => index === activeTab).map((exp) => (
                        <div key={exp.id} className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow-sm">
                            <div className="flex flex-col sm:flex-row justify-between mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                                <span className="text-purple-600 font-medium">{exp.period}</span>
                            </div>

                            {/* Locations */}
                            {exp.locations.length > 0 && (
                                <div className="flex flex-wrap gap-4 mb-6">
                                    {exp.locations.map((loc, idx) => (
                                        <div key={idx} className="flex items-center text-gray-700">
                                            <MapPin size={16} className="mr-1" />
                                            <span className={`${loc.current ? 'font-medium' : ''}`}>
                                                {loc.name}
                                                {loc.current && (
                                                    <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">
                                                        Current
                                                    </span>
                                                )}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Description */}
                            {exp.description && (
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {exp.description}
                                </p>
                            )}

                            {/* Skills */}
                            {exp.skills.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Empty State */}
                            {!exp.description && (
                                <div className="text-gray-400 italic">
                                    No description available
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;