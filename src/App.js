import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';
import logo from './images/integration.png';
import { DarkModeProvider, useDarkMode } from './DarkModeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSun,
	faMoon,
	faBars,
	faTimes,
} from '@fortawesome/free-solid-svg-icons'; // Added faBars and faTimes

function App() {
	return (
		<DarkModeProvider>
			<AppContent />
		</DarkModeProvider>
	);
}

function AppContent() {
	const { darkMode, toggleDarkMode } = useDarkMode();
	const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu visibility

	return (
		<Router>
			<div
				className={`min-h-screen flex flex-col ${
					darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
				}`}>
				<nav
					className={`bg-black ${
						darkMode
							? 'bg-gray-900 shadow-gray-800'
							: 'bg-white shadow-slate-200'
					} sticky top-0 z-10 py-4 px-8 text-center text-lg font-semibold flex justify-between items-center shadow-lg`}>
					<div className='flex justify-between items-center w-full space-x-4'>
						<Link to='/'>
							<img
								src={logo}
								className='h-10 w-10 sm:h-12 sm:w-12' // Adjusted for better scaling
								alt='logo'
							/>
						</Link>

						{/* Desktop menu */}
						<div className='hidden md:flex space-x-10'>
							<Link
								to='/'
								className='hover:text-blue-400 transition duration-300 text-base sm:text-lg md:text-xl'>
								Home
							</Link>
							<Link
								to='/about'
								className='hover:text-blue-400 transition duration-300 text-base sm:text-lg md:text-xl'>
								About
							</Link>
							<Link
								to='/projects'
								className='hover:text-blue-400 transition duration-300 text-base sm:text-lg md:text-xl'>
								Projects
							</Link>
							<Link
								to='/Contact'
								className='hover:text-blue-400 transition duration-300 text-base sm:text-lg md:text-xl'>
								Contact
							</Link>
						</div>

						{/* Mobile menu button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the mobile menu visibility
							className='md:hidden flex items-center justify-center p-2 rounded-md text-white'>
							<FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />{' '}
							{/* Switch between bars and times */}
						</button>

						{/* Dark mode toggle button */}
						<button
							onClick={toggleDarkMode}
							className={`py-2 px-4 rounded-full focus:outline-none transition duration-150 ${
								darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'
							}`}>
							<FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
						</button>
					</div>
				</nav>

				{/* Mobile menu content */}
				<div
					className={`md:hidden  ${
						isMenuOpen ? 'block' : 'hidden'
					} bg-black text-white space-y-4 py-4`}>
					<Link
						to='/'
						className='block text-base sm:text-lg md:text-xl text-center'>
						Home
					</Link>
					<Link
						to='/about'
						className='block text-base sm:text-lg md:text-xl text-center'>
						About
					</Link>
					<Link
						to='/projects'
						className='block text-base sm:text-lg md:text-xl text-center'>
						Projects
					</Link>
					<Link
						to='/Contact'
						className='block text-base sm:text-lg md:text-xl text-center'>
						Contact
					</Link>
				</div>

				<div className='flex-grow  max-w-full mx-auto px-8 py-12 overflow-x-hidden'>
					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/about'
							element={<About />}
						/>
						<Route
							path='/projects'
							element={<Projects />}
						/>
						<Route
							path='/Contact'
							element={<Contact />}
						/>
					</Routes>
				</div>

				<footer
					className={`py-6 px-8 text-center text-sm ${
						darkMode ? 'bg-black text-white' : 'bg-slate-200 text-black'
					} transition duration-300 fade-in-animation`}>
					<p className='mb-2 text-base sm:text-lg md:text-xl'>
						© 2024 magdi-portfolio . All Rights Reserved.
					</p>
					<p className='text-gray-500 text-sm sm:text-base md:text-lg'>
						Designed by{' '}
						<a
							href='https://web.facebook.com/magdi.perper.9'
							className='text-blue-500 hover:underline'>
							magdi perper
						</a>
					</p>
				</footer>
			</div>
		</Router>
	);
}

export default App;
