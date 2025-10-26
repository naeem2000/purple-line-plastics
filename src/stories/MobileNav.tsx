'use client';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import React from 'react';
import { navItems } from '../../public/data';

type Props = {
	setIsNavOpen: (value: boolean) => void;
	isNavOpen: boolean;
	path: string;
};

export default function MobileNav({ setIsNavOpen, isNavOpen, path }: Props) {
	return (
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
	);
}
