import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ArticleDetail = () => {
	const { id } = useParams();
	const [article, setArticle] = useState(null);

	useEffect(() => {
		const fetchArticle = async () => {
			try {
				const response = await axios.get(
					`http://localhost:3001/articles/${id}`,
				);
				setArticle(response.data);
			} catch (error) {
				console.error("Error fetching article:", error);
			}
		};
		fetchArticle();
	}, [id]);

	if (!article) {
		return <div>Loading...</div>;
	}

	return (
		<div className="min-h-screen bg-background p-4 text-white">
			<h1 className="text-3xl font-bold">{article.title}</h1>
			<p className="text-gray-400 text-sm">
				{new Date(article.time).toLocaleString()}
			</p>
			<p className="mt-4">{article.description}</p>
			<p className="mt-4 font-semibold">Author: {article.author}</p>
			<p className="mt-4">Upvotes: {article.upvotes}</p>
		</div>
	);
};

export default ArticleDetail;
