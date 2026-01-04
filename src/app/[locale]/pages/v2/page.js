'use client';
import Image from "next/image";
import { useState } from "react";
import { useMessages, useTranslations } from "next-intl";
import SlideShow from "../../components/SlideShow";
import Footer from "../../components/Footer";

export default function Home() {
	const t = useTranslations('V2');
	const messages = useMessages();
	const navItems = messages?.V2?.nav || [];

	const [slides, setSlides] = useState([
		{
			id: 1,
			image: "/slides/170819978.jpg",
			title: "Slide 1",
			description: "Slide 1 description",
		},
		{
			id: 2,
			image: "/slides/170819992.jpg",
			title: "Slide 2",
			description: "Slide 2 description",
			},
		{
			id: 3,
			image: "/slides/170819994.jpg",
			title: "Slide 3",
			description: "Slide 3 description",
		},
		{
			id: 4,
			image: "/slides/170909763.jpg",
			title: "Slide 4",
			description: "Slide 4 description",
		},
		{
			id: 5,
			image: "/slides/577306405.jpg",
			title: "Slide 5",
			description: "Slide 5 description",
		},
	]);
	return (
		<div className="relative w-full">
            <div className="mx-auto w-full flex justify-center my-4">
                <Image src="/logo.png" alt="logo" width="300" height="80" />
            </div>
            <div className="relative text-white font-bold">
                <div className="flex z-40">
					{navItems.map((item, idx) => (
						<div key={`${item}-${idx}`}>{item}</div>
					))}
                </div>
                <div className="-mt-8 z-10">
                    <SlideShow className="absolute top-0 left-0 min-h-40 z-10" slides={slides} />
                </div>
            </div>
			
			<div className="w-full py-10">
				<div className="text-center">
					<h1 className="title text-3xl font-bold text-[#d4b14e] font-['Montserrat']">{t('headline')}</h1>
					<div className="w-2/3 mx-auto"></div>
					<div className="font-mono my-4 w-2/3 text-center mx-auto">
						{t('introLead')}
					</div>
					<div className="w-2/3 mx-auto">
						{t('introBody')}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
