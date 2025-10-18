import React from 'react';
import { Metadata } from 'next';
import Buoyancy from './Buoyancy';

export const metadata: Metadata = {
	title: 'Purple Line Plastics | Buoyancy',
};

export default function page() {
	return (
		<main>
			<Buoyancy />
		</main>
	);
}
