import type { Metadata } from 'next';
import Nav from '@/stories/Nav';
import './globals.css';
import Footer from '@/stories/Footer';

export const metadata: Metadata = {
	title: 'Purple Line Plastics',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`antialiased`}>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
