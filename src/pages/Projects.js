import React from 'react';
import { useDarkMode } from '../DarkModeContext';
// import { IoMdEye } from 'react-icons/io';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Projects() {
	const { darkMode } = useDarkMode();

	const projects = [
		{
			project: 'chat-bot',
			image: 'https://bat-chat.surge.sh/',
			url: 'https://bat-chat.surge.sh/',
			text: 'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks,Getsby , Hostinger, etc & used by thousands of developers globally  ',
		},
		{
			project: 'Football-Historic',
			image: 'https://historic.vercel.app',
			url: 'https://historic.vercel.app',
			text: 'by using next js , api , tailwind and typescript make this website have all information about football whith ai chating and fan zone and historic of all football club and player and you can see also place for shopping ',
		},
		{
			project: 'Social Media',
			image: 'https://social-midea.vercel.app/',
			url: 'https://social-midea.vercel.app/',
			text: 'by using next js , tailwind  and typescript make this website are a social media website that have all the feature of social media like post , comment , like  and followin  also have notification and stories ',
		},
		{
			project: 'E-commerce',
			image: 'https://historic.vercel.app/component/shop',
			url: 'https://e-commerce-h3ex0he57-magdis-projects.vercel.app/',
			text: 'by using next js , tailwind ,api  and typescript make this website are a e-commerce website that have all the feature of e-commerce like cart, payement,product and and shopping place ',
		},
		{
			project: 'point-cursure',
			image: 'https://point-cursure.surge.sh/',
			url: 'https://point-cursure.surge.sh/',
			text: 'by using html and css , vanilla javascript and react  making a point-cursure having animation and cursor effect',
		},
		{
			project: 'batslide',
			image: 'https://batslide.surge.sh/',
			url: 'https://batslide.surge.sh/',
			text: 'by using html , css , vanilla javascript and react making a bat-slide with background image open on scrolling',
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
			<div className='grid md:grid-cols-2 grid-col-1 p-4 gap-y-16 md:gap-8'>
				{projects.map((project, index) => (
					<div
						key={index}
						className={`grid grid-cols-1  gap-5  rounded-lg ${
							darkMode
								? 'text-white shadow-slate-800 bg-gray-800'
								: 'text-slate-800 shadow-slate-200 bg-blue-50'
						} transition duration-300 flex items-center rounded-lg overflow-hidden`}>
						<div className='w-full'>
							<iframe
								src={project.image}
								className='w-full mx-auto transform   transition-transform duration-500 hover:rotate-0 hover:scale-100  overflow-hidden'
								title='project-iframe'
								scrolling='no'></iframe>
						</div>

						<div className='text-start p-4 pb-7 '>
							<h1 className='text-lg md:text-xl font-semibold  animate-bounce flex justify-center items-center mb-8'>
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
								Live{' '}
								<FontAwesomeIcon
									icon={faFacebook}
									className='text-2xl md:text-3xl transition-colors duration-300'
									title='Facebook'
								/>
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Projects;
