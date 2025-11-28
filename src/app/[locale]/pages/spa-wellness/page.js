'use client'

import { Heart, Scissors, Sparkles } from "lucide-react";

export default function Accomodations() {

	return (
		<div className="">
			<div className="content">
				<div className="bg-gray-50 py-30 text-center">
					<h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">Spa & Wellness - Where Relaxation Meets Rejuvenation</h1>
					{/* <p className="text-gray-600 max-w-2xl mx-auto uppercase tracking-widest text-sm text-tcl-gold font-bold">
						Where Relaxation Meets Rejuvenation
					</p> */}
					<div className="my-4">
						<p className="text-gray-700 text-lg font-light">Immerse yourself in a sanctuary of tranquility and indulgence with our comprehensive Spa & Wellness offerings, designed to elevate your well-being and restore your natural balance</p>
					</div>
				</div>
				

				{/* Pools Section */}
				<section className="container mx-auto px-4 py-16">
					<div className="flex flex-col md:flex-row items-center gap-12">
						<div className="md:w-1/2">
							<h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">Pools & Jacuzzi</h2>
							<p className="text-gray-600 mb-4 leading-relaxed">
							Complete your wellness journey by unwinding in one of our <strong>three stunning pools</strong>, each designed for a unique experience—whether for leisure, lap swimming, or family fun.
							</p>
							<p className="text-gray-600 leading-relaxed">
							For a deeper level of relaxation, indulge in the soothing warmth of our Jacuzzi, perfect for melting away stress and tension.
							</p>
						</div>
						<div className="md:w-1/2 grid grid-cols-2 gap-4">
							<img src="/assets/spa/spa-1.jpg" className="rounded-lg shadow-md w-full h-48 object-cover" alt="Pool 1" />
							<img src="/assets/spa/spa-2.jpg" className="rounded-lg shadow-md w-full h-48 object-cover translate-y-20" alt="Pool 2" />
							<img src="/assets/spa/spa-3.jpg" className="rounded-lg shadow-md w-full h-48 object-cover" alt="Pool 2" />
						</div>
					</div>
				</section>

				{/* The Endorphinery Section */}
				<section className="bg-white py-16">
					{/* Banner */}
					<div className="w-full bg-[#902526] text-white py-4 mb-12 shadow-md">
						<div className="container mx-auto px-4 flex justify-center items-center">
							<div className="flex items-center space-x-6">
								{/* Logo Graphic Placeholder */}
								<div className="hidden md:flex border-4 border-dotted border-white/50 rounded-full p-2 w-20 h-20 items-center justify-center">
									<div className="w-3 h-3 bg-white rounded-full"></div>
								</div>
								<h2 className="text-2xl md:text-3xl font-sans tracking-[0.1em] uppercase">The Endorphinery</h2>
							</div>
						</div>
					</div>
					
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center mb-16">
							<h3 className="text-2xl font-serif font-bold text-[#7D8F38] mb-6">The Endorphinery – Mindful Massage & Wellness</h3>
							<p className="text-gray-700 leading-relaxed text-lg font-light">
								Step into <span className="font-bold text-[#7D8F38]">The Endorphinery</span>, where skilled therapists blend mindfulness and technique to deliver transformative massage experiences. From soothing Swedish and deep tissue massages to bespoke treatments tailored to your needs, each session is crafted to rejuvenate your body, calm your mind, and uplift your spirit.
							</p>
						</div>
						
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
							{[
							{ name: 'Classic Massage', img: 'https://picsum.photos/seed/massage_classic/300/300' }, 
							{ name: 'Aromatherapy Massage', img: 'https://picsum.photos/seed/massage_aroma/300/300' }, 
							{ name: "Kiter's Massage", img: 'https://picsum.photos/seed/massage_kiter/300/300' }, 
							{ name: "Surfer's Massage", img: 'https://picsum.photos/seed/massage_surfer/300/300' }
							].map((item, i) => (
								<div key={i} className="flex flex-col items-center group cursor-pointer">
									<div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-[#902526] mb-4 shadow-lg transition-transform duration-300 group-hover:scale-105 bg-white">
										<img src={item.img} alt={item.name} className="w-full h-full object-cover" />
									</div>
									<span className="text-[#902526] font-serif font-bold text-center leading-tight max-w-[120px]">{item.name}</span>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Beauty Is Art Section */}
				<section className="bg-[#FAF9F6] py-24 border-t border-gray-200">
					<div className="container mx-auto px-4">
						<div className="flex flex-col lg:flex-row gap-16 items-start">
							<div className="lg:w-1/3 w-full">
								<div className="bg-[#EAE2D1] p-10 flex items-center justify-center rounded shadow-inner aspect-square">
									<div className="text-center">
										<div className="text-8xl font-serif italic text-black leading-none relative inline-block">
											B
											<span className="absolute top-4 -right-6 text-2xl not-italic font-sans">is</span>
										</div>
										<h3 className="text-3xl font-serif italic text-black border-t-2 border-b-2 border-black py-1 my-2">Beauty is Art</h3>
										<span className="text-sm tracking-[0.3em] font-sans font-bold">SALON</span>
									</div>
								</div>
							</div>
							<div className="lg:w-2/3 w-full">
								<h3 className="text-2xl font-serif font-bold text-[#7D8F38] mb-6">Beauty Is Art – Elevating Your Look</h3>
								<p className="text-gray-700 mb-8 leading-relaxed text-lg font-light">
									Located on the third floor, <span className="font-bold text-[#7D8F38]">Beauty Is Art</span> offers a full spectrum of salon services that redefine self-care. Whether you’re seeking a flawless manicure, precision brow shaping, luscious lashes, or a stylish hair makeover, our expert beauty artisans ensure you look and feel your absolute best. The menu of luxurious beauty treatments, including facials and skincare therapies, adds an extra touch of radiance to your visit.
								</p>
								<p className="font-bold text-[#7D8F38] tracking-widest uppercase mb-8">LOCATION: 3rd Floor</p>
								
								<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
									<img src="/assets/spa/salon-1.jpg" className="w-full aspect-square object-cover rounded shadow hover:opacity-90 transition-opacity" alt="Manicure" />
									<img src="/assets/spa/salon-2.jpg" className="w-full aspect-square object-cover rounded shadow hover:opacity-90 transition-opacity" alt="Facial" />
									<img src="/assets/spa/salon-3.jpg" className="w-full aspect-square object-cover rounded shadow hover:opacity-90 transition-opacity" alt="Makeup" />
									<img src="/assets/spa/salon-4.jpg" className="w-full aspect-square object-cover rounded shadow hover:opacity-90 transition-opacity" alt="Nails" />
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Saving Grace Yoga Section */}
				<section className="bg-white py-24 border-t border-gray-200">
					<div className="container mx-auto px-4">
						<div className="flex flex-col lg:flex-row gap-16">
							<div className="lg:w-1/3 flex flex-col items-center">
								<div className="mb-8 text-center">
									<h3 className="text-5xl text-[#00AEEF] font-sans font-light tracking-wide mb-2">Saving Grace</h3>
									<p className="text-gray-400 tracking-widest uppercase text-sm">Yoga & Massage Therapy</p>
								</div>
								<img src="/assets/spa/yoga-1.jpg" className="w-full rounded-lg shadow-lg object-cover h-[400px]" alt="Yoga Instructor" />
							</div>
							<div className="lg:w-2/3">
								<h3 className="text-2xl font-serif font-bold text-[#7D8F38] mb-6">Yoga with Saving Grace</h3>
								<p className="text-gray-700 mb-6 leading-relaxed text-lg font-light">
									Join our skilled instructor for regular yoga sessions that cater to all levels, helping you find balance and harmony through movement and mindfulness.
								</p>
								
								<div className="bg-[#F0FAFF] border-l-4 border-[#00AEEF] p-8 mb-8 rounded-r-lg shadow-sm">
									<h4 className="font-bold text-[#00AEEF] mb-6 uppercase tracking-wide text-sm">Benefits</h4>
									<ul className="text-gray-700 space-y-3 text-sm md:text-base grid grid-cols-1 md:grid-cols-2 gap-x-6">
										<li className="flex items-start"><span className="text-[#00AEEF] mr-2 text-xl">•</span>Increase in flexibility & strength</li>
										<li className="flex items-start"><span className="text-[#00AEEF] mr-2 text-xl">•</span>Long lean muscle tone</li>
										<li className="flex items-start"><span className="text-[#00AEEF] mr-2 text-xl">•</span>Pain Relief and Prevention</li>
										<li className="flex items-start"><span className="text-[#00AEEF] mr-2 text-xl">•</span>Better and fuller breath</li>
										<li className="flex items-start"><span className="text-[#00AEEF] mr-2 text-xl">•</span>Stress Reduction & Calmness</li>
										<li className="flex items-start"><span className="text-[#00AEEF] mr-2 text-xl">•</span>Improved concentration</li>
										<li className="flex items-start"><span className="text-[#00AEEF] mr-2 text-xl">•</span>Weight management</li>
										<li className="flex items-start"><span className="text-[#00AEEF] mr-2 text-xl">•</span>Improved posture</li>
										<li className="flex items-start"><span className="text-[#00AEEF] mr-2 text-xl">•</span>Inner Peace</li>
									</ul>
								</div>
								
								<div className="flex items-center space-x-2 text-lg font-medium text-gray-800 mb-8 p-4 bg-gray-50 rounded inline-block">
									<span className="text-[#00AEEF] font-bold uppercase tracking-wider">Schedule:</span> 
									<span>Tuesdays and Thursdays in High Season</span>
								</div>

								<div className="grid grid-cols-2 gap-4">
									<img src="/assets/spa/yoga-2.jpg" className="w-full h-48 object-cover rounded shadow-lg" alt="Yoga on Beach" />
									<img src="/assets/spa/yoga-3.jpg" className="w-full h-48 object-cover rounded shadow-lg" alt="Yoga at Sunset" />
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Services Grid */}
				<section className="bg-tcl-light-blue/20 py-20">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							
							{/* The Endorphinery */}
							<div className="bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:-translate-y-2 transition-all duration-300">
								<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
									<Heart className="text-tcl-blue" size={32} />
								</div>
								<h3 className="text-xl font-bold font-serif mb-4">The Endorphinery</h3>
								<p className="text-sm text-gray-600 mb-4">Mindful Massage & Wellness</p>
								<p className="text-gray-500 text-sm leading-relaxed">
									Skilled therapists blend mindfulness and technique. From soothing Swedish to deep tissue massages.
								</p>
							</div>

							{/* Beauty Is Art */}
							<div className="bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:-translate-y-2 transition-all duration-300">
								<div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
									<Scissors className="text-purple-500" size={32} />
								</div>
								<h3 className="text-xl font-bold font-serif mb-4">Beauty Is Art</h3>
								<p className="text-sm text-gray-600 mb-4">Elevating Your Look</p>
								<p className="text-gray-500 text-sm leading-relaxed">
									Located on the 3rd floor. Full spectrum salon services including manicures, brows, lashes and hair makeovers.
								</p>
							</div>

							{/* Saving Grace Yoga */}
							<div className="bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:-translate-y-2 transition-all duration-300">
								<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
									<Sparkles className="text-green-600" size={32} />
								</div>
								<h3 className="text-xl font-bold font-serif mb-4">Saving Grace Yoga</h3>
								<p className="text-sm text-gray-600 mb-4">Balance & Harmony</p>
								<p className="text-gray-500 text-sm leading-relaxed">
									Regular yoga sessions for all levels. Increase flexibility, mental calmness, and inner peace.
								</p>
							</div>
						</div>
					</div>
				</section>
				
			</div>
		</div>
	);
}
