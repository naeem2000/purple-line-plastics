import { footerNavItems } from '../../public/data';
import { routes } from '../../public/routes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
	return (
		<footer className='border-t-[27px] py-10 border-b-[27px] border-[var(--purple)]'>
			<div className='max-width'>
				<div className='flex gap-5 flex-col lg:flex-row justify-between'>
					<div className='flex justify-between flex-col lg:flex-row w-full lg:w-[40%] gap-5'>
						<div className='flex flex-col gap-1'>
							<p
								className='font-[Inter,sans-serif] text-xl lg:text-[22px] leading-[100%] tracking-[0%] mb-2 lg:mb-6'
								style={{ fontWeight: 900 }}
							>
								PRODUCTS
							</p>
							{footerNavItems?.map((item, index) => {
								return (
									<Link
										key={index}
										href={item.link}
										className='hover:underline text-lg lg:text-lg leading-[180%] tracking-[0%] font-[Inter,sans-serif]'
									>
										{item.text}
									</Link>
								);
							})}
						</div>
						<div className='flex flex-col gap-1'>
							<p
								className='font-[Inter,sans-serif] text-xl lg:text-[22px] leading-[100%] tracking-[0%] mb-2 lg:mb-6'
								style={{ fontWeight: 900 }}
							>
								CONTACT US
							</p>
							<Link
								className='hover:underline text-lg lg:text-lg leading-[180%] tracking-[0%] font-[Inter,sans-serif]'
								href='tel:+27 21 948 5042'
							>
								+27 21 948 5042
							</Link>
							<Link
								className='hover:underline text-lg lg:text-lg leading-[180%] tracking-[0%] font-[Inter,sans-serif]'
								href='mailto:info@purpleline.co.za'
							>
								info@purpleline.co.za
							</Link>
						</div>
					</div>
					<div className='flex flex-col gap-1'>
						<p
							className='font-[Inter,sans-serif] text-xl lg:text-[22px] leading-[100%] tracking-[0%] mb-2 lg:mb-6'
							style={{ fontWeight: 900 }}
						>
							T&Cs
						</p>
						<Link
							className='hover:underline text-lg lg:text-lg leading-[180%] tracking-[0%] font-[Inter,sans-serif] '
							href='/privacy-policy'
						>
							Privacy Policy
						</Link>
						<Link
							className='hover:underline text-lg lg:text-lg leading-[180%] tracking-[0%] font-[Inter,sans-serif] '
							href='/terms-&-conditions'
						>
							Terms & Conditions
						</Link>
						<Link
							className='hover:underline text-lg lg:text-lg leading-[180%] tracking-[0%] font-[Inter,sans-serif] '
							href='/cookie-policy'
						>
							Cookie Policy
						</Link>
					</div>
					<div>
						<p
							className='font-[Inter,sans-serif] text-xl lg:text-[22px] leading-[100%] tracking-[0%] mb-2 lg:mb-6'
							style={{ fontWeight: 900 }}
						>
							SOCIAL
						</p>
						<Image
							src='/logos/emyezweni-logo.png'
							width={180}
							height={160}
							alt='Emyezweni'
						/>
						<p className='w-full lg:max-w-[280px] text-lg lg:text-lg leading-[180%] tracking-[0%] font-[Inter,sans-serif]'>
							Purple Line Plastics proudly supports and sponsors Emyezweni
							School. <br />
							<Link href={routes.emyezweni} className='underline'>
								Read more here.
							</Link>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
