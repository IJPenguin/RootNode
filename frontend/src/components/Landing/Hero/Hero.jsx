import Content from "../Content/Content";
import landing from "../../../assets/landing.png";

const Hero = () => {
	return (
		<div className="flex items-center gap-20 bg-background px-72 py-16">
			<Content />
			<img
				src={landing}
				alt="Landing"
				className="h-96 rounded-xl drop-shadow-4xl"
			/>
		</div>
	);
};

export default Hero;
