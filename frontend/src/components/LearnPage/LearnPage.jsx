import { useState } from "react";
import Button from "../Button/Button";

const LearnPage = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");

	const contentData = [
		{
			type: "Videos",
			title: "Video 1",
			author: "John Doe",
			upvotes: 120,
			description: "Introduction to React",
			time: "2 hours ago",
		},
		{
			type: "Videos",
			title: "Video 2",
			author: "Jane Smith",
			upvotes: 340,
			description: "Advanced JavaScript",
			time: "5 hours ago",
		},
		{
			type: "Videos",
			title: "Video 3",
			author: "Alex Brown",
			upvotes: 220,
			description: "Understanding CSS Flexbox",
			time: "1 day ago",
		},
		{
			type: "Articles",
			title: "Article 1",
			author: "Emily White",
			upvotes: 89,
			description: "React Hooks Overview",
			time: "3 days ago",
		},
		{
			type: "Articles",
			title: "Article 2",
			author: "Chris Green",
			upvotes: 150,
			description: "JavaScript ES6 Features",
			time: "1 week ago",
		},
		{
			type: "Articles",
			title: "Article 3",
			author: "Sarah Lee",
			upvotes: 67,
			description: "State Management in React",
			time: "2 weeks ago",
		},
		{
			type: "Vlogs",
			title: "Vlog 1",
			author: "Michael Johnson",
			upvotes: 400,
			description: "My Coding Journey",
			time: "4 hours ago",
		},
		{
			type: "Vlogs",
			title: "Vlog 2",
			author: "Anna Cooper",
			upvotes: 320,
			description: "How I Built My First Web App",
			time: "2 days ago",
		},
		{
			type: "Vlogs",
			title: "Vlog 3",
			author: "Sophia Wilson",
			upvotes: 210,
			description: "Tips for Learning JavaScript",
			time: "1 week ago",
		},
	];

	const filteredContent =
		selectedCategory === "All"
			? contentData
			: contentData.filter(
					(content) => content.type === selectedCategory,
				);

	return (
		<div className="min-h-screen bg-background text-white">
			<nav className="flex items-center justify-center border-solid border-purple bg-background p-4">
				<div className="flex space-x-2">
					<input
						type="text"
						placeholder="Search for technologies..."
						className="w-96 rounded bg-white p-2 text-background-purple focus:outline-none"
					/>
					<Button text={"Search"} />
				</div>
			</nav>

			{/* Filter Section */}
			<div className="mt-6 flex items-center space-x-4">
				<div className="mb-8 flex w-full justify-center space-x-4 overflow-x-auto">
					{["All", "Videos", "Articles", "Vlogs"].map((category) => (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)} // Update state when clicked
							className={`${
								selectedCategory === category
									? "bg-bright-purple"
									: "bg-purple hover:bg-light-purple"
							} rounded p-2 text-white shadow-md transition duration-300`}
						>
							{category}
						</button>
					))}
				</div>
			</div>

			<div className="mx-auto grid max-w-full grid-cols-1 gap-6 px-5 md:grid-cols-2 lg:grid-cols-3">
				{filteredContent.map((content, index) => {
					const isVideo = content.type === "Videos";
					const isArticle = content.type === "Articles";
					const isVlog = content.type === "Vlogs";

					let contentStyle = "w-full h-60 md:h-72 lg:h-80";

					return (
						<div
							key={index}
							className={`bg-light-background transform overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${contentStyle} flex flex-col justify-between`}
						>
							<div className="flex h-full items-center justify-center p-4 text-center text-2xl font-semibold">
								{content.title}
							</div>

							<div className="bg-gunmetal space-y-1 p-4 text-white">
								<div className="flex justify-between">
									<span className="font-semibold">
										{content.author}
									</span>
									<span>{content.upvotes} upvotes</span>
								</div>
								<div className="line-clamp-2 overflow-hidden text-ellipsis">
									{content.description}
								</div>

								<div className="text-gray-400 text-sm">
									{content.time}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default LearnPage;
