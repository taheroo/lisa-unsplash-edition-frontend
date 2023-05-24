import React, { useState, useEffect, useContext } from 'react';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	TextField,
} from '@mui/material';
import { styled } from '@mui/system';
import performLogin from '../../services/auth.js';
import { ImagesContext } from '../../context/imagesContext.js';

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(3),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
	'& .MuiInputBase-input': {
		fontSize: '1.5rem', // Adjust the font size as desired
	},
}));

const Login = () => {
	const [isDialogOpen, setDialogOpen] = useState(true);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginError, setLoginError] = useState('');
	const { isAuthorized, setAuthorized } = useContext(ImagesContext);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			setAuthorized(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleDialogClose = (event, reason) => {
		if (reason && reason === 'backdropClick') return;
		setDialogOpen(false);
	};

	const handleLogin = () => {
		performLogin(email, password)
			.then((response) => {
				if (response.success) {
					setAuthorized(true);
					setDialogOpen(false);
				} else {
					setLoginError(response.error);
				}
			})
			.catch((error) => {});
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	return (
		<div>
			{!isAuthorized && (
				<Dialog
					open={isDialogOpen}
					onClose={handleDialogClose}
					disableEscapeKeyDown
				>
					<DialogTitle>Login</DialogTitle>
					<StyledDialogContent>
						<StyledTextField
							label='Email'
							fullWidth
							value={email}
							onChange={handleEmailChange}
							error={!!loginError}
							variant='outlined'
						/>
						<TextField
							label='Password'
							type='password'
							fullWidth
							value={password}
							onChange={handlePasswordChange}
							error={!!loginError}
							helperText={loginError}
							variant='outlined'
						/>
					</StyledDialogContent>
					<DialogActions>
						<Button onClick={handleLogin} variant='contained' color='primary'>
							Login
						</Button>
					</DialogActions>
				</Dialog>
			)}
		</div>
	);
};

export default Login;
