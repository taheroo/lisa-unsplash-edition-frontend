import React from 'react';
import { useTheme, Button } from '@mui/material';

function AddPhotoButton({ onClick }) {
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
				data-testid='addPhotoButton'
				onClick={onClick}
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
