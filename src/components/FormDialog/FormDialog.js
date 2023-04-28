import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { InputLabel } from '@mui/material';
import AddPhotoButton from '../AddPhotoButton/AddPhotoButton';

export default function FormDialog() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
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
					style: {
						borderRadius: 12,
						width: 620, // set the width of the dialog
						height: 370, // set the height of the dialog
						overflow: 'hidden', // optional: to hide the overflow
					},
				}}
			>
				<DialogTitle style={{ color: '#333333' }}>Add a new photo</DialogTitle>
				<DialogContent>
					<InputLabel style={{ color: '#4F4F4F' }}>Label</InputLabel>
					<TextField
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
						style={{
							boxSizing: 'border-box',
							border: '1px solid #4F4F4F',
							filter: 'drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1))',
							borderRadius: '12px',
							padding: 18,
						}}
					/>
					<InputLabel style={{ color: '#4F4F4F', paddingTop: 18 }}>
						Photo URL
					</InputLabel>
					<TextField
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
						onClick={handleClose}
						style={{
							textTransform: 'none',
							backgroundColor: '#3DB46D',
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
						Submit
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
