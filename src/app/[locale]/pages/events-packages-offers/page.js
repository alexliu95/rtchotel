'use client'

import { useTranslations } from "next-intl";

export default function EventsPackagesOffers() {
    const t = useTranslations('Events');
	return (
		<div className="">
			<div className="content">
				<div className="w-full py-10">
					<div className="text-center w-2/3 mx-auto">
						<h1 className="title text-3xl font-bold text-[#d4b14e] font-['Montserrat']">{t('title')}</h1>
						<div className="w-2/3 mx-auto"></div>
						<p className="mt-4 text-gray-700">{t('description')}</p>
						<div className="font-mono my-4 text-left mx-auto">
                            <p className="font-bold"></p>
							<p>
                            </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
