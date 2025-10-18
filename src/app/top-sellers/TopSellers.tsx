import PageHeader from '@/stories/PageHeader';
import React from 'react';
import Image from 'next/image';
import { bestSellers } from '../../../public/data';
import { Button } from '@/stories/Button';
import Link from 'next/link';
import { routes } from '../../../public/routes';

export default function TopSellers() {
	return (
		<>
			<PageHeader title='WORLD CLASS' subHeading='BLOW & INJECTION MOULDING' />
			<section className='max-width !py-16'>
				<h2 className='text-[40px] font-black mb-5 font-[Inter,sans-serif]'>
					Our best sellers
				</h2>
				<div className='flex items-center flex-col lg:flex-row flex-wrap justify-center gap-10 lg:gap-4'>
					{bestSellers.map((item, index) => {
						return (
							<div
								className='flex items-start justify-center flex-col w-full lg:w-[410px]'
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
								<div className='flex flex-col mt-6 gap-5'>
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
				<div className='flex items-center flex-col lg:flex-row justify-center py-20 gap-6'>
					<div className='w-full lg:w-1/2'>
						<h2 className='text-left font-[Inter,sans-serif] font-black text-[40px] leading-[100%] tracking-[0%]'>
							Closures
						</h2>
						<div className='w-full bg-no-repeat h-[500px] lg:h-[844px] bg-[image:var(--closures-bg)] bg-center bg-cover flex items-end justify-center p-11 mt-8'>
							<Link href={routes.contactUs}>
								<Button variant='white' label='View Products' />
							</Link>
						</div>
					</div>
					<div className='w-full lg:w-1/2'>
						<h2 className='text-left font-[Inter,sans-serif] font-black text-[40px] leading-[100%] tracking-[0%]'>
							Jars
						</h2>
						<div className='w-full bg-no-repeat h-[500px] lg:h-[844px] bg-[image:var(--jars-bg)] bg-center bg-cover flex items-end justify-center p-11 mt-8'>
							<Link href={routes.contactUs}>
								<Button variant='white' label='View Products' />
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
