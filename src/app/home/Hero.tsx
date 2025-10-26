import { Button } from '@/stories/Button';
import React from 'react';

export default function Hero() {
	return (
		<section>
			<div className='bg-top py-44 bg-[image:var(--hero-bg)] bg-cover bg-no-repeat flex items-center justify-center'>
				<div className='flex flex-col items-center justify-center text-white max-width'>
					<h1 className='font-black text-4xl lg:text-6xl leading-[100%] tracking-[0%] font-[Inter,sans-serif] mb-1'>
						WORLD CLASS
					</h1>
					<h2 className='font-[Jost,sans-serif] text-2xl lg:text-[40px] leading-[100%] tracking-[0%] mb-10 text-center'>
						BLOW & INJECTION MOULDING
					</h2>
					<p className='max-w-[700px] text-lg lg:text-[22px] leading-[120%] tracking-[0%] font-[400] text-center'>
						Purple Line Plastics is an owner managed company established in 2002
						situated in Cape Town South Africa. We have a well equipped Toolroom
						for manufacturing & maintaining of all moulds for various plastic
						products.
					</p>
					<Button
						variant='light'
						className='mt-10 max-w-[230px]'
						label='SHOP OUR RANGE'
					/>
				</div>
			</div>
		</section>
	);
}
