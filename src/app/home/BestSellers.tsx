import Image from 'next/image';
import React from 'react';
import { bestSellers } from '../../../public/data';
import { Button } from '@/stories/Button';

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
								<p
									className='text-lg lg:text-[22px] font-[Inter,sans-serif] leading-[110%] tracking-[0%]'
									dangerouslySetInnerHTML={{ __html: item.description }}
								/>
								<div className='flex flex-col mt-6 gap-5'>
									<Button label='View Product' />
									<Button label='Enquire' />
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
