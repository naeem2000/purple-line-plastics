'use client';
import { bestSellers, mightLike } from '../../../../public/data';
import { useParams } from 'next/navigation';
import { Button } from '@/stories/Button';
import Image from 'next/image';
import React from 'react';

export default function ProductPage() {
	const params = useParams();
	const product = bestSellers[parseInt(params.id as string)];

	if (!product) {
		return (
			<section className='max-width text-center py-11'>
				<h1>No product found</h1>
			</section>
		);
	}

	return (
		<section className='max-width'>
			<div className='flex flex-col lg:flex-row justify-start lg:gap-14 mt-20'>
				<Image
					src={product.image}
					alt={product.product}
					width={850}
					height={850}
					className='rounded-[8px] w-full lg:w-[50%]'
				/>
				<div className='mt-5 lg:mt-0'>
					<p
						className='font-[Inter,sans-serif] text-lg lg:text-[40px] leading-[100%] tracking-[0%] mb-5'
						style={{ fontWeight: 900 }}
					>
						{product.product}
					</p>

					{product.pageProperties.map((item, index) => {
						return (
							<div
								key={index}
								className='border-t-[3px] max-w-[420px] border-b-[3px] border-black py-5 text-xl leading-[140%] tracking-[0%] font-[Inter,sans-serif]'
							>
								<p>Type: {item.type}</p>
								<p>Product Code: {item.productCode}</p>
								<p>Colour: {item.colour}</p>
							</div>
						);
					})}
					<div className='py-5'>
						<p
							className='font-[Inter,sans-serif] text-xl leading-[140%] tracking-[0%]'
							style={{ fontWeight: 700 }}
						>
							Description:
						</p>
						{product.description.map((item, index) => {
							return (
								<p key={index} className='text-xl leading-[140%] tracking-[0%]'>
									{item.closure}
									<br />
									{item.pet} <br />
									{item.clear} <br />
									{item.dimensions} <br />
									{item.mixture}
								</p>
							);
						})}
					</div>
					<Button variant='dark' className='mt-2' label='Enquire now' />
				</div>
			</div>
			<div className='mt-32 lg:mt-48'>
				<h2
					className='text-[40px] leading-[100%] tracking-[0%] font-[Inter,sans-serif] mb-5'
					style={{ fontWeight: 900 }}
				>
					You might like
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-10 lg:mb-20 place-items-center'>
					{mightLike.map((item, index) => (
						<Image
							key={index}
							src={item}
							alt='You might like'
							width={410}
							height={410}
							className='w-full max-w-[410px] h-auto object-contain'
						/>
					))}
				</div>
			</div>
		</section>
	);
}
