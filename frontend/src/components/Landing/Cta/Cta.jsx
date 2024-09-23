import WhiteButton from "../../Button/WhiteButton";
import { useNavigate } from "react-router-dom";

const Cta = () => {
	const navigate = useNavigate();

	const handleRegisterClick = () => {
		navigate("/register");
	};
	return (
		<div className="flex flex-col items-center bg-background py-96">
			<h4 className="text-base font-medium text-white">
				Code, Collaborate, and Create Together
			</h4>
			<h1 className="max-w-5xl pb-14 pt-6 text-center text-5xl font-bold leading-tight text-purple">
				Join a community where coders innovate, collaborate, and bring
				ideas to life!
			</h1>
			<WhiteButton text="Register" onClick={handleRegisterClick} />
		</div>
	);
};

export default Cta;
