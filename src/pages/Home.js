import React from 'react';
import { useDarkMode } from '../DarkModeContext'; // Adjust the import path as needed
import image from '../images/portfolio3.jpg';
import image1 from '../images/img.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faInstagram,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

function Home() {
	const { darkMode } = useDarkMode(); // Use the darkMode state from context

	return (
		<div
			className={`relative ${
				darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
			}`}>
			<div
				className={`absolute cursor-pointer -start-6 top-1/4 flex flex-col gap-4 py-3 -mt-20 px-2 rounded-full shadow-lg ${
					darkMode ? 'bg-gray-700 text-blue-300' : 'bg-white text-blue-600'
				}`}>
				<FontAwesomeIcon
					icon={faFacebook}
					className='text-2xl md:text-3xl transition-colors duration-300'
					title='Facebook'
				/>
				<FontAwesomeIcon
					icon={faInstagram}
					className='text-2xl md:text-3xl transition-colors duration-300'
					title='Instagram'
				/>
				<FontAwesomeIcon
					icon={faLinkedin}
					className='text-2xl md:text-3xl transition-colors duration-300'
					title='Linkedin'
				/>
				<Link to='/Contact'>
					<FontAwesomeIcon
						icon={faCircleChevronDown}
						className='text-2xl md:text-3xl transition-colors duration-300'
						title='more'
					/>
				</Link>
			</div>
			<section
				className={`container flex lg:w-3/4 justify-center items-center py-16 px-3 ${
					darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
				} mx-auto`}>
				<div className='relative pt-36 lg:pt-0'>
					<h1
						className={`text-white font-semibold p-7 bg-gray-700 rounded-xl   lg:ps-80 text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold mb-5`}>
						Hi, I'm Magdi. I teach people how to make the web and how to make it
						look good while they're at it.
					</h1>
					<p
						className={`mb-5 px-7 text-base sm:text-lg md:text-xl lg:text-2xl  lg:ps-80 font-medium ${
							darkMode ? 'text-gray-200' : 'text-black'
						}`}>
						I learned to make websites on my own. I know how fun and rewarding
						it is, but I also know that it can be incredibly frustrating. I'm
						here to help make your journey into web development as easy and as
						fun as possible. Whether you're trying to learn what you need to
						tweak your small business' website or you're looking to jump start a
						new career, I'm here to help.
					</p>
					<div className='absolute start-1/6 md:start-1/4 lg:start-0 shadow-lg shadow-gray-700 -top-0  md:-top-24 lg:top-16 rounded-full overflow-hidden w-44 h-44  md:w-72 md:h-72 lg:w-80 lg:h-80'>
						<img
							src={image}
							className='mx-auto rounded-full'
							alt='logo'
						/>
					</div>
				</div>
			</section>

			<section
				className={`container flex lg:flex-row md:flex-col flex-col  w-full justify-between items-center py-16 px-10 ${
					darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
				}`}>
				<div>
					<div className='mb-16 relative'>
						<span className='w-2 h-5 bg-blue-600 absolute start-0'></span>
						<span className='absolute start-5 text-xs sm:text-sm md:text-base'>
							Start at 2023
						</span>
					</div>
					<h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 animate-bounce'>
						Frontend Developer
					</h1>
					<p className='max-w-4xl text-lg sm:text-xl md:text-2xl'>
						I am a frontend web developer with more than two years of
						experience. Proven experience building successful products for
						clients across several countries.
					</p>
				</div>
				<div>
					<img
						src={image1}
						className='h-auto w-full rounded-xl mx-auto  lg:w-2/3'
						alt='logo'
					/>
				</div>
			</section>
		</div>
	);
}

export default Home;
