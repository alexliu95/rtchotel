'use client';

import Image from "next/image";
import { useMessages, useTranslations } from "next-intl";

export default function Page() {
    const t = useTranslations('BeachClub');
    const messages = useMessages();
    const intro = messages?.BeachClub?.intro || [];
    const highlights = messages?.BeachClub?.highlights || [];

    return (
        <div
            className="w-full min-h-screen bg-white dark:bg-black transition-colors duration-200"
            data-oid="xe67850"
        >
            {/* Oasis Pool Bar Section */}
            <section className="py-16 bg-white dark:bg-gray-900" data-oid="2.ljszm">
                <div className="flex gap-8 justify-center items-center mb-12">
                    <div>
                        <Image src="/assets/beachclub/beach-club.png" width="300" height="200" alt="Tropical Casa Laguna Beach Club" className="rounded-lg" />
                    </div>
                    <div>
                        <Image src="/assets/beachclub/kalipso.png" width="300" height="200" alt="Kalipso Restaurant Beach View" className="rounded-lg" />
                    </div>
                </div>
                <div className="container mx-auto px-4" data-oid="k:vk1s3">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-600 dark:text-white">{t('heroTitle')}</h2>
                    {intro.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>
            </section>
            <section className="py-16 bg-blue-50 dark:bg-gray-900" data-oid="2.ljszm">
                <div className="flex gap-8 justify-center items-center mb-12">
                    <div>
                        <Image src="/assets/beachclub/beach-club-1.jpg" width="300" height="200" alt="Tropical Casa Laguna Beach Club" className="rounded-lg" />
                    </div>
                    <div>
                        <Image src="/assets/beachclub/beach-club.png" width="300" height="200" alt="Tropical Casa Laguna Beach Club" className="rounded-lg" />
                    </div>
                    <div>
                        <Image src="/assets/beachclub/beach-club-2.jpg" width="300" height="200" alt="Kalipso Restaurant Beach View" className="rounded-lg" />
                    </div>
                </div>
                <div className="container mx-auto px-4" data-oid="k:vk1s3">
                    <div className="grid md:grid-cols-2 gap-12 items-center" data-oid="52l7_hd">
                        <div data-oid="oa_ey8e">
                            <h2
                                className="text-4xl font-bold text-gray-600 mb-6"
                                data-oid="i5w.ve7"
                            >
                                {t('clubTitle')}
                            </h2>

                            <p className="text-gray-700 dark:text-gray-300 mb-4" data-oid="cai3f7v">
                                {t('clubDescription')}
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" data-oid="qow5e_g">
                            <h3 className="text-2xl font-bold mb-4 text-center" data-oid="l3sl5hq">
                                {t('highlightsTitle')}
                            </h3>
                            <div className="gap-4 text-sm" data-oid="g5-6jea">
                                <div data-oid="xi7v1jw">
                                    <ul
                                        className="space-y-1 text-gray-600 dark:text-gray-400"
                                        data-oid="p3i:mv2"
                                    >
                                        {highlights.map((item, idx) => (
                                            <li key={idx} data-oid="a-s1nhc">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
