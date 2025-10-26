import { bestSellers } from '../../../public/data';
import { Button } from '@/stories/Button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { routes } from '../../../public/routes';

export default function BestSellers() {
	return (
		<section className='bg-[image:var(--best-sellers-bg)] bg-cover object-fill bg-center xl:bg-top bg-no-repeat text-white py-20'>
			<div className='max-width'>
				<h3
					className='text-center font-[Jost,sans-serif] text-[22px] leading-[100%] tracking-[0%] mb-10'
					style={{ fontWeight: 900 }}
				>
					OUR BEST SELLERS
				</h3>
				<div className='grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 items-start gap-3 lg:gap-10 py-5 lg:py-16'>
					{bestSellers.map((item, index) => {
						return (
							<div key={index}>
								<Image
									width={450}
									height={450}
									alt={item.title}
									src={item.images[0]}
									className='rounded-[8px]'
								/>
								<p
									className='font-[Inter,sans-serif] text-lg lg:text-[22px] leading-[100%] tracking-[0%] mt-8'
									style={{ fontWeight: 900 }}
								>
									{item.title}
								</p>
								<br />
								<div key={index}>
									<p className='text-lg lg:text-[22px] font-[Inter,sans-serif] leading-[120%] tracking-[0%]'>
										{item.closure}
										<br />
										{item.pet}
										<br />
										{item.clear}
										<br />
										{item.dimensions}
										<br />
										{item.mixture}
									</p>
								</div>

								<div className='flex flex-col mt-6 gap-5'>
									<Link href={`/product/${item.id}`}>
										<Button variant='light' label='View Product' />
									</Link>
									<Link href={routes.contactUs}>
										<Button variant='light' label='Enquire' />
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
