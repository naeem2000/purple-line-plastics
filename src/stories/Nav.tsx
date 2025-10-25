'use client';
import { Twirl as Hamburger } from 'hamburger-react';
import { navItems } from '../../public/data';
import { routes } from '../../public/routes';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { usePathname } from 'next/navigation';

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
				<Link href={routes.home}>
					<Image src={'/logos/logo.png'} alt='logo' width={250} height={30} />
				</Link>
				<ul className='hidden xl:flex gap-10 self-end flex-wrap list-none'>
					{navItems.map((item, index) => {
						return (
							<Link key={index} href={item.link}>
								<li className='hover:underline font-[Inter,sans-serif]'>
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
			<AnimatePresence>
				{isNavOpen ? (
					<motion.div
						key='box'
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0 }}
						className='fixed bg-[var(--white)] h-full w-full px-5'
					>
						<ul className='flex gap-5 flex-col list-none'>
							{navItems.map((item, index) => {
								return (
									<Link
										key={index}
										href={item.link}
										onClick={() => setIsNavOpen(false)}
									>
										<li
											className={`text-[17px] leading-[100%] tracking-[0%] font-[Inter,sans-serif] border-b-[2px] border-b-[var(--gray)] pb-5 ${
												path === item.link ? 'font-bold' : ''
											}`}
										>
											{item.text}
										</li>
									</Link>
								);
							})}
						</ul>
					</motion.div>
				) : null}
			</AnimatePresence>
			<div className='nav-border' />
		</nav>
	);
}
