const Button = ({ onClick, text }) => {
	return (
		<button
			onClick={onClick}
			className="rounded-full bg-purple px-8 py-3 font-sans text-base font-medium text-white hover:bg-white hover:text-background-purple"
		>
			{text}
		</button>
	);
};

export default Button;
