export const styles = (theme) => ({
	masonryContainerStyle: {
		backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	},
	deleteButtonStyle: {
		textTransform: 'none',
		color: '#EB5757',
		borderRadius: 38,
		border: '1px solid #EB5757',
		marginTop: 18,
		marginRight: 18,
		fontSize: 10,
		fontWeight: 500,
		fontFamily: 'Montserrat',
	},
	imageItemBarStyle: {
		background: 'transparent',
		fontFamily: 'Montserrat',
		fontSize: 18,
		fontWeight: 700,
		lineHeight: 22,
	},
});
