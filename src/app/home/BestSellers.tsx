import { bestSellers } from '../../../public/data';
import { Button } from '@/stories/Button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function BestSellers() {
	return (
		<section className='relative bg-[image:var(--best-sellers-bg)] bg-cover object-fill bg-center xl:bg-top bg-no-repeat text-white pt-36 pb-20 -mt-20'>
			<div className='max-width'>
				<h3
					className='text-center font-[Jost,sans-serif] text-[22px] leading-[100%] tracking-[0%] mb-10'
					style={{ fontWeight: 900 }}
				>
					OUR BEST SELLERS
				</h3>
				<div className='flex items-center flex-col lg:flex-row justify-center gap-10 lg:gap-5'>
					{bestSellers.map((item, index) => {
						return (
							<div key={index}>
								<Image
									width={450}
									height={450}
									alt={item.product}
									src={item.image}
									className='rounded-[8px]'
								/>
								<p
									className='font-[Inter,sans-serif] text-lg lg:text-[22px] leading-[100%] tracking-[0%] mt-8'
									style={{ fontWeight: 900 }}
								>
									{item.product}
								</p>
								<br />
								{item.description.map((item, index) => {
									return (
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
									);
								})}
								<div className='flex flex-col mt-6 gap-5'>
									<Link href={`/product/${index}`}>
										<Button variant='light' label='View Product' />
									</Link>
									<Button variant='light' label='Enquire' />
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
