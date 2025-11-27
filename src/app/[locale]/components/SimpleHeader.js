import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import BookingWidget from './BookingWidget';
import HeroNav from './HeroNav';
import SimpleHero from './SimpleHero';

export default function SimpleHeader() {


    return (
        <>
            <Navigation />
            <div className="relative">
                <SimpleHero />
            </div>
        </>
    );
}