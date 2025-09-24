import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Purple Line | Privacy policy',
};

export default function page() {
	return (
		<main className='max-width'>
			<h2 className='font-black text-[40px] leading-[100%] tracking-[0%] mt-8 lg:mt-16 mb-8 font-[Inter,sans-serif]'>
				Our privacy policy
			</h2>
			<div className='font-normal text-sm leading-snug tracking-[0%] font-[Inter,sans-serif] mb-14'>
				<p>Effective Date: 30 August 2025</p>
				<br />
				<p>
					Welcome to Purple Line (accessible at{' '}
					<a
						className='hover:underline'
						href='https://www.purpleline.co.za'
						target='_blank'
					>
						https://www.purpleline.co.za
					</a>
					).
				</p>
				<br />
				<p>
					We value your privacy and are committed to protecting your personal
					information in accordance with the Protection of Personal Information
					Act (POPIA) and other applicable South African laws. This Privacy
					Policy explains how we collect, use, store, and protect your personal
					information
				</p>
				<br />
				<p>1. Information We Collect</p>
				<p>
					When you use our website, we may collect and process the following
					personal information:
				</p>
				<ul className='list-disc list-inside ml-2'>
					<li>Email address</li>
					<li> Phone number</li>
				</ul>
				<p>
					We only collect this information when you voluntarily provide it to us
					— for example, by submitting a form, signing up for updates, or
					contacting us.
				</p>
				<br />
				<p>2. How We Use Your Information</p>
				<p>We use the personal information you provide to:</p>
				<ul className='list-disc list-inside ml-2'>
					<li>Communicate with you directly (e.g. respond to your queries).</li>
					<li>
						Send you updates, news, or promotional content (if you’ve opted in).
					</li>
					<li>Improve your experience with our website and services.</li>
				</ul>
				<p>We will never sell your personal information to third parties.</p>
				<br />
				<p>3. Legal Basis for Processing</p>
				<p>
					We process your personal information based on one or more of the
					following legal grounds:
				</p>
				<ul className='list-disc list-inside ml-2'>
					<li>
						Your consent – You have given us permission to process your personal
						information for a specific purpose.
					</li>
					<li>
						Legitimate interest – To communicate with you and manage our
						relationship with you.
					</li>
					<li>
						Legal obligation – To comply with any legal or regulatory
						requirements, if applicable.
					</li>
				</ul>
				<br />
				<p>4. Your Rights Under POPIA</p>
				<p>You have the right to:</p>
				<ul className='list-disc list-inside ml-2'>
					<li>Access the personal information we hold about you</li>
					<li>Correct or update your personal details</li>
					<li>Object to the processing of your personal information</li>
					<li>Withdraw your consent at any time</li>
					<li>Request deletion of your personal information</li>
				</ul>
				<p>
					To exercise these rights, please contact us using the details below
				</p>
				<br />
				<p>5. How We Protect Your Information</p>
				<p>
					We take reasonable and appropriate security measures to protect your
					personal information from loss, misuse, unauthorised access,
					disclosure, or destruction. These include:
				</p>
				<ul className='list-disc list-inside ml-2'>
					<li>Secure storage systems</li>
					<li>Restricted access to personal data</li>
					<li>Website encryption protocols (HTTPS/SSL)</li>
				</ul>
				<br />
				<p>6. Sharing of Information</p>
				<p>
					We do not share your personal information with third parties, except
					when:
				</p>
				<ul className='list-disc list-inside ml-2'>
					<li>Required by law</li>
					<li>
						Necessary for service providers acting on our behalf (who are also
						bound by confidentiality agreements)
					</li>
				</ul>
				<br />
				<p>7. Retention of Information</p>
				<p>
					We will retain your personal information only for as long as necessary
					to fulfill the purposes it was collected for, or as required by law.
				</p>
				<br />
				<p>8. Cookies and Tracking</p>
				<p>
					Our website may use cookies or similar technologies to enhance your
					experience. You can choose to disable cookies through your browser
					settings.
				</p>
				<br />
				<p>9. Third-Party Links</p>
				<p>
					Our website may contain links to other websites. We are not
					responsible for the privacy practices of third-party sites. We
					encourage you to read their privacy policies before sharing any
					personal information.
				</p>
				<br />
				<p>10. Contact Us</p>
				<p>
					If you have any questions about this Privacy Policy or how we handle
					your personal information, please contact us at:
				</p>
				<br />
				<p>Purple Line</p>
				<p>
					Email:{' '}
					<a className='hover:underline' href='mailto:contact@purpleline.co.za'>
						contact@purpleline.co.za
					</a>
				</p>
				<p>
					{' '}
					Phone:{' '}
					<a className='hover:underline' href='tel:++27 21 948 5042'>
						+27 21 948 5042
					</a>
				</p>
				<p>
					Website:{' '}
					<a
						className='hover:underline'
						href='http://https://www.purpleline.co.za'
						target='_blank'
						rel='noopener noreferrer'
					>
						https://www.purpleline.co.za
					</a>
				</p>
			</div>
		</main>
	);
}
