import { Metadata } from 'next';
import Bottles from './Bottles';
import React from 'react';

export const metadata: Metadata = {
	title: 'Purple Line Plastics | Bottles',
};

export default function page() {
	return (
		<main>
			<Bottles />
		</main>
	);
}
