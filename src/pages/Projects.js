import React from 'react';
import { useDarkMode } from '../DarkModeContext';

function Projects() {
	const { darkMode } = useDarkMode();

	const projects = [
		{
			project: 'chat-bot',
			image: 'https://bat-chat.surge.sh/',
			url: 'https://bat-chat.surge.sh/',
			text: 'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally',
		},
		{
			project: 'point-cursure',
			image: 'https://point-cursure.surge.sh/',
			url: 'https://point-cursure.surge.sh/',
			text: 'by using html and css , vanilla javascript and react  making a point-cursure having animation and cursor effect',
		},
		{
			project: 'Football-Historic',
			image: 'https://history-football-ge7w.vercel.app/',
			url: 'https://history-football-ge7w.vercel.app/',
			text: 'by using next js and tailwind and typescript make this website have information about football ',
		},
		{
			project: 'gallary-slide',
			image: 'https://gallary-slide.surge.sh/',
			url: 'https://gallary-slide.surge.sh/',
			text: 'by using html and css , vanilla javascript and react making a gallary-slide',
		},
		{
			project: 'text-animation',
			image: 'https://text-animation.surge.sh/',
			url: 'https://text-animation.surge.sh/',
			text: 'by using html , css , vanilla javascript and react making text-animation with background image',
		},
		{
			project: 'tech-village',
			image: 'https://tech-village.surge.sh/',
			url: 'https://tech-village.surge.sh/',
			text: 'by using html and css , vanilla javascript making a website',
		},
		{
			project: 'paralex-app',
			image: 'https://paralex-app.surge.sh/',
			url: 'https://paralex-app.surge.sh/',
			text: 'by using html and css , vanilla javascript and react making a paralex-app having animation and cursor effect',
		},
		{
			project: 'chart-api-geo',
			image: 'https://chart-api-geo.surge.sh/',
			url: 'https://chart-api-geo.surge.sh/',
			text: 'by using html and css , vanilla javascript making a chart-api-geo',
		},
		{
			project: 'batslide',
			image: 'https://batslide.surge.sh/',
			url: 'https://batslide.surge.sh/',
			text: 'by using html , css , vanilla javascript and react making a bat-slide with background image open on scrolling',
		},
		{
			project: 'vanilla-js-calculator',
			image: 'https://vanilla-javascript-calc.surge.sh/',
			url: 'https://vanilla-javascript-calc.surge.sh/',
			text: 'by using html and css , vanilla javascript making an small calculator',
		},
		{
			project: 'to-Do-List',
			image: 'https://vanillajs-todolist.surge.sh/',
			url: 'https://vanillajs-todolist.surge.sh/',
			text: 'by using html and css , vanilla javascript making an small to-do-list',
		},
		{
			project: 'vanilla-js-weather',
			image: 'https://vanilla-js-weather.surge.sh/',
			url: 'https://vanilla-js-weather.surge.sh/',
			text: 'by using html and css , vanilla javascript making an small vanilla-js-weather',
		},
		{
			project: 'social-app',
			image: 'https://blog-social-app.surge.sh/',
			url: 'https://blog-social-app.surge.sh/',
			text: 'by using html and css , vanilla javascript making an small socialMedia-app',
		},
		{
			project: 'vanilla-js-weather',
			image: 'https://vanilla-js-weather.surge.sh/',
			url: 'https://vanilla-js-weather.surge.sh/',
			text: 'by using html and css , vanilla javascript making an small vanilla-js-weather',
		},

		{
			project: 'circle-slide',
			image: 'https://circle-slide.surge.sh/',
			url: 'https://circle-slide.surge.sh/',
			text: 'by using html and css , vanilla javascript and react making a  circle-slide having animation ',
		},

		{
			project: 'code-edit',
			image: 'https://code-edit.surge.sh/',
			url: 'https://code-edit.surge.sh/',
			text: 'by using html and css , vanilla javascript making a code-edit',
		},

		{
			project: 'responsive-dashboard',
			image: 'https://responsive-dashboard.surge.sh/',
			url: 'https://responsive-dashboard.surge.sh/',
			text: 'by using html and css , vanilla javascript   making a responsive-dashboard',
		},
		{
			project: 'transelator',
			image: 'https://transelator.surge.sh/',
			url: 'https://transelator.surge.sh/',
			text: 'by using html and css , vanilla javascript   making a transelator',
		},

		{
			project: 'stopwatch-count',
			image: 'https://stopwatch-count.surge.sh/',
			url: 'https://stopwatch-count.surge.sh/',
			text: 'by using html and css , vanilla javascript making a stopwatch-count',
		},
	];

	return (
		<section
			className={`container flex flex-col items-center p-2 md:p-8 lg:p-16 text-center ${
				darkMode ? 'text-white' : 'text-slate-700'
			}`}>
			<h2 className='text-4xl md:text-5xl font-semibold mb-8'>Projects</h2>
			<p className='text-lg md:text-xl font-semibold mb-16 w-full sm:w-5/6 md:w-4/6 mx-auto'>
				Here you will find some of the personal and client projects that I
				created, with each project containing its own case study.
			</p>
			<div className='grid grid-cols-1 gap-y-16 md:gap-8'>
				{projects.map((project, index) => (
					<div
						key={index}
						className={`grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8 rounded-lg ${
							darkMode
								? 'text-white shadow-slate-800'
								: 'text-slate-800 shadow-slate-200'
						} transition duration-300 flex items-center`}>
						<div className='w-full'>
							<iframe
								src={project.image}
								className='w-full mx-auto transform rotate-12 scale-90 transition-transform duration-500 hover:rotate-0 hover:scale-100 h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden'
								title='project-iframe'
								scrolling='no'></iframe>
						</div>

						<div className='text-start pt-6 sm:pt-10 ps-6 md:ps-16'>
							<h1 className='text-lg md:text-xl font-semibold mb-6 animate-bounce flex justify-center items-center mb-8'>
								<span className='w-2 h-5 bg-blue-600 absolute start-0'></span>
								<span className='absolute start-5'>{project.project}</span>
							</h1>
							<p className='text-base md:text-xl mb-6'>{project.text}</p>
							<a
								href={project.url}
								target='_blank'
								className={`text-sm sm:text-lg md:text-xl font-semibold py-4 px-8 rounded-lg duration-300 ${
									darkMode
										? 'bg-slate-300 text-slate-700 hover:bg-slate-100'
										: 'bg-blue-700 text-white hover:bg-blue-800'
								}`}
								rel='noreferrer'>
								{'See this website'}
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Projects;
