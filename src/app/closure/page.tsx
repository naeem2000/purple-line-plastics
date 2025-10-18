import Closures from './Closures';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Purple Line Plastics | Closures',
};

export default function page() {
	return (
		<main>
			<Closures />
		</main>
	);
}
