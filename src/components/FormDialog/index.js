import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { InputLabel } from '@mui/material';
import AddPhotoButton from '../AddPhotoButton';
import { ImagesContext } from '../../context/imagesContext.js';
import { styles } from './styles.js';
import { createImage } from '../../services/images.js';

export default function FormDialog() {
	const [open, setOpen] = useState(false);
	const { images, setImages } = useContext(ImagesContext);
	const [imageUrl, setImageUrl] = useState('');
	const [title, setTitle] = useState('');

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSubmit = () => {
		handleAddImage();
	};

	const handleAddImage = () => {
		const newImage = { imageUrl: imageUrl, label: title };
		createImage(newImage)
			.then((response) => {
				if (response.success) {
					const createdImage = response.data.image;
					setImages([...images, createdImage]);
					handleClose();
				}
			})
			.catch((error) => {});
	};

	return (
		<div>
			<AddPhotoButton onClick={handleClickOpen} />
			<Dialog
				open={open}
				onClose={handleClose}
				style={{
					borderRadius: 12,
				}}
				PaperProps={{
					style: styles.dialogPaperStyle,
				}}
			>
				<DialogTitle style={styles.dialogTitleStyle}>
					Add a new photo
				</DialogTitle>
				<DialogContent>
					<InputLabel style={styles.inputLabelStyle}>Label</InputLabel>
					<TextField
						onChange={(event) => setTitle(event.target.value)}
						data-testid='labelTextField'
						autoFocus
						margin='dense'
						id='name'
						type='text'
						fullWidth
						variant='standard'
						placeholder='Enter text here'
						InputProps={{
							disableUnderline: true,
						}}
						style={styles.textFieldStyle}
					/>
					<InputLabel style={{ color: '#4F4F4F', paddingTop: 18 }}>
						Photo URL
					</InputLabel>
					<TextField
						onChange={(event) => setImageUrl(event.target.value)}
						data-testid='photoUrlTextField'
						autoFocus
						margin='dense'
						id='name'
						type='text'
						fullWidth
						variant='standard'
						placeholder='Enter photo URL here'
						InputProps={{
							disableUnderline: true,
						}}
						style={styles.textFieldStyle}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} style={styles.cancelButtonStyle}>
						Cancel
					</Button>
					<Button
						data-testid='submitFormDialog'
						onClick={handleSubmit}
						style={styles.submitButtonStyle}
					>
						Submit
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
