const MediumTitle = ({ styles, text }) => {
	return (
		<div className={`${styles} text-base font-medium text-dark-100`}>
			{text}
		</div>
	);
};

export default MediumTitle;
