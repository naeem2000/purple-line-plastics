'use client';
import { routes } from '../../../public/routes';
import { products } from '../../../public/data';
import { Button } from '@/stories/Button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Bottles() {
	const [paginate, setPaginate] = useState(1);
	const bullet = products.filter((item) => item.type === 'bullet');
	const boston = products.filter((item) => item.type === 'boston');
	const bell = products.filter((item) => item.type === 'bell');
	const square = products.filter((item) => item.type === 'square');
	const tall = products.filter((item) => item.type === 'tall');
	const taper = products.filter((item) => item.type === 'taper');
	const softSqueeze = products.filter((item) => item.type === 'soft-squeeze');
	const straight = products.filter((item) => item.type === 'straight');
	const rectangular = products.filter((item) => item.type === 'rectangular');
	const tottle = products.filter((item) => item.type === 'tottle');
	const pilfer = products.filter((item) => item.type === 'pilfer');
	const hosp30s = products.filter((item) => item.type === 'hosp-30s');

	const bostonBell = [...boston, ...bell];

	useEffect(() => {
		if (typeof window !== undefined) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}, [paginate]);

	if (bullet.length === 0) {
		return (
			<section className='max-width text-center py-11'>
				<h1 className='text-2xl'>No stock at the moment</h1>
			</section>
		);
	}
	return (
		<section className='max-width'>
			{paginate === 1 && (
				<>
					{' '}
					<div className='pt-10 lg:pt-[75px]'>
						<h2 className='text-[40px] leading-[100%] tracking-[0%] font-[Inter,sans-serif] font-black mb-[35px]'>
							Bullet
						</h2>
						<div className='grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 items-start gap-5 lg:gap-10 '>
							{bullet.map((item, index) => {
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
												<Button
													variant='dark'
													className='w-full'
													label='Enquire'
												/>
											</Link>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className='pt-10 lg:pt-[75px]'>
						<h2 className='text-[40px] leading-[100%] tracking-[0%] font-[Inter,sans-serif] font-black mb-[35px]'>
							Boston & Bell
						</h2>
						<div className='grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 items-start gap-5 lg:gap-10 '>
							{bostonBell.map((item, index) => {
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
												<Button
													variant='dark'
													className='w-full'
													label='Enquire'
												/>
											</Link>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className='py-10 lg:py-[75px]'>
						<h2 className='text-[40px] leading-[100%] tracking-[0%] font-[Inter,sans-serif] font-black mb-[35px]'>
							Square
						</h2>
						<div className='grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 items-start gap-5 lg:gap-10 '>
							{square.map((item, index) => {
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
												<Button
													variant='dark'
													className='w-full'
													label='Enquire'
												/>
											</Link>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className='flex w-full items-center gap-3 justify-center mb-9'>
						<span
							className='cursor-pointer'
							onClick={() => setPaginate((prev) => Math.max(1, prev - 1))}
						>
							{'<'}
						</span>

						{[1, 2, 3].map((item, index) => (
							<p
								key={index}
								onClick={() => setPaginate(item)}
								className={`cursor-pointer hover:underline ${
									paginate === item ? 'font-bold' : ''
								}`}
							>
								{item}
							</p>
						))}

						<span
							className='cursor-pointer'
							onClick={() => setPaginate((prev) => Math.min(3, prev + 1))}
						>
							{'>'}
						</span>
					</div>
				</>
			)}
			{paginate === 2 && (
				<>
					<div className='pt-10 lg:pt-[75px]'>
						<h2 className='text-[40px] leading-[100%] tracking-[0%] font-[Inter,sans-serif] font-black mb-[35px]'>
							Tall
						</h2>
						<div className='grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 items-start gap-5 lg:gap-10 '>
							{tall.map((item, index) => {
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
												<Button
													variant='dark'
													className='w-full'
													label='Enquire'
												/>
											</Link>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className='pt-10 lg:pt-[75px]'>
						<h2 className='text-[40px] leading-[100%] tracking-[0%] font-[Inter,sans-serif] font-black mb-[35px]'>
							Taper
						</h2>
						<div className='grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 items-start gap-5 lg:gap-10 '>
							{taper.map((item, index) => {
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
												<Button
													variant='dark'
													className='w-full'
													label='Enquire'
												/>
											</Link>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className='pt-10 lg:pt-[75px]'>
						<h2 className='text-[40px] leading-[100%] tracking-[0%] font-[Inter,sans-serif] font-black mb-[35px]'>
							Soft & Squeeze
						</h2>
						<div className='grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 items-start gap-5 lg:gap-10 '>
							{softSqueeze.map((item, index) => {
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
												<Button
													variant='dark'
													className='w-full'
													label='Enquire'
												/>
											</Link>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className='py-10 lg:py-[75px]'>
						<h2 className='text-[40px] leading-[100%] tracking-[0%] font-[Inter,sans-serif] font-black mb-[35px]'>
							Straight
						</h2>
						<div className='grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 items-start gap-5 lg:gap-10 '>
							{straight.map((item, index) => {
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
												<Button
													variant='dark'
													className='w-full'
													label='Enquire'
												/>
											</Link>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className='flex w-full items-center gap-3 justify-center mb-9'>
						<span
							className='cursor-pointer'
							onClick={() => setPaginate((prev) => Math.max(1, prev - 1))}
						>
							{'<'}
						</span>

						{[1, 2, 3].map((item, index) => (
							<p
								key={index}
								onClick={() => setPaginate(item)}
								className={`cursor-pointer hover:underline ${
									paginate === item ? 'font-bold' : ''
								}`}
							>
								{item}
							</p>
						))}

						<span
							className='cursor-pointer'
							onClick={() => setPaginate((prev) => Math.min(3, prev + 1))}
						>
							{'>'}
						</span>
					</div>
				</>
			)}
			{paginate === 3 && (
				<>
					<div className='pt-10 lg:pt-[75px]'>
						<h2 className='text-[40px] leading-[100%] tracking-[0%] font-[Inter,sans-serif] font-black mb-[35px]'>
							Rectangular
						</h2>
						<div className='grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 items-start gap-5 lg:gap-10 '>
							{rectangular.map((item, index) => {
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
												<Button
													variant='dark'
													className='w-full'
													label='Enquire'
												/>
											</Link>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className='pt-10 lg:pt-[75px]'>
						<h2 className='text-[40px] leading-[100%] tracking-[0%] font-[Inter,sans-serif] font-black mb-[35px]'>
							Tottle
						</h2>
						<div className='grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 items-start gap-5 lg:gap-10 '>
							{tottle.map((item, index) => {
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
												<Button
													variant='dark'
													className='w-full'
													label='Enquire'
												/>
											</Link>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className='pt-10 lg:pt-[75px]'>
						<h2 className='text-[40px] leading-[100%] tracking-[0%] font-[Inter,sans-serif] font-black mb-[35px]'>
							Pilfer
						</h2>
						<div className='grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 items-start gap-5 lg:gap-10 '>
							{pilfer.map((item, index) => {
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
												<Button
													variant='dark'
													className='w-full'
													label='Enquire'
												/>
											</Link>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className='py-10 lg:py-[75px]'>
						<h2 className='text-[40px] leading-[100%] tracking-[0%] font-[Inter,sans-serif] font-black mb-[35px]'>
							Hospitality 30’s
						</h2>
						<div className='grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 items-start gap-5 lg:gap-10 '>
							{hosp30s.map((item, index) => {
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
												<Button
													variant='dark'
													className='w-full'
													label='Enquire'
												/>
											</Link>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className='flex w-full items-center gap-3 justify-center mb-9'>
						<span
							className='cursor-pointer'
							onClick={() => setPaginate((prev) => Math.max(1, prev - 1))}
						>
							{'<'}
						</span>

						{[1, 2, 3].map((item, index) => (
							<p
								key={index}
								onClick={() => setPaginate(item)}
								className={`cursor-pointer hover:underline ${
									paginate === item ? 'font-bold' : ''
								}`}
							>
								{item}
							</p>
						))}

						<span
							className='cursor-pointer'
							onClick={() => setPaginate((prev) => Math.min(3, prev + 1))}
						>
							{'>'}
						</span>
					</div>
				</>
			)}
		</section>
	);
}
