import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { InputLabel } from '@mui/material';
import { ImagesContext } from '../../context/imagesContext.js';
import { styles } from './styles.js';
import { deleteImage } from '../../services/images.js';

export default function DeleteFormDialog({
	open = false,
	handleClose,
	selectedImage,
}) {
	const { images, setImages } = useContext(ImagesContext);
	const [password, setPassword] = useState('');
	const [authenticationError, setAuthenticationError] = useState('');

	const handleRemoveImage = (indexToRemove) => {
		deleteImage(selectedImage.imageId, password)
			.then((response) => {
				if (response.success) {
					setImages(images.filter((image, index) => index !== indexToRemove));
					handleClose();
				} else {
					setAuthenticationError(response.error);
				}
			})
			.catch((error) => {});
	};
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};
	return (
		<div>
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
				<DialogTitle style={styles.dialogTitleStyle}>Are you sure?</DialogTitle>
				<DialogContent>
					<InputLabel style={styles.inputLabelStyle}>Password</InputLabel>
					<TextField
						data-testid='labelTextField'
						autoFocus
						margin='dense'
						id='name'
						type='password'
						fullWidth
						variant='standard'
						placeholder='Type Password'
						onChange={handlePasswordChange}
						error={!!authenticationError}
						helperText={authenticationError}
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
						data-testid='submitDeleteFormDialog'
						onClick={() => {
							handleRemoveImage(selectedImage.index);
						}}
						style={styles.deleteButtonStyle}
					>
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
