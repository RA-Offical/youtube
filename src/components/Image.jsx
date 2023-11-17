const Image = ({
	dimenStyle = "w-6 h-6",
	appearanceStyle = "rounded-full",
	image,
	alt,
}) => {
	return (
		<img
			src={image}
			alt={alt}
			className={`${dimenStyle}  ${appearanceStyle}`}
		/>
	);
};

export default Image;
