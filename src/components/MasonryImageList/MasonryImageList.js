import React, { useEffect, useContext, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ImagesContext from '../../context/imagesContext.js';
import DeleteFormDialog from '../DeleteFormDialog/DeleteFormDialog.js';

function MasonryImageList() {
	const theme = useTheme();
	const { images, setImages, searchImageText } = useContext(ImagesContext);
	const [open, setOpen] = useState(false);
	const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
	useEffect(() => {
		if (!searchImageText.trim()) {
			setImages(itemData);
		} else {
			setImages(
				itemData.filter((image) =>
					image.title.toLowerCase().includes(searchImageText.toLowerCase())
				)
			);
		}
	}, [searchImageText]);

	const handleClickOpen = (index) => {
		setSelectedImageIndex(index);
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div
			style={{
				backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
			}}
		>
			<DeleteFormDialog
				open={open}
				handleClose={handleClose}
				imageIndex={selectedImageIndex}
			></DeleteFormDialog>
			<Box sx={{ overflowY: 'scroll' }}>
				<ImageList variant='masonry' cols={3} gap={45}>
					{images &&
						images.map((item, index) => (
							<ImageListItem
								data-testid='imageItem'
								key={item.img}
								style={{ cursor: 'pointer' }}
							>
								<img
									src={`${item.img}`}
									srcSet={`${item.img}`}
									alt={item.title}
									loading='lazy'
								/>
								<ImageListItemBar
									sx={{ background: 'transparent' }}
									position='top'
									actionIcon={
										<IconButton
											sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
											aria-label={`delete ${item.title}`}
										>
											<Button
												variant='outlined'
												style={{
													textTransform: 'none',
													color: '#EB5757',
													borderColor: '#EB5757',
													borderRadius: 38,
												}}
												onClick={() => handleClickOpen(index)}
											>
												delete
											</Button>
										</IconButton>
									}
								/>
								<ImageListItemBar
									sx={{
										background: 'transparent',
										fontFamily: 'Montserrat',
										fontSize: 18,
										fontWeight: 700,
										lineHeight: 22,
									}}
									position='bottom'
									title={item.title}
								/>
							</ImageListItem>
						))}
				</ImageList>
			</Box>
		</div>
	);
}

const itemData = [
	{
		img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
		title: 'Bed',
	},
	{
		img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
		title: 'Books',
	},
	{
		img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
		title: 'Sink',
	},
	{
		img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
		title: 'Kitchen',
	},
	{
		img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
		title: 'Blinds',
	},
	{
		img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
		title: 'Chairs',
	},
	{
		img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
		title: 'Laptop',
	},
	{
		img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
		title: 'Doors',
	},
	{
		img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
		title: 'Coffee',
	},
	{
		img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
		title: 'Storage',
	},
	{
		img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
		title: 'Candle',
	},
];

export default MasonryImageList;
