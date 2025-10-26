import { routes } from '../../../public/routes';
import { products } from '../../../public/data';
import { Button } from '@/stories/Button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Buoyancy() {
	const buoyancy = products.filter((item) => item.type === 'buoyancy');

	if (buoyancy.length === 0) {
		return (
			<section className='max-width text-center py-11'>
				<h1 className='text-2xl'>No stock at the moment</h1>
			</section>
		);
	}

	return (
		<section className='max-width'>
			<div className='grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 items-start gap-5 lg:gap-10 py-16'>
				{buoyancy.map((item, index) => {
					return (
						<div
							className='flex items-start justify-between h-full flex-col w-full max-w-[410px]'
							key={index}
						>
							<div>
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
							</div>
							<div className='flex gap-2 lg:gap-5 w-full'>
								<Link className='w-full' href={`/product/${item.id}`}>
									<Button
										variant='dark'
										className='w-full'
										label='View Product'
									/>
								</Link>
								<Link className='w-full' href={routes.contactUs}>
									<Button variant='dark' className='w-full' label='Enquire' />
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
