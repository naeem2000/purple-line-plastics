import { Button } from '@/stories/Button';
import React from 'react';

export default function Hero() {
	return (
		<section className='relative max-width z-10'>
			<div className='bg-top bg-[image:var(--hero-bg)] bg-cover bg-no-repeat h-full max-h-[80vh] min-h-[700px] rounded-3xl flex items-center justify-start'>
				<div className='flex flex-col items-start justify-center text-white px-5 2xl:px-44'>
					<h1 className='font-black text-4xl lg:text-6xl leading-[100%] tracking-[0%] font-[Inter,sans-serif]'>
						WORLD CLASS
					</h1>
					<h2 className='font-[Jost,sans-serif] text-2xl lg:text-[40px] leading-[100%] tracking-[0%] mb-10'>
						BLOW & INJECTION MOULDING
					</h2>
					<p className='max-w-[700px] text-lg lg:text-[22px] leading-[120%] tracking-[0%] font-[400]'>
						Purple Line Plastics is an owner managed company established in 2002
						situated in Cape Town South Africa. We have a well equipped Toolroom
						for manufacturing & maintaining of all moulds for various plastic
						products.
					</p>
					<Button className='mt-10' label='SHOP OUR RANGE' />
				</div>
			</div>
		</section>
	);
}
