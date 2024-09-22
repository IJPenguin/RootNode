const WhiteButton = ({ onClick, text }) => {
	return (
		<button
			onClick={onClick}
			className="hover:white rounded-full bg-white px-8 py-3 font-sans text-base font-medium text-background-purple hover:bg-purple"
		>
			{text}
		</button>
	);
};

export default WhiteButton;
