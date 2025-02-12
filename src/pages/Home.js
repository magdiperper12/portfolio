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
import { BiArrowToRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

function Home() {
	const { darkMode } = useDarkMode(); // Use the darkMode state from context

	return (
		<div
			className={`relative -mt-16 md:-mt-0  ${
				darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
			}`}>
			<div
				className={`absolute cursor-pointer -start-6 top-1/4 flex flex-col gap-4 py-3 -mt-20 px-2 rounded-full shadow-xl ${
					darkMode ? 'bg-gray-700 text-blue-300' : 'bg-white text-blue-600'
				}`}>
				<a
					href='https://web.facebook.com/magdi.perper.9 '
					target='blank'>
					<FontAwesomeIcon
						icon={faFacebook}
						className='text-2xl md:text-3xl transition-colors duration-300'
						title='Facebook'
					/>
				</a>
				<a
					href='https://www.instagram.com/magdiperper4/ '
					target='blank'>
					<FontAwesomeIcon
						icon={faInstagram}
						className='text-2xl md:text-3xl transition-colors duration-300'
						title='Instagram'
					/>
				</a>
				<a
					href='https://www.linkedin.com/in/magdi-perper-95b132343/'
					target='blank'>
					<FontAwesomeIcon
						icon={faLinkedin}
						className='text-2xl md:text-3xl transition-colors duration-300'
						title='Linkedin'
					/>
				</a>

				<Link to='/Contact'>
					<FontAwesomeIcon
						icon={faCircleChevronDown}
						className='text-2xl md:text-3xl transition-colors duration-300'
						title='more'
					/>
				</Link>
			</div>
			<section
				className={`container md:mt-10 xl:mt-auto md:mx-4 xl:mx-auto flex xl:w-3/4 justify-center items-center py-16 px-3 ${
					darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
				} mx-auto`}>
				<div className='relative pt-36 xl:pt-0'>
					<h1
						className={`text-white p-7 md:pt-10 xl:pt-auto bg-gray-700 rounded-xl    xl:ps-80  sm:text-3xl md:text-3xl xl:text-5xl font-bold mb-5`}>
						<TypeAnimation
							sequence={[
								1000,
								"Hi, I'm Magdi. I'm a Front-End Developer focused on making a high-performance web applications.",
								1000,
								'How can I help you ....?',
								1000,
							]}
							wrapper='span'
							speed={50}
							repeat={Infinity}
						/>
					</h1>
					<p
						className={`mb-5 px-7 text-base sm:text-xl md:text-xl xl:text-2xl  xl:ps-80 font-medium ${
							darkMode ? 'text-gray-200' : 'text-black'
						}`}>
						I learned to make websites on my own. I know how fun and rewarding
						it is, but I also know that it can be incredibly frustrating. I'm
						here to help make your journey into web development as easy and as
						fun as possible. Whether you're trying to learn what you need to
						tweak your small business' website or you're looking to jump start a
						new career, I'm here to help.
						<div>
							<a
								href='https://drive.google.com/file/d/1zyOQaaNB9BjVZTcdpqkzsFXAR8syJOFh/view'
								target='blank'
								className='text-blue-500 gap-3   flex justify-sart items-center'>
								<BiArrowToRight /> My_CV
							</a>
						</div>
					</p>
					<div className='absolute  start-1/6 md:start-1/4 lg:start-1/3 xl:start-0 shadow-xl shadow-gray-700 -top-1  md:-top-28 md:z-0 xl:top-16 rounded-full overflow-hidden w-40 h-40  md:w-72 md:h-72 xl:w-80 xl:h-80'>
						<img
							src={image}
							className='mx-auto rounded-full'
							alt='logo'
						/>
					</div>
				</div>
			</section>

			<section
				className={`container mx-4 flex xl:flex-row md:flex-col flex-col  w-full justify-between items-center py-16 px-10 ${
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
					<p className='max-w-4xl text-xl sm:text-xl md:text-2xl mb-5'>
						I am a frontend web developer with more than two years of
						experience. Proven experience building successful products for
						clients across several countries.
					</p>
				</div>
				<div>
					<img
						src={image1}
						className='h-auto w-full rounded-xl mx-auto  xl:w-2/3'
						alt='logo'
					/>
				</div>
			</section>
		</div>
	);
}

export default Home;
