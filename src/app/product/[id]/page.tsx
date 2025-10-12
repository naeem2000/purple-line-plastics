import ProductPage from './ProductPage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Purple Line Plastics | Product',
};

export default async function page() {
	return (
		<main>
			<ProductPage />
		</main>
	);
}
