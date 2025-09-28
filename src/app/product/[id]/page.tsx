import { Metadata } from 'next';
import React from 'react';
import Product from './components/Product';

export const metadata: Metadata = {
	title: 'Purple Line Plastics | Product',
};

export default async function page() {
	return (
		<main>
			<Product />
		</main>
	);
}
