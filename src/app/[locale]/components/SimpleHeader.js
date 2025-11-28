import { Navigation } from './Navigation';
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