const Navlink = ({ text, route }) => {
	return (
		<li>
			<a
				href={`/${route}`}
				className="font-sans text-base text-white hover:text-light-purple"
			>
				{text}
			</a>
		</li>
	);
};

export default Navlink;
