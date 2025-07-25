import { Button } from '@/stories/Button';
import React from 'react';

export default function Hospitality() {
	return (
		<section className='h-full lg:h-screen bg-[image:var(--hospitality-bg)] bg-cover object-fill bg-center xl:bg-top bg-no-repeat text-white py-10'>
			<div className='max-width h-full flex items-center justify-center'>
				<div className='bg-[var(--purple)] text-center flex items-center justify-center flex-col rounded-[20px] py-10 px-5 lg:py-16 lg:px-24'>
					<h2
						className='font-[Inter,sans-serif] text-3xl lg:text-[50px] leading-[100%] tracking-[0%] wrap-normal mb-10'
						style={{ fontWeight: 900 }}
					>
						HOSPITALITY & PHARMACUETICAL
					</h2>
					<p
						className='max-w-[700px] text-lg lg:text-[22px] leading-[120%] tracking-[0%] font-[Jost,sans-serif]'
						style={{ fontWeight: 400 }}
					>
						Purple Line Plastics is an owner managed company established in 2002
						situated in Cape Town South Africa. We have a well equipped Toolroom
						for manufacturing & maintaining of all moulds for various plastic
						products.
						<br />
						<br />
						Moulding of PET, PVC, HDPE, LDPE, PP, HIPS, TPE & others for various
						plastic containers We Specialise in quality Blow Moulded Custom
						plastic bottles, plastic jars, short runs & quick turnaround times.
						<br />
						<br />
						Medium sized niche Blow Moulder manufacturing plastic bottles for
						the Cosmetic, Pharmaceutical & Hospitality markets.
					</p>
					<Button variant='light' className='mt-10' label='Enquire now' />
				</div>
			</div>
		</section>
	);
}
