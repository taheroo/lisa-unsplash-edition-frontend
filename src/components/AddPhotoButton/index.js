import React from 'react';
import { useTheme, Button } from '@mui/material';
import { buttonStyle, containerStyle } from './styles';

function AddPhotoButton({ onClick }) {
	const theme = useTheme();
	return (
		<div style={containerStyle(theme)}>
			<Button
				data-testid='addPhotoButton'
				onClick={onClick}
				variant='contained'
				style={buttonStyle}
			>
				Add a photo
			</Button>
		</div>
	);
}

export default AddPhotoButton;
