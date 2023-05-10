import React, { createContext, useState } from 'react';

const ImagesContext = createContext();

function ImagesContextProvider({ children }) {
	const [images, setImages] = useState([]);
	const [searchImageText, setSearchImageText] = useState('');
	const value = { images, setImages, searchImageText, setSearchImageText };

	return (
		<ImagesContext.Provider value={value}>{children}</ImagesContext.Provider>
	);
}

export { ImagesContext, ImagesContextProvider };
