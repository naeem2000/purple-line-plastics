import { Metadata } from 'next';
import React from 'react';
import Product from './components/Product';

export const metadata: Metadata = {
	title: 'Purple Line Plastics | Product',
};

export default async function page({ params }: { params: { id: string } }) {
	const paramsIndex = await params;
	return (
		<main>
			<Product paramsIndex={paramsIndex.id} />
		</main>
	);
}
