function Spinner({ borderBolor = "border-gray-700", size = "w-7 h-7" }) {
	return (
		<div className={`${size}`}>
			<div
				className={`animate-spin h-full w-full rounded-full border-2 border-t-transparent ${borderBolor}`}></div>
		</div>
	);
}
export default Spinner;
