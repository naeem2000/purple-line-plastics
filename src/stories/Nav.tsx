import Image from 'next/image';
import React from 'react';
import { navItems } from '../../public/data';
import Link from 'next/link';

export default function Nav() {
	return (
		<nav className='border-b-[14px] border-b-[var(--purple)]'>
			<div className='flex w-full justify-between items-center pt-14 pb-9 max-width'>
				<Image src={'/logos/logo.png'} alt='logo' width={250} height={30} />
				<ul className='flex gap-10 list-none'>
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
			</div>
		</nav>
	);
}
