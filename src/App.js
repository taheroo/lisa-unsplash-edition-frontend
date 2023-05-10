import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ImagesContextProvider } from './context/imagesContext.js';
import AppLogo from './components/AppLogo';
import Search from './components/Search/Search.js';
import MasonryImageList from './components/MasonryImageList';
import FormDialog from './components/FormDialog';

export default function App() {
	return (
		<ImagesContextProvider>
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
		</ImagesContextProvider>
	);
}
