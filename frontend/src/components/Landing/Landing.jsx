import Content from "./Content/Content";
import landing from "../../assets/landing.png";

const Landing = () => {
	return (
		<div className="flex items-center justify-center gap-20 bg-background py-28">
			<Content />
			<img
				src={landing}
				alt="Landing"
				className="drop-shadow-4xl h-96 rounded-xl"
			/>
		</div>
	);
};

export default Landing;
