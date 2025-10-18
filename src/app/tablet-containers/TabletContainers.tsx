import { products } from '../../../public/data';
import { routes } from '../../../public/routes';
import { Button } from '@/stories/Button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function TabletContainers() {
	const tabletContainers = products.filter(
		(item) => item.type === 'securi-tainers'
	);

	if (tabletContainers.length === 0) {
		return (
			<section className='max-width text-center py-11'>
				<h1 className='text-2xl'>No stock at the moment</h1>
			</section>
		);
	}

	return (
		<section className='max-width'>
			<div className='flex flex-wrap justify-center gap-5 py-10 lg:py-20'>
				{tabletContainers.map((item, index) => {
					return (
						<div
							className='flex items-start justify-center flex-col  lg:w-[410px]'
							key={index}
						>
							<Image
								src={item.images[0]}
								alt={item.title}
								width={450}
								height={450}
								className='rounded-sm'
							/>
							<div className='py-5'>
								<p className='text-[22px] font-[Inter,sans-serif] font-black'>
									{item.title}
								</p>
								<br />
								<p className='text-[22px] font-[Inter,sans-serif] '>
									{item.pet}
								</p>
								<p className='text-[22px] font-[Inter,sans-serif] '>
									{item.clear}
								</p>
								<p className='text-[22px] font-[Inter,sans-serif] '>
									{item.dimensions}
								</p>
								<p className='text-[22px] font-[Inter,sans-serif] '>
									{item.mixture}
								</p>
							</div>
							<div className='flex flex-col gap-5'>
								<Link href={`/product/${item.id}`}>
									<Button variant='dark' label='View Product' />
								</Link>
								<Link href={routes.contactUs}>
									<Button variant='dark' label='Enquire' />
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
