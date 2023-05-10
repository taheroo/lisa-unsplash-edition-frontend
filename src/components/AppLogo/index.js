import React from 'react';
import { useTheme } from '@mui/material/styles';
import logo from '../../assets/images/my_unsplash_logo.svg';
import { containerStyle } from './styles.js';

function AppLogo() {
	const theme = useTheme();
	return (
		<div style={containerStyle(theme)}>
			<img alt='logo' src={logo} />
		</div>
	);
}

export default AppLogo;
