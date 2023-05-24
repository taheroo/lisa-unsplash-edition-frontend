import React, { createContext, useState } from 'react';

const ImagesContext = createContext();

function ImagesContextProvider({ children }) {
	const [images, setImages] = useState([]);
	const [searchImageText, setSearchImageText] = useState('');
	const [isAuthorized, setAuthorized] = useState(false);
	const value = {
		images,
		setImages,
		searchImageText,
		setSearchImageText,
		isAuthorized,
		setAuthorized,
	};

	return (
		<ImagesContext.Provider value={value}>{children}</ImagesContext.Provider>
	);
}

export { ImagesContext, ImagesContextProvider };
