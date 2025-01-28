import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const LearnPage = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [articles, setArticles] = useState([]);
	const [newArticle, setNewArticle] = useState({
		title: "",
		author: "",
		description: "",
	});
	const [showForm, setShowForm] = useState(false);

	useEffect(() => {
		const fetchArticles = async () => {
			try {
				const response = await axios.get(
					"http://localhost:3001/articles",
				);
				setArticles(response.data);
			} catch (error) {
				console.error("Error fetching articles:", error);
			}
		};
		fetchArticles();
	}, []);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewArticle({ ...newArticle, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"http://localhost:3001/articles",
				newArticle,
			);
			setArticles([...articles, response.data]);
			setNewArticle({ title: "", author: "", description: "" });
			setShowForm(false);
		} catch (error) {
			console.error("Error creating article:", error);
		}
	};

	const videoData = [
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
	];

	const articleData = articles.map((article) => ({
		type: "Articles",
		title: article.title,
		author: article.author,
		upvotes: article.upvotes,
		description: article.description,
		time: new Date(article.time).toLocaleString(),
		id: article._id,
	}));

	const contentData = [...videoData, ...articleData];

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
					<Button
						text="New Article"
						onClick={() => setShowForm(!showForm)}
					/>
				</div>
			</div>

			{/* Article Submission Form */}
			{showForm && (
				<div className="mx-auto max-w-lg rounded-lg bg-light-background p-4 shadow-md">
					<h2 className="mb-4 text-2xl font-bold">
						Submit a New Article
					</h2>
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label className="text-gray-700 block text-sm font-medium">
								Title
							</label>
							<input
								type="text"
								name="title"
								value={newArticle.title}
								onChange={handleInputChange}
								className="border-gray-300 focus:border-indigo-300 focus:ring-indigo-200 mt-1 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-50"
								required
							/>
						</div>
						<div className="mb-4">
							<label className="text-gray-700 block text-sm font-medium">
								Author
							</label>
							<input
								type="text"
								name="author"
								value={newArticle.author}
								onChange={handleInputChange}
								className="border-gray-300 focus:border-indigo-300 focus:ring-indigo-200 mt-1 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-50"
								required
							/>
						</div>
						<div className="mb-4">
							<label className="text-gray-700 block text-sm font-medium">
								Description
							</label>
							<textarea
								name="description"
								value={newArticle.description}
								onChange={handleInputChange}
								className="border-gray-300 focus:border-indigo-300 focus:ring-indigo-200 mt-1 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-50"
								required
							></textarea>
						</div>
						<Button text="Submit" />
					</form>
				</div>
			)}

			<div className="mx-auto mt-8 grid max-w-full grid-cols-1 gap-6 px-5 md:grid-cols-2 lg:grid-cols-3">
				{filteredContent.map((content, index) => {
					const isArticle = content.type === "Articles";

					let contentStyle = "w-full h-60 md:h-72 lg:h-80";

					return (
						<div
							key={index}
							className={`transform overflow-hidden rounded-lg bg-light-background shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${contentStyle} flex flex-col justify-between`}
						>
							<Link
								to={isArticle ? `/articles/${content.id}` : "#"}
								className="flex h-full items-center justify-center p-4 text-center text-2xl font-semibold"
							>
								{content.title}
							</Link>

							<div className="space-y-1 bg-gunmetal p-4 text-white">
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
