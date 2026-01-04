'use client';

import { CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import { useMessages, useTranslations } from "next-intl";

export default function Residences() {
    const t = useTranslations('Residences');
    const messages = useMessages();
    const communityTags = messages?.Residences?.communityTags || [];
    const liveStayPlayBullets = messages?.Residences?.liveStayPlayBullets || [];

    return (
        <>
            <div className="">
                {/* Banner */}
                <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
                    <img src="https://picsum.photos/seed/aerial_coast/1920/800" className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Aerial View" />
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-5xl font-serif font-bold mb-4 text-tcl-gold">{t('bannerTitle')}</h1>
                        <p className="text-xl max-w-2xl mx-auto">{t('bannerSubtitle')}</p>
                        <button className="mt-8 px-8 py-3 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 transition-colors">
                            {t('bannerCta')}
                        </button>
                    </div>
                </section>


                {/* Intro: Tranquil Oasis */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-4xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-tcl-gold mb-2">{t('oasisTitle')}</h2>
                            <h3 className="text-2xl font-serif font-bold text-gray-800 uppercase tracking-wider mb-6">{t('oasisSubtitle')}</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {t('oasisDescription')}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/assets/residences/residences-1.jpg" className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md" alt="Lagoon View" />
                            <img src="/assets/residences/residences-2.jpg" className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md" alt="Resort Pool" />
                        </div>
                    </div>
                </section>

                {/* Live, Stay & Play */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                            <div className="lg:w-1/2">
                                <div className="grid grid-cols-2 gap-4">
                                    <img src="/assets/residences/residences-3.jpg" className="w-full h-48 object-cover rounded shadow" alt="Swimming" />
                                    <img src="/assets/residences/residences-4.jpg" className="w-full h-48 object-cover rounded shadow" alt="Exterior" />
                                    <img src="/assets/residences/residences-5.jpg" className="w-full h-48 object-cover rounded shadow" alt="Bedroom" />
                                    <img src="/assets/residences/residences-6.jpg" className="w-full h-48 object-cover rounded shadow" alt="Living Room" />
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl font-serif font-bold text-tcl-gold mb-4">{t('liveStayPlayTitle')}</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    {t('liveStayPlayDescription')}
                                </p>
                                <ul className="space-y-3">
                                    {liveStayPlayBullets.map((item) => (
                                        <li key={item} className="flex items-center text-gray-700">
                                            <CheckCircle size={20} className="text-green-500 mr-3" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                            <div className="lg:w-1/2">
                                <div className="grid grid-cols-2 gap-4">
                                    <img src="/assets/residences/residences-10.jpg" className="w-full h-64 object-cover rounded shadow" alt="Bedroom Detail" />
                                    <img src="/assets/residences/residences-11.jpg" className="w-full h-64 object-cover rounded shadow" alt="Dining Detail" />
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl font-serif font-bold text-tcl-gold mb-2">{t('classicComfortTitle')}</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    {t('classicComfortDescription')}
                                </p>
                                <img src="/assets/residences/residences-12.jpg" className="w-full h-64 object-cover rounded shadow-lg mt-6" alt="Building Exterior" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community & Amenities */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-4xl mx-auto mb-16">
                            <h2 className="text-3xl font-serif font-bold text-tcl-gold mb-6 uppercase tracking-widest">{t('communityTitle')}</h2>
                            <p className="text-gray-600 text-lg mb-8">
                                {t('communityDescription')}
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 text-gray-700 font-medium">
                                {communityTags.map((tag) => (
                                    <span key={tag} className="bg-blue-50 px-4 py-2 rounded-full border border-blue-100">{tag}</span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <img src="/assets/residences/residences-13.jpg" className="w-full h-80 object-cover rounded-lg shadow" alt="Courtyard" />
                            <div className="grid grid-cols-2 gap-4">
                                <img src="/assets/residences/residences-14.jpg" className="w-full h-80 object-cover rounded-lg shadow" alt="Interior View" />
                                <img src="/assets/residences/residences-15.jpg" className="w-full h-80 object-cover rounded-lg shadow" alt="Window View" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cabarete Beach Section */}
                <section className="py-20 bg-blue-50">
                    <div className="container mx-auto px-4">
                        <div className="mb-16">
                            <h2 className="text-3xl font-serif font-bold text-tcl-gold mb-6 uppercase">{t('cabareteTitle')}</h2>
                            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
                                {t('cabareteDescription')}
                            </p>
                            <img src="/assets/residences/residences-16.jpg" className="w-full h-[400px] object-cover rounded-lg shadow-xl mt-8" alt="Kitesurfing" />
                        </div>

                        <div className="flex flex-col md:flex-row gap-12">
                            <div className="md:w-1/2">
                                    <div className="grid grid-cols-2 gap-4">
                                        <img src="/assets/residences/residences-17.jpg" className="w-full h-48 object-cover rounded shadow" alt="Night Life" />
                                        <img src="/assets/residences/residences-18.jpg" className="w-full h-48 object-cover rounded shadow" alt="Street Cafe" />
                                    </div>
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="text-2xl font-serif font-bold text-tcl-gold mb-4">{t('adventureTitle')}</h3>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    {t('adventureDescription')}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Floor Plans */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-serif font-bold text-center text-gray-800 mb-12">{t('floorPlansTitle')}</h2>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* 2nd Floor */}
                            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">{t('secondFloorTitle')}</h3>
                                <div className="mb-6">
                                    <img src="/assets/residences/floorplan-1.jpg" className="w-full h-auto object-contain mb-4 border rounded bg-gray-50" alt="2nd Floor Plan" />
                                </div>
                                <table className="w-full text-center">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="py-2">{t('unitLabel')}</th>
                                            <th className="py-2">{t('areaLabel')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-blue-100"><td className="py-1">420</td><td>48</td></tr>
                                        <tr className="bg-blue-100"><td className="py-1">421</td><td>34</td></tr>
                                        <tr className="bg-blue-100"><td className="py-1">422</td><td>37</td></tr>
                                        <tr className="bg-blue-100"><td className="py-1">423</td><td>32</td></tr>
                                        <tr className="bg-green-100"><td className="py-1">424</td><td>39</td></tr>
                                        <tr className="bg-green-100"><td className="py-1">425</td><td>31</td></tr>
                                        <tr className="bg-green-100"><td className="py-1">426</td><td>32</td></tr>
                                        <tr className="bg-green-100"><td className="py-1">427</td><td>38</td></tr>
                                        <tr className="bg-green-100"><td className="py-1">428</td><td>37</td></tr>
                                    </tbody>
                                </table>
                                <div className="flex gap-4 mt-4 text-xs font-bold uppercase justify-center">
                                    <span className="flex items-center"><span className="w-3 h-3 bg-blue-100 border border-blue-200 mr-2"></span> {t('poolView')}</span>
                                    <span className="flex items-center"><span className="w-3 h-3 bg-green-100 border border-green-200 mr-2"></span> {t('courtyardView')}</span>
                                </div>
                            </div>

                            {/* 1st Floor */}
                            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">{t('firstFloorTitle')}</h3>
                                <div className="mb-6">
                                    <img src="/assets/residences/floorplan-3.jpg" className="w-full h-auto object-contain mb-4 border rounded bg-gray-50" alt="1st Floor Plan" />
                                </div>
                                <table className="w-full text-center">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="py-2">{t('unitLabel')}</th>
                                            <th className="py-2">{t('areaLabel')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-blue-100"><td className="py-1">410</td><td>32</td></tr>
                                        <tr className="bg-blue-100"><td className="py-1">411</td><td>34</td></tr>
                                        <tr className="bg-blue-100"><td className="py-1">412</td><td>37</td></tr>
                                        <tr className="bg-blue-100"><td className="py-1">413</td><td>32</td></tr>
                                        <tr className="bg-green-100"><td className="py-1">414</td><td>34</td></tr>
                                        <tr className="bg-green-100"><td className="py-1">415</td><td>36</td></tr>
                                        <tr className="bg-green-100"><td className="py-1">416</td><td>36</td></tr>
                                        <tr className="bg-green-100"><td className="py-1">417</td><td>61</td></tr>
                                        <tr className="bg-green-100"><td className="py-1">418</td><td>37</td></tr>
                                    </tbody>
                                </table>
                                <div className="flex gap-4 mt-4 text-xs font-bold uppercase justify-center">
                                    <span className="flex items-center"><span className="w-3 h-3 bg-blue-100 border border-blue-200 mr-2"></span> {t('poolView')}</span>
                                    <span className="flex items-center"><span className="w-3 h-3 bg-green-100 border border-green-200 mr-2"></span> {t('courtyardView')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Discovery / Contact */}
                <section className="bg-gray-50 py-20 border-t border-gray-200">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-serif font-bold text-gray-800 uppercase tracking-wide mb-4">{t('discoveryTitle')}</h2>
                            <p className="text-xl text-tcl-gold font-serif italic">{t('discoverySubtitle')}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-4">
                                {/* Placeholder Maps */}
                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <img src="/assets/residences/map-1.jpg" className="w-full h-52 object-cover rounded shadow mb-2" alt="Flight Map" />
                                        <img src="/assets/residences/map-2.jpg" className="w-full h-56 object-cover rounded shadow mt-2" alt="Regional Map" />
                                    </div>
                                    
                                    <img src="/assets/residences/map-3.jpg" className=" w-full h-110 object-cover rounded shadow" alt="Satellite View" />
                                </div>
                            </div>
                            <div className="bg-white p-10 rounded-xl shadow-lg text-center md:text-left">
                                <div className="flex flex-col items-center md:items-start space-y-6 justify-center">
                                    <div className="mb-0 w-full">
                                        <img src="/logo.png" alt="Logo" className="w-40 h-30 object-contain" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-gray-800">{t('contactName')}</h3>
                                    <div className="space-y-3 text-gray-600">
                                        <p className="flex items-start justify-center md:justify-start">
                                            <MapPin className="text-tcl-gold mr-2 mt-1 flex-shrink-0" size={18} />
                                            {t('contactAddress')}
                                        </p>
                                        <p className="flex items-center justify-center md:justify-start">
                                            <Phone className="text-tcl-gold mr-2 flex-shrink-0" size={18} />
                                            {t('contactPhone')}
                                        </p>
                                        <p className="flex items-center justify-center md:justify-start">
                                            <Mail className="text-tcl-gold mr-2 flex-shrink-0" size={18} />
                                            <a href={`mailto:${t('contactEmail')}`} className="hover:text-tcl-gold transition-colors">{t('contactEmail')}</a>
                                        </p>
                                    </div>
                                    <a href="mailto:info@tropicalcasalaguna.com" className="w-full hover:text-tcl-gold transition-colors">
                                        <button className="w-full cursor-pointer bg-yellow-500 text-white font-bold py-3 rounded hover:bg-yellow-600 transition-colors uppercase tracking-wider shadow-md mt-4">
                                            {t('contactCta')}
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
