import React from 'react';

type Props = {
	title: string;
	subHeading: string;
};

export default function PageHeader({ title, subHeading }: Props) {
	return (
		<section className='bg-top py-40 bg-[image:var(--hero-bg)] bg-cover bg-no-repeat flex items-center flex-col justify-center'>
			<h1 className='font-extrabold text-4xl lg:text-6xl leading-[100%] text-white tracking-[0%] font-[Inter,sans-serif] mb-1'>
				{title}
			</h1>
			<h2 className='font-[Jost,sans-serif] text-white text-2xl lg:text-[40px] leading-[100%] tracking-[0%] text-center'>
				{subHeading}
			</h2>
		</section>
	);
}
