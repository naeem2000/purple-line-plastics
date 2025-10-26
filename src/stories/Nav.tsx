'use client';
import { Twirl as Hamburger } from 'hamburger-react';
import { navItems } from '../../public/data';
import { routes } from '../../public/routes';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import MobileNav from './MobileNav';

export default function Nav() {
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
	const path = usePathname();

	useEffect(() => {
		if (typeof window !== undefined) {
			const body = document?.getElementById('body');
			if (body) {
				if (isNavOpen) {
					body.style.overflow = 'hidden';
				} else {
					body.style.overflow = 'scroll';
				}
			}
		}
	}, [isNavOpen]);

	return (
		<nav>
			<div className='flex w-full justify-between items-center py-7 lg:pt-14 lg:pb-9 max-width'>
				<Link href={routes.home} onClick={() => setIsNavOpen(false)}>
					<Image src={'/logos/logo.png'} alt='logo' width={250} height={30} />
				</Link>
				<ul className='hidden xl:flex gap-10 self-end flex-wrap list-none'>
					{navItems.map((item, index) => {
						return (
							<Link key={index} href={item.link}>
								<li
									className={`hover:underline font-[Inter,sans-serif] ${
										path === item.link ? 'font-bold' : ''
									}`}
								>
									{item.text}
								</li>
							</Link>
						);
					})}
				</ul>
				<div className='block lg:hidden'>
					<Hamburger toggle={setIsNavOpen} toggled={isNavOpen} />
				</div>
			</div>
			<MobileNav
				setIsNavOpen={setIsNavOpen}
				isNavOpen={isNavOpen}
				path={path}
			/>
			<div className='nav-border' />
		</nav>
	);
}
