'use client';
import { bestSellers, mightLike, products } from '../../../../public/data';
import { useParams } from 'next/navigation';
import { Button } from '@/stories/Button';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { routes } from '../../../../public/routes';

export default function ProductPage() {
	const params = useParams();
	const productId = parseInt(params.id as string);
	const product =
		bestSellers.find((item) => item.id === productId) ||
		products.find((item) => item.id === productId);
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
					src={product.images[0]}
					alt={product.title}
					width={850}
					height={850}
					className='rounded-[8px] w-full lg:w-[50%]'
				/>
				<div className='mt-5 lg:mt-0'>
					<p
						className='font-[Inter,sans-serif] text-lg lg:text-[40px] leading-[100%] tracking-[0%] mb-5'
						style={{ fontWeight: 900 }}
					>
						{product.title}
					</p>
					<div className='border-t-[3px] max-w-[420px] border-b-[3px] border-black py-5 text-xl leading-[140%] tracking-[0%] font-[Inter,sans-serif]'>
						<p className='capitalize'>Type: {product.type}</p>
						<p>Product Code: {product.productCode}</p>
						<p>Colour: {product.clear}</p>
					</div>
					<div className='py-5'>
						<p
							className='font-[Inter,sans-serif] text-xl leading-[140%] tracking-[0%]'
							style={{ fontWeight: 700 }}
						>
							Description:
						</p>

						<p className='text-xl leading-[140%] tracking-[0%]'>
							{product.closure}
							<br />
							{product.pet} <br />
							{product.clear} <br />
							{product.dimensions} <br />
							{product.mixture}
						</p>
					</div>

					<Link href={routes.contactUs}>
						<Button variant='dark' label='Enquire now' />
					</Link>
				</div>
			</div>
			<div className='flex flex-wrap justify-center lg:justify-start mt-14 gap-2.5'>
				{product.images.slice(1).map((item, index) => (
					<div
						key={index}
						className='w-full sm:w-[48%] md:w-[45%] lg:w-[420px] max-w-full'
					>
						<Image
							src={item}
							alt={product.title}
							width={420}
							height={420}
							className='rounded-[8px] w-full h-auto object-contain'
						/>
					</div>
				))}
			</div>

			<div className='mt-32 lg:mt-20'>
				<h2
					className='text-[40px] leading-[100%] tracking-[0%] font-[Inter,sans-serif] mb-5'
					style={{ fontWeight: 900 }}
				>
					You might like
				</h2>
				{/* <Button variant='dark' className='mt-2' label='Enquire now' /> */}
				<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-10 lg:mb-20 place-items-center'>
					{mightLike.map((item) => (
						<Link key={item.id} href={`/product/${item.id}`}>
							<Image
								src={item.images[0]}
								alt={item.title}
								width={410}
								height={410}
								className='w-full max-w-[410px] h-auto object-contain'
							/>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
