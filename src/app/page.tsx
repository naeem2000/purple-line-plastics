import BestSellers from './home/BestSellers';
import Hospitality from './home/Hospitality';
import Hero from './home/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Purple Line | Home',
};

export default function Home() {
	return (
		<main>
			<Hero />
			<BestSellers />
			<Hospitality />
		</main>
	);
}
