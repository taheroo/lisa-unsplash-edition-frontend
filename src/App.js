import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppLogo from './components/AppLogo/AppLogo.js';
import Search from './components/Search/Search.js';
import MasonryImageList from './components/MasonryImageList/MasonryImageList.js';
import AddPhotoButton from './components/AddPhotoButton/AddPhotoButton.js';

export default function BasicGrid() {
	return (
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
						<AddPhotoButton />
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<MasonryImageList />
				</Grid>
			</Grid>
		</Box>
	);
}
