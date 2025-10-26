import { bestSellers, products } from '../../../public/data';
import { routes } from '../../../public/routes';
import PageHeader from '@/stories/PageHeader';
import { Button } from '@/stories/Button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function TopSellers() {
	const securiTainers = products.filter(
		(item) => item.type === 'securi-tainers'
	);

	return (
		<>
			<PageHeader title='WORLD CLASS' subHeading='BLOW & INJECTION MOULDING' />
			<section className='max-width py-5 lg:!py-16'>
				<h2 className='text-[40px] font-black mb-5 font-[Inter,sans-serif]'>
					Our best sellers
				</h2>
				<div className='grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 items-start gap-5 lg:gap-10'>
					{bestSellers.map((item, index) => {
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
								<div className='flex flex-col 2xl:flex-row gap-2 lg:gap-5 w-full'>
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
				<div className='flex items-center flex-col lg:flex-row justify-center py-20 gap-6'>
					<div className='w-full lg:w-1/2'>
						<h2 className='text-left font-[Inter,sans-serif] font-black text-[40px] leading-[100%] tracking-[0%]'>
							Closures
						</h2>
						<div className='w-full bg-no-repeat h-[500px] lg:h-[844px] bg-[image:var(--closures-bg)] bg-center bg-cover flex items-end justify-center p-11 mt-8'>
							<Link href={routes.closure}>
								<Button variant='white' label='View Products' />
							</Link>
						</div>
					</div>
					<div className='w-full lg:w-1/2'>
						<h2 className='text-left font-[Inter,sans-serif] font-black text-[40px] leading-[100%] tracking-[0%]'>
							Jars
						</h2>
						<div className='w-full bg-no-repeat h-[500px] lg:h-[844px] bg-[image:var(--jars-bg)] bg-center bg-cover flex items-end justify-center p-11 mt-8'>
							<Link href={routes.jars}>
								<Button variant='white' label='View Products' />
							</Link>
						</div>
					</div>
				</div>
				<div>
					<h2 className='text-left font-[Inter,sans-serif] font-black text-[40px] leading-[100%] tracking-[0%]'>
						Tablet Containers
					</h2>
					<div className='grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 items-start gap-5 lg:gap-10 py-5 lg:py-16'>
						{securiTainers.slice(1, 5).map((item, index) => (
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
								<div className='flex flex-col 2xl:flex-row gap-2 lg:gap-5 w-full'>
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
						))}
					</div>
				</div>
			</section>
		</>
	);
}
