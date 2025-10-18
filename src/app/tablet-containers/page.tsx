import TabletContainers from './TabletContainers';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Purple Line Plastics | Tablet containers',
};

export default function page() {
	return (
		<main>
			<TabletContainers />
		</main>
	);
}
