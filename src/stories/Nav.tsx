import Image from 'next/image';
import React from 'react';

export default function Nav() {
	return (
		<nav className='max-width'>
			<div className='flex w-full justify-between items-center px-20 pt-14 pb-9'>
				<Image src={'/logos/logo.png'} alt='logo' width={250} height={30} />
				<ul>
					<li>awe</li>
				</ul>
			</div>
		</nav>
	);
}
