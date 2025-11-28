'use client'

import { useRouter } from "next/navigation";
import { format } from "date-fns";

const rooms = [
	{
		id: '1',
		name: 'Superior 1 King Bed Mountain View',
		description: 'Relax in comfort with stunning views of the lush mountains. Includes free high-speed internet and modern amenities.',
		price: '$120 / night',
		imageUrl: '/assets/accomodations/room-1.jpg',
		amenities: ['Free WiFi', 'Air Conditioning', 'King Bed', 'Mountain View']
	},
	{
		id: '2',
		name: 'Superior 1 King Bed Garden View',
		description: 'Immerse yourself in our tropical gardens. This serene room offers a private balcony and spacious layout.',
		price: '$145 / night',
		imageUrl: '/assets/accomodations/room-2.jpg',
		amenities: ['Free WiFi', 'Garden Access', 'King Bed', 'Private Balcony']
	},
	{
		id: '3',
		name: 'Superior 1 King Pool View',
		description: 'Direct views of our shimmering pools. The perfect choice for those who love to be close to the water.',
		price: '$165 / night',
		imageUrl: '/assets/accomodations/room-3.jpg',
		amenities: ['Free WiFi', 'Pool View', 'King Bed', 'Minibar']
	}
];

export default function Accomodations() {
	const router = useRouter();
	return (
		<div className="">
			<div className="content">
				<div className="w-full">
					{/* Header */}
					<div className="bg-gray-100 py-16 text-center">
						<h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">Accommodations</h1>
						<p className="text-gray-600 max-w-2xl mx-auto">
						Discover our range of comfortable and elegant rooms, designed to be your home away from home.
						</p>
					</div>

					{/* Room List */}
					<section className="bg-white w-2/3 mx-auto">
						<div className="container mx-auto px-4 py-12">
							<div className="space-y-12">
								{rooms.map((room) => (
									<div key={room.id} className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
									<div className="md:w-1/3">
										<img src={room.imageUrl} alt={room.name} className="w-full h-full object-cover min-h-[250px]" />
									</div>
									<div className="md:w-2/3 p-8 flex flex-col justify-between">
										<div>
										<h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">{room.name}</h3>
										<div className="flex space-x-4 mb-4 text-gray-500 text-sm">
											{room.amenities.map(amenity => (
											<span key={amenity} className="flex items-center">
												<span className="w-1 h-1 bg-tcl-gold rounded-full mr-2"></span>
												{amenity}
											</span>
											))}
										</div>
										<p className="text-gray-600 mb-6">{room.description}</p>
										</div>
										
										<div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
										<div className="text-sm text-gray-500">
											<a href="#" className="underline hover:text-tcl-blue">Room Amenities, details and policies</a>
										</div>
										<div className="flex flex-col items-end">
											<span className="text-xs text-green-600 font-bold mb-1 flex items-center">
											<span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> Today's Low Rate
											</span>
											<button className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-white font-bold py-3 px-8 rounded uppercase text-sm tracking-wide transition-colors" 
												onClick={() => {router.push(`https://direct-book.com/properties/HotelTropicalCasaLagunaDirect?check_in_date=${format(new Date(), "MM-dd-yyyy")}&check_out_date=${format(new Date(), "MM-dd-yyyy")}&number_adults=${2}`)}}>
											Check Rates
											</button>
										</div>
										</div>
									</div>
									</div>
								))}
							</div>
						</div>
					</section>
					
				<div className="flex justify-center">
					{/* <div className="grid grid-cols-2 gap-4 px-4">
						<div className="aspect-[4/3]"><Image src="/assets/home/pic1.png" width={640} height={480} alt="pic1" className="object-cover" /></div>
						<div className="aspect-[4/3]"><Image src="/assets/home/pic2.png" width={640} height={480} alt="pic2" className="object-cover" /></div>
						<div className="aspect-[4/3]"><Image src="/assets/home/pic3.png" width={640} height={480} alt="pic3" className="object-cover" /></div>
						<div className="aspect-[4/3]"><Image src="/assets/home/pic4.png" width={640} height={480} alt="pic4" className="object-cover" /></div>
					</div> */}
				</div>
			</div>
		</div>	
		</div>		
	);
}
