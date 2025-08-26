import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
	title: 'Purple Line Plastics | Emyezweni',
};

export default function page() {
	return (
		<main className='flex items-center justify-center flex-col'>
			<div className='flex items-center justify-center flex-col mb-24'>
				<Image
					src={'/logos/emyezweni-logo.png'}
					alt='emyezweni'
					width={351}
					height={290}
				/>
				<p className='text-xl leading-[120%] tracking-[0%] text-center max-w-[351px]'>
					Purple Line Plastics proudly supports and sponsors Emyezweni School.
				</p>
			</div>
			<div className='flex items-center 2xl:items-start justify-center mb-14 flex-col 2xl:flex-row px-5'>
				<Image
					src={'/images/emyezweni-left.png'}
					alt='emyezweni-house'
					width={522}
					height={595}
				/>
				<div className='w-full max-w-[710px] text-xl leading-[120%] tracking-[0%] text-center my-10 2xl:my-0 mx-0 2xl:mx-7'>
					<p>
						Emyezweni is a private school in Lwandle, an underprivileged
						community near the Strand, Cape Town.
					</p>
					<br />
					<p>
						The school was started as a Crèche in 1994 and grew to providing day
						care for toddlers and Grade R education for 130 children in 2018.
					</p>
					<br />
					<p>
						Besides an excellent education, the children are also supplied with
						two meals a day as well as regular medical screening by a Doctor and
						Optometrist. The School now employs 9 people from the local
						community, including all the teachers and assistants. Emyezweni is
						registered with the Department of Education as well as the
						Department of Social Welfare.
					</p>
					<br />
					<p>
						Below is a photo of the extra classroom built in 2010 and during
						2011 the school was repainted green and upgraded with new desks,
						interior paint and mezzanine floors for storage and training
						equipment.
					</p>
					<br />
					<p>
						We are also involved with community initiatives such as Family
						Literacy Groups, Homework Clubs and Parent & Toddler Groups
					</p>
					<br />
					<p>
						To meet our increased commitment, the school requires the
						sustainable financial support of local friends and business
						associates. Please contact us if your company is prepared to
						consider partnering with Emyezweni by making a donation. Emyezweni
						is a section 18A registered NPO and can therefore issue you with a
						tax invoice for personal tax reduction or for earning valuable BBBEE
						points.
					</p>
					<br />
					<p>
						<strong>
							“Emyezweni” is the Xhosa word for the “Garden of Eden” and it
							means a fruitful place where things grow and flourish.
						</strong>
					</p>
					<br />
					<p>
						I have personally been involved with the school for many years as
						Chairman of the Governing Body and am also a director of the Section
						21 Company, Heldercare, which incorporates Emyezweni School.
					</p>
					<br />
					<p>Thank you for taking the time to read this letter.</p>
					<br />
					<p>
						Charl du Plessis <br />
						Managing Director of purple line plastics
						<br />
						Proud Sponsors to Emyezweni School
					</p>
				</div>
				<Image
					src={'/images/emyezweni-right.png'}
					alt='emyezweni-school'
					width={569}
					height={595}
				/>
			</div>
		</main>
	);
}
