'use client';
import PageHeader from '@/stories/PageHeader';
import { Button } from '@/stories/Button';
import React, { useState } from 'react';

export default function ContactUs() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		sendEmailCopy: false,
		message: '',
	});

	const submitForm = () => {
		console.log(formData);
	};
	return (
		<section>
			<PageHeader title='CONTACT US' subHeading='WE’D LOVE TO HEAR FROM YOU' />
			<div className='max-width'>
				<form
					className='pt-36 pb-20 flex items-center justify-center box-border'
					action={submitForm}
					method='POST'
				>
					<div className='w-full max-w-[904px]'>
						<div className='flex items-center justify-center gap-6'>
							<input
								type='text'
								name='name&surname'
								placeholder='Name & Surname*'
								className='border border-black px-4 py-4 w-full placeholder:text-center placeholder:text-black rounded-[5px] font-normal text-xl leading-[100%] tracking-[0%]'
								onChange={(e) =>
									setFormData({ ...formData, name: e.target.value })
								}
								value={formData.name}
							/>
							<input
								type='email'
								name='email'
								placeholder='E-mail*'
								className='border border-black px-4 py-4 w-full placeholder:text-center placeholder:text-black rounded-[5px] font-normal text-xl leading-[100%] tracking-[0%]'
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
								value={formData.email}
							/>
						</div>
						<textarea
							name='message'
							id='message'
							rows={10}
							placeholder='Your Message*'
							className='border border-black px-4 py-4 w-full placeholder:text-center placeholder:text-black rounded-[5px] mt-7 font-normal text-xl leading-[100%] tracking-[0%]'
							onChange={(e) =>
								setFormData({ ...formData, message: e.target.value })
							}
							value={formData.message}
						/>
						<div className='flex items-center justify-start mt-6 gap-3'>
							<input
								type='checkbox'
								className='w-[25px] h-[22px]'
								onChange={(e) =>
									setFormData({ ...formData, sendEmailCopy: e.target.checked })
								}
								checked={formData.sendEmailCopy}
							/>
							<p className='font-normal text-xl leading-[100%] tracking-[0%]'>
								Send a copy of the message to myself
							</p>
						</div>
						<Button
							label='Send Message'
							type='submit'
							variant='purple'
							className='!w-full mb-8 mt-6'
						/>
						<div className='flex items-center justify-center'>
							<p className='font-normal leading-7 text-xl  tracking-[0%] text-center max-w-[480px]'>
								Buy clicking send message you agree to the terms and conditions,
								and that you can opt out at any time.
							</p>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
}
