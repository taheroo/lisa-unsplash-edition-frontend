import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImagesContext from './context/imagesContext.js';
import AppLogo from './components/AppLogo/AppLogo.js';
import Search from './components/Search/Search.js';
import MasonryImageList from './components/MasonryImageList/MasonryImageList.js';
import FormDialog from './components/FormDialog/FormDialog.js';

export default function BasicGrid() {
  const [images, setImages] = useState();
  const value = { images, setImages };

  return (
    <ImagesContext.Provider value={value}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={0}
          style={{ paddingLeft: 100, paddingRight: 100, paddingTop: 32 }}
        >
          <Grid item container xs={12} style={{ paddingBottom: 75 }}>
            <Grid item xs={12} md={1}>
              <AppLogo />
            </Grid>
            <Grid item xs={12} md={10}>
              <Search />
            </Grid>
            <Grid item xs={12} md={1}>
              <FormDialog />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <MasonryImageList />
          </Grid>
        </Grid>
      </Box>
    </ImagesContext.Provider>
  );
}
