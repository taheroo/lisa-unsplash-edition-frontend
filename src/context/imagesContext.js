import React from 'react';

const ImagesContext = React.createContext({
	images: [],
	setImages: () => {},
	searchImageText: '',
	setSearchImageText: () => {},
});
ImagesContext.displayName = 'ImagesContext';

export default ImagesContext;
