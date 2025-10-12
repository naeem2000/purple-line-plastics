import { Metadata } from 'next';
import React from 'react';
import Bottles from './Bottles';

export const metadata: Metadata = {
	title: 'Purple Line Plastics | Bottles',
};

export default function page() {
	return (
		<main className='max-width'>
			<Bottles />
		</main>
	);
}
