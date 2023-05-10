import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { InputLabel } from '@mui/material';
import { ImagesContext } from '../../context/imagesContext.js';
import { styles } from './styles.js';

export default function DeleteFormDialog({
	open = false,
	handleClose,
	imageIndex,
}) {
	const { images, setImages } = useContext(ImagesContext);
	const handleRemoveImage = (indexToRemove) => {
		setImages(images.filter((image, index) => index !== indexToRemove));
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
							handleRemoveImage(imageIndex);
							handleClose();
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
