// DarkModeContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
	return useContext(DarkModeContext);
};

export const DarkModeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(() => {
		const savedMode = localStorage.getItem('darkMode');
		return savedMode ? JSON.parse(savedMode) : true; // Default to dark mode
	});

	useEffect(() => {
		localStorage.setItem('darkMode', JSON.stringify(darkMode));
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode((prevMode) => !prevMode);
	};

	return (
		<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};
