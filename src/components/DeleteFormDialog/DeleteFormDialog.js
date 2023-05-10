import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { InputLabel } from '@mui/material';
import { ImagesContext } from '../../context/imagesContext.js';

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
					style: {
						borderRadius: 12,
						width: 620, // set the width of the dialog
						height: 370, // set the height of the dialog
						overflow: 'hidden', // optional: to hide the overflow
					},
				}}
			>
				<DialogTitle style={{ color: '#333333' }}>Are you sure?</DialogTitle>
				<DialogContent>
					<InputLabel style={{ color: '#4F4F4F' }}>Password</InputLabel>
					<TextField
						data-testid='labelTextField'
						autoFocus
						margin='dense'
						id='name'
						type='text'
						fullWidth
						variant='standard'
						placeholder='Type Password'
						InputProps={{
							disableUnderline: true,
						}}
						style={{
							boxSizing: 'border-box',
							border: '1px solid #4F4F4F',
							filter: 'drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1))',
							borderRadius: '12px',
							padding: 18,
						}}
					/>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={handleClose}
						style={{
							textTransform: 'none',
							color: '#BDBDBD',
							fontFamily: 'Noto Sans',
							fontWeight: 500,
							fontSize: 16,
							fontStyle: 'normal',
							height: 55,
							width: 105,
						}}
					>
						Cancel
					</Button>
					<Button
						data-testid='submitDeleteFormDialog'
						onClick={() => {
							handleRemoveImage(imageIndex);
							handleClose();
						}}
						style={{
							textTransform: 'none',
							backgroundColor: '#EB5757',
							fontFamily: 'Noto Sans',
							fontStyle: 'normal',
							color: '#FFFFFF',
							fontWeight: 700,
							fontSize: 16,
							borderRadius: 12,
							height: 55,
							width: 105,
						}}
					>
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
