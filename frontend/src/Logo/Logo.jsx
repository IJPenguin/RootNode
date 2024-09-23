const Logo = ({ logo, logoOnly, x, y, fontSize, fontWeight }) => {
	return (
		<div className="flex items-center align-middle">
			<img src={logo} alt="logo" className={`${x} ${y}`} />
			<span
				className={`hidden ${logoOnly ? " " : "md:block"} ${fontSize} font-sans ${fontWeight} pl-2 text-white`}
			>
				<a href="/">Root Node</a>
			</span>
		</div>
	);
};
export default Logo;
