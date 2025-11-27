'use client'
import Image from "next/image";
import { useState } from "react";
import ChatButton from "./components/ChatButton";
import { Hero } from "./components/Hero";
import BookingWidget from "./components/BookingWidget";
import FooterWhite from "./components/FooterWhite";
import { Navigation } from "./components/Navigation";
import { Slider } from "./components/Slider";
import Header from "./components/Header";
import { MapPin, Palmtree, Wind } from "lucide-react";
import Link from "next/link";

export default function Home() {
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
		<div className="">
			{/* <SlideShow slides={slides} /> */}
			<Header />
			<div className="content">
				<div>
					{/* Intro Section */}
					<section className="py-20 bg-white">
						<div className="container mx-auto px-4 text-center max-w-4xl">
							<h5 className="text-tcl-gold font-bold uppercase tracking-widest text-sm mb-4">The Resort</h5>
							<h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-8">A Tranquil Oasis Between Ocean and Lagoon</h2>
							<p className="text-gray-600 leading-relaxed text-lg">
								Tropical Casa Laguna is a peaceful and tranquil oasis located in the center of Cabarete on the shores of the north coast of the Dominican Republic. Just steps from the vibrant town life yet secluded enough to offer pure relaxation, we offer the perfect balance for your dream vacation.
							</p>
						</div>
					</section>

					{/* Location/Highlights Grid */}
					<section className="bg-gray-50 py-20">
						<div className="container mx-auto px-4">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
								<div className="order-2 md:order-1 space-y-8">
									<div>
										<div className="flex items-center space-x-3 mb-4">
										<MapPin className="text-tcl-gold" size={24} />
										<h3 className="text-2xl font-serif font-bold text-gray-800">In the Heart of Cabarete</h3>
										</div>
										<p className="text-gray-600">
										Cabarete is a vibrant beach town known as the adventure capital of the Caribbean. Located just 25 minutes from Puerto Plata International Airport (POP), getting here is a breeze.
										</p>
									</div>
									
									<div>
										<div className="flex items-center space-x-3 mb-4">
											<Wind className="text-tcl-gold" size={24} />
											<h3 className="text-2xl font-serif font-bold text-gray-800">World-Class Watersports</h3>
										</div>
										<p className="text-gray-600">
											Famed for kiteboarding, windsurfing, and surfing. Whether you're a pro or a beginner, the warm waters and reliable trade winds make it an aquatic playground.
										</p>
									</div>

									<div>
										<div className="flex items-center space-x-3 mb-4">
											<Palmtree className="text-tcl-gold" size={24} />
											<h3 className="text-2xl font-serif font-bold text-gray-800">Lush Surroundings</h3>
										</div>
										<p className="text-gray-600">
											A mix of coastal scenery, nearby lagoons, hills, and tropical vegetation creates a stunning backdrop for your holiday.
										</p>
									</div>
								</div>
								<div className="order-1 md:order-2">
									<div className="grid grid-cols-2 gap-4">
										<img src="/assets/home/resort-1.jpg" className="rounded-lg shadow-lg w-full h-64 object-cover transform translate-y-8" alt="Kitesurfing" />
										<img src="/assets/home/resort-2.jpg" className="rounded-lg shadow-lg w-full h-64 object-cover" alt="Town Life" />
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* Teaser Sections */}
					<section className="py-20">
						<div className="container mx-auto px-4">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
								{/* Dining */}
								<Link href="/dining" className="group relative overflow-hidden rounded-lg shadow-lg aspect-[3/4]">
									<img src="https://picsum.photos/seed/dining/600/800" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Dining" />
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
										<h3 className="text-white font-serif text-2xl font-bold mb-2">Exquisite Dining</h3>
										<p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
										From swim-up bars to beachfront seafood.
										</p>
									</div>
								</Link>

								{/* Wellness */}
								<Link href="/spa" className="group relative overflow-hidden rounded-lg shadow-lg aspect-[3/4]">
									<img src="https://picsum.photos/seed/spa/600/800" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Spa" />
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
										<h3 className="text-white font-serif text-2xl font-bold mb-2">Spa & Wellness</h3>
										<p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
										Rejuvenate at The Endorphinery or relax in our pools.
										</p>
									</div>
								</Link>

								{/* Residences */}
								<Link href="/residences" className="group relative overflow-hidden rounded-lg shadow-lg aspect-[3/4]">
									<img src="https://picsum.photos/seed/condo/600/800" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Residences" />
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
										<h3 className="text-white font-serif text-2xl font-bold mb-2">Own Paradise</h3>
										<p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
										1 & 2 Bedroom Studios for sale.
										</p>
									</div>
								</Link>
							</div>
						</div>
					</section>
				</div>
				<div className="w-full py-10 px-4">
					<div className="text-center">
						<h1 className="text-3xl md:text-4xl font-serif text-gray-800">AN OASIS, STEPS FROM THE BEACH, IN THE HEART OF CABARETE.</h1>
					</div>
				</div>
				<div className="flex justify-center">
					<div className="grid grid-cols-4 gap-4 px-4">
						<div className="aspect-[4/3]"><Image src="/assets/home/pic1.png" width={640} height={480} alt="pic1" className="rounded-lg shadow-lg w-full h-64 object-cover" /></div>
						<div className="aspect-[4/3]"><Image src="/assets/home/pic2.png" width={640} height={480} alt="pic2" className="rounded-lg shadow-lg w-full h-64 object-cover" /></div>
						<div className="aspect-[4/3]"><Image src="/assets/home/pic3.png" width={640} height={480} alt="pic3" className="rounded-lg shadow-lg w-full h-64 object-cover" /></div>
						<div className="aspect-[4/3]"><Image src="/assets/home/pic4.png" width={640} height={480} alt="pic4" className="rounded-lg shadow-lg w-full h-64 object-cover" /></div>
					</div>
				</div>
				<section className="my-20">
					<div className="w-2/3 mx-auto"></div>
						<div className="font-mono my-4 w-2/3 text-center mx-auto">
							Cabarete is a vibrant beach town on the northern coast of the Dominican Republic, 
							in the province of Puerto Plata. It lies along the Atlantic shoreline and is a short 18 km 
							(11 mi)/25-minute drive from Puerto Plata international airport.
						</div>
						<div className="w-2/3 mx-auto">
							Cabarete is famed for its water-sports culture, especially kiteboarding, windsurfing, and surfing, 
							and features a mix of coastal scenery, nearby lagoons, hills, and tropical surroundings. 
							This laidback resort town has quickly become one of the most popular holiday destinations in the caribbean. 
						</div>
					
				</section>
			</div>
			<FooterWhite />
		</div>
	);
}
