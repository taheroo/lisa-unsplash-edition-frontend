import React, { useEffect, useContext, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import { ImagesContext } from '../../context/imagesContext.js';
import DeleteFormDialog from '../DeleteFormDialog';
import { styles } from './styles.js';
import { getImages } from '../../services/images.js';

function MasonryImageList() {
	const theme = useTheme();
	const { images, setImages, searchImageText, isAuthorized } =
		useContext(ImagesContext);
	const [open, setOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	useEffect(() => {
		if (!isAuthorized) return;
		if (!searchImageText.trim()) {
			getImages()
				.then((response) => {
					if (response.success) {
						setImages(response.data);
					}
				})
				.catch((error) => {
					console.error(error);
				});
		} else {
			setImages(
				images.filter((image) =>
					image.label.toLowerCase().includes(searchImageText.toLowerCase())
				)
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchImageText, isAuthorized]);

	const handleClickOpen = (index, imageId) => {
		setSelectedImage({ index, imageId });
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div style={styles(theme).masonryContainerStyle}>
			<DeleteFormDialog
				open={open}
				handleClose={handleClose}
				selectedImage={selectedImage}
			></DeleteFormDialog>
			<Box sx={{ overflowY: 'scroll' }}>
				<ImageList variant='masonry' cols={3} gap={45}>
					{images &&
						images.map((item, index) => (
							<ImageListItem
								data-testid='imageItem'
								key={item.url}
								style={{ cursor: 'pointer' }}
							>
								<img
									src={`${item.url}`}
									srcSet={`${item.url}`}
									alt={item.label}
									loading='lazy'
								/>
								<ImageListItemBar
									sx={{ background: 'transparent' }}
									position='top'
									actionIcon={
										<IconButton
											data-testid={`deletePhotoButton#${index}`}
											sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
											aria-label={`delete ${item.label}`}
											onClick={() => handleClickOpen(index, item._id)}
											style={styles(theme).deleteButtonStyle}
										>
											<span style={{ paddingLeft: 10, paddingRight: 10 }}>
												delete
											</span>
										</IconButton>
									}
								/>
								<ImageListItemBar
									sx={styles(theme).imageItemBarStyle}
									position='bottom'
									title={item.label}
								/>
							</ImageListItem>
						))}
				</ImageList>
			</Box>
		</div>
	);
}

export default MasonryImageList;
