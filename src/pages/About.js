import React from 'react';
import { useDarkMode } from '../DarkModeContext'; // Adjust the import path as needed
import image1 from '../aboutimage/IMG_20220212_160034_994.jpg';
import image2 from '../aboutimage/IMG_20210105_190753.jpg';
import image3 from '../aboutimage/IMG_20220707_170811_258.jpg';
import image4 from '../aboutimage/1663172592103.JPG';
import image5 from '../aboutimage/army.jpg';
import image6 from '../aboutimage/received_594946534664568.jpeg';
import image7 from '../aboutimage/received_725996901961116.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHtml5,
	faCss3Alt,
	faJs,
	faReact,
	faBootstrap,
	faTypo3,
	faGalacticRepublic,
	faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
	faDiagramNext,
	faChartSimple,
	faT,
} from '@fortawesome/free-solid-svg-icons';
function About() {
	const { darkMode } = useDarkMode(); // Use the darkMode state from context
	const contactDetails = [
		{ name: 'Html5', icon: faHtml5 },
		{ name: 'CSS', icon: faCss3Alt },
		{ name: 'Bootstrap', icon: faBootstrap },
		{ name: 'Tailwind', icon: faT }, // Replaced faT with faCss3Alt for Tailwind
		{ name: 'JavaScript', icon: faJs },
		{ name: 'TypeScript', icon: faTypo3 },
		{ name: 'React', icon: faReact },
		{ name: 'Gatsby', icon: faGalacticRepublic },
		{ name: 'Next.js', icon: faDiagramNext },
		{ name: 'GraphQL', icon: faChartSimple },
		{ name: 'Git - GitHub', icon: faGithub },
	];

	const aboutimage = [
		{ image: image1, text: 'fun Day' },
		{ image: image2, text: 'pyramids' },
		{ image: image3, text: 'university' },
		{ image: image4, text: 'cairo' },
		{ image: image5, text: 'army' },
		{ image: image6, text: 'alex' },
		{ image: image7, text: 'maraci' },
	];

	return (
		<section
			className={`pt-12 pb-20 px-10 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
			<div className='container mx-auto flex flex-col items-center'>
				<h2
					className={`  text-4xl md:text-5xl lg:text-6xl font-bold mb-12 ${
						darkMode ? 'text-white' : 'text-black'
					}`}>
					About Me
				</h2>

				{/* Image gallery */}
				<div className='mb-8 flex justify-center items-center md:h-80 sm:h-auto rounded-xl shadow-lg p-6 relative'>
					{aboutimage.map(
						({ image, text }, index) =>
							image && (
								<div
									key={index}
									className='relative h-full w-full sm:w-1/2 lg:w-1/3 flex justify-center items-center mb-6'>
									{/* Conditionally apply rotation based on index */}
									<div
										className={`${
											index < 3
												? 'rotate-[45deg]'
												: index === 3
												? 'rotate-[0deg]'
												: 'rotate-[-45deg]'
										} scale-90 hover:scale-100 hover:rotate-0 duration-500`}>
										<img
											src={image}
											className='h-auto w-full max-w-xs rounded-xl transform scale-90 transition-transform h-[300px] overflow-hidden'
											alt={text}
										/>
										<div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white text-xl font-semibold opacity-0 transition-opacity hover:opacity-100'>
											{text}
										</div>
									</div>
								</div>
							)
					)}
				</div>

				{/* Intro Text */}
				<div className='max-w-4xl text-center mb-16'>
					<p
						className={`text-2xl sm:text-xl text-base leading-relaxed ${
							darkMode ? 'text-gray-300' : 'text-gray-700'
						}`}>
						I’m a passionate Frontend Developer with experience in building and
						maintaining the front-end of websites and web applications. My goal
						is to create engaging and accessible digital experiences. I’m open
						to new opportunities and collaborations, so feel free to get in
						touch! My skills:
					</p>
				</div>

				{/* Skills Grid */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 fade-in-animation'>
					{contactDetails.map(({ name, icon }) => (
						<div
							key={name}
							className={`flex items-center justify-center px-8 py-4 rounded-lg cursor-pointer shadow-md transition duration-300 ${
								darkMode
									? 'bg-slate-800 text-white hover:bg-slate-600 hover:shadow-lg hover:shadow-slate-700'
									: 'bg-slate-200 text-slate-800 hover:bg-slate-300 hover:shadow-lg hover:shadow-slate-300'
							}`}
							aria-label={`Skill: ${name}`}>
							<span className='text-xl sm:text-lg font-semibold flex justify-between gap-3'>
								<FontAwesomeIcon
									icon={icon}
									className='text-red-600 lg:text-lg md:text-xl sm:text-lg text-base me-2'
								/>
								{name}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default About;
