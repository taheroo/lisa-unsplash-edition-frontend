import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: '#BDBDBD',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		minWidth: '100%',
	},
}));

function Search() {
	const theme = useTheme();
	return (
		<div
			style={{
				backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
				minWidth: '100%',
				minHeight: '100%',
			}}
		>
			<div
				style={{
					position: 'relative',
					borderRadius: 12,
					border: '1px solid #BDBDBD',
					filter: 'drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1))',
					boxSizing: 'border-box',
					maxWidth: 300,
				}}
			>
				<SearchIconWrapper>
					<SearchIcon />
				</SearchIconWrapper>
				<StyledInputBase
					placeholder='Search by name'
					inputProps={{ 'aria-label': 'search' }}
				/>
			</div>
		</div>
	);
}

export default Search;
