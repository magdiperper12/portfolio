import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faInstagram,
	faWhatsapp,
	faLinkedin,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as faEnvelopeSolid } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../DarkModeContext'; // Adjust the import path as needed

function Contact() {
	const { darkMode } = useDarkMode();

	const contactDetails = [
		{
			name: 'Facebook',
			icon: faFacebook,
			url: 'https://web.facebook.com/magdi.perper.9',
		},
		{
			name: 'Instagram',
			icon: faInstagram,
			url: 'https://www.instagram.com/yourusername/',
		},
		{
			name: 'WhatsApp',
			icon: faWhatsapp,
			url: 'https://wa.me/yourphonenumber',
		},
		{
			name: 'LinkedIn',
			icon: faLinkedin,
			url: 'https://www.linkedin.com/in/yourusername/',
		},
		{
			name: 'Email',
			icon: faEnvelopeSolid,
			url: 'mailto:youremail@example.com',
		},
		{
			name: 'Twitter',
			icon: faTwitter,
			url: 'https://twitter.com/yourusername/',
		},
	];

	return (
		<section
			className={`flex container flex-col items-center py-24 px-6 sm:px-10 ${
				darkMode ? 'bg-gray-900 text-gray-100' : 'bg-slate-50 text-slate-700'
			} text-center`}>
			<h2 className='text-4xl sm:text-5xl font-semibold mb-12'>Contact Me</h2>

			<div
				className={`grid sm:grid-cols-1 lg:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl ${
					darkMode ? 'bg-gray-800 text-gray-50' : 'bg-slate-50 text-slate-700'
				}  shadow-lg rounded-xl`}>
				<div>
					<h1
						className={`text-gray-800 dark:text-gray-100 ${
							darkMode
								? 'bg-gray-800 text-gray-50'
								: 'bg-slate-50 text-slate-700'
						} text-3xl font-extrabold`}>
						Let's Talk
					</h1>
					<p className='text-sm text-gray-400 dark:text-gray-300 mt-4'>
						Have some big idea or brand to develop and need help? Reach out,
						we'd love to hear about your project and provide help.
					</p>

					<div className='mt-12'>
						<h2 className='text-gray-400 dark:text-gray-100 text-base font-bold'>
							Socials
						</h2>

						<div className='grid grid-cols-3 md:grid-cols-3 gap-8 mt-5 text-center'>
							{contactDetails.map(({ name, icon, url }) => (
								<a
									key={name}
									href={url}
									target='_blank'
									rel='noopener noreferrer'
									className='text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition duration-200'>
									<FontAwesomeIcon
										icon={icon}
										className='text-2xl sm:text-3xl'
									/>
								</a>
							))}
						</div>
					</div>
				</div>

				<form className='space-y-4'>
					<input
						type='text'
						placeholder='Name'
						className={`w-full ${
							darkMode
								? 'bg-gray-800 text-gray-50'
								: 'bg-slate-50 text-slate-700'
						} rounded-md py-2.5 px-4 border border-gray-300 dark:border-gray-600 text-sm outline-none focus:ring-2 focus:ring-blue-500`}
					/>
					<input
						type='email'
						placeholder='Email'
						className={`w-full ${
							darkMode
								? 'bg-gray-800 text-gray-50'
								: 'bg-slate-50 text-slate-700'
						} rounded-md py-2.5 px-4 border border-gray-300 dark:border-gray-600 text-sm outline-none focus:ring-2 focus:ring-blue-500`}
					/>
					<input
						type='text'
						placeholder='Subject'
						className={`w-full ${
							darkMode
								? 'bg-gray-800 text-gray-50'
								: 'bg-slate-50 text-slate-700'
						} rounded-md py-2.5 px-4 border border-gray-300 dark:border-gray-600 text-sm outline-none focus:ring-2 focus:ring-blue-500`}
					/>
					<textarea
						placeholder='Message'
						rows='6'
						className={`w-full ${
							darkMode
								? 'bg-gray-800 text-gray-50'
								: 'bg-slate-50 text-slate-700'
						} rounded-md py-2.5 px-4 border border-gray-300 dark:border-gray-600 text-sm outline-none focus:ring-2 focus:ring-blue-500`}></textarea>
					<button
						type='button'
						className={`w-full bg-blue-800 text-gray-50 rounded-md py-2.5 px-4   dark:border-gray-600 text-sm outline-none focus:ring-2 focus:ring-blue-500`}>
						Send
					</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;
