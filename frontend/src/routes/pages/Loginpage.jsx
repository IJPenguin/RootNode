import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ toggle }) => {
	const navigate = useNavigate();
	return (
		<div className="flex min-h-screen items-center justify-center bg-background">
			{/* Decorative Circle Elements */}
			<div className="absolute left-5 top-5 h-40 w-40 rounded-full bg-light-purple opacity-20"></div>
			<div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-light-purple opacity-10"></div>
			{/* The custom shaped form layout */}
			<div className="relative z-10 w-full max-w-md rounded-br-[120px] rounded-tl-[120px] bg-gunmetal p-8 shadow-xl">
				<h2 className="mb-6 text-center text-4xl font-bold text-white">
					Welcome Back!
				</h2>
				<p className="mb-8 text-center text-white">
					Ready to continue your journey? Let's sign in and get back
					to achieving your coding goals.
				</p>
				<form className="flex flex-col gap-4">
					<input
						type="email"
						className="w-full rounded-lg bg-white p-4 text-gunmetal placeholder-gunmetal focus:outline-none focus:ring-4 focus:ring-white"
						placeholder="Enter your email"
					/>
					<input
						type="password"
						className="w-full rounded-lg bg-white p-4 text-gunmetal placeholder-gunmetal focus:outline-none focus:ring-4 focus:ring-white"
						placeholder="Enter your password"
					/>
					<button
						type="submit"
						className="mt-4 w-full rounded-lg bg-bright-purple py-3 font-bold text-white shadow-md transition duration-300 hover:bg-light-purple"
					>
						Login
					</button>
				</form>
				<p className="mt-6 text-center text-white">
					Don’t have an account yet?{" "}
					<span
						onClick={() => {
							navigate("/register");
						}}
						className="cursor-pointer font-bold text-light-purple hover:underline"
					>
						Register
					</span>
				</p>
			</div>
		</div>
	);
};

export default Login;
