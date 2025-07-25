'use client';
import { Twirl as Hamburger } from 'hamburger-react';
import { navItems } from '../../public/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Nav() {
	return (
		<nav className='border-b-[14px] border-b-[var(--purple)]'>
			<div className='flex w-full justify-between items-center pt-14 pb-9 max-width'>
				<Link href={'/'}>
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
					<Hamburger />
				</div>
			</div>
		</nav>
	);
}
