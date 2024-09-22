import Button from "../../Button/Button";

const Content = () => {
	const handleClick = () => {
		// Code for handling button
	};
	return (
		<div>
			<h1 className="font-sans text-7xl font-bold text-white">
				Code, stream &{" "}
			</h1>
			<h1 className="font-sans text-7xl font-bold text-purple">
				solve problems.
			</h1>
			<p className="mt-5 max-w-md font-sans text-2xl text-white">
				Manage repositories, execute and stream code with no latency.{" "}
			</p>
			<div className="mt-10 flex">
				<Button text="Start Coding!" onClick={handleClick} />
				<p className="ml-5 max-w-60 text-white">
					Your journey to becoming a better developer starts here.
				</p>
			</div>
		</div>
	);
};

export default Content;
