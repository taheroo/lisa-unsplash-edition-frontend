import React from 'react';
import { useTheme } from '@mui/material/styles';
import logo from '../../assets/images/my_unsplash_logo.svg';

function AppLogo() {
	const theme = useTheme();
	return (
		<div
			style={{
				backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
				minWidth: '100%',
				minHeight: '100%',
			}}
		>
			<img alt='logo' src={logo} />
		</div>
	);
}

export default AppLogo;
