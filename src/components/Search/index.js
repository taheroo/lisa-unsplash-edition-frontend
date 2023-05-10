import React, { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { ImagesContext } from '../../context/imagesContext.js';
import {
	SearchIconWrapper,
	StyledInputBase,
	containerStyle,
	subContainerStyle,
} from './styles.js';

function Search() {
	const theme = useTheme();
	const { setSearchImageText } = useContext(ImagesContext);

	const handleSearchChange = (event) => {
		setSearchImageText(event.target.value);
	};

	return (
		<div style={containerStyle(theme)}>
			<div style={subContainerStyle}>
				<SearchIconWrapper>
					<SearchIcon />
				</SearchIconWrapper>
				<StyledInputBase
					data-testid='searchInput'
					placeholder='Search by name'
					inputProps={{ 'aria-label': 'search' }}
					onChange={handleSearchChange}
				/>
			</div>
		</div>
	);
}

export default Search;
