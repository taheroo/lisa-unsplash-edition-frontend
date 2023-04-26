import React from 'react';
import { useTheme, Button } from '@mui/material';

function AddPhotoButton() {
	const theme = useTheme();
	return (
		<div
			style={{
				backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
				minWidth: '100%',
				minHeight: '100%',
			}}
		>
			<Button
				variant='contained'
				style={{
					textTransform: 'none',
					backgroundColor: '#3DB46D',
					minWidth: '100%',
					minHeight: '100%',
					borderRadius: 12,
				}}
			>
				Add a photo
			</Button>
		</div>
	);
}

export default AddPhotoButton;
