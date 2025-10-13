import PageHeader from '@/stories/PageHeader';
import React from 'react';
import Image from 'next/image';
import { bestSellers } from '../../../public/data';
import { Button } from '@/stories/Button';

export default function TopSellers() {
	return (
		<>
			<PageHeader title='WORLD CLASS' subHeading='BLOW & INJECTION MOULDING' />
			<section className='max-width !py-16'>
				<h2 className='text-[40px] font-black mb-5 font-[Inter,sans-serif]'>
					Our best sellers
				</h2>
				<div className='flex items-center justify-between gap-4'>
					{bestSellers.map((item, index) => {
						return (
							<div key={index}>
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
								<Button label='View Product' variant='dark' className='mb-5' />
								<Button label='Enquire' variant='dark' />
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
}
