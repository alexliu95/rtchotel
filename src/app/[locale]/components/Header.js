import { Navigation } from './Navigation';
import { Hero } from './Hero';
import BookingWidget from './BookingWidget';

export default function Header() {


    return (
        <>
            <Navigation />
            <div className="relative">
                <Hero />
                <BookingWidget />
            </div>
        </>
    );
}