import React from 'react';

const ImagesContext = React.createContext({
  images: [],
  setImages: () => {},
});
ImagesContext.displayName = 'ImagesContext';

export default ImagesContext;
