import { Metadata } from 'next';
import Jars from './Jars';
import React from 'react';

export const metadata: Metadata = {
	title: 'Purple Line Plastics | Jars',
};

export default function page() {
	return (
		<main>
			<Jars />
		</main>
	);
}
