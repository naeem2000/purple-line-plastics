import TopSellers from './TopSellers';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Purple Line Plastics | Top sellers',
};

export default function page() {
	return (
		<main>
			<TopSellers />
		</main>
	);
}
