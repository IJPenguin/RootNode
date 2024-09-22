import articles from "../../../assets/articles.png";

const Articles = () => {
	return (
		<div className="flex justify-between bg-background px-72 py-16">
			<div className="max-w-md">
				<h3 className="text-2xl text-purple">
					Publish Articles and Tutorials to Educate and Inspire the
					Developer Community
				</h3>
				<p className="text-sans py-4 text-base text-white">
					Showcase your expertise by publishing articles and tutorials
					that educate and inspire fellow developers.
				</p>
				<ul className="max-w-md list-inside list-disc space-y-2 text-white">
					<li>
						Showcase your expertise through articles and tutorials.
					</li>
					<li>Share insights and tips with a global audience.</li>
					<li>
						Promote your content on social channels with one click.
					</li>
					<li>Empower others by sharing your knowledge.</li>
				</ul>
			</div>
			<img
				src={articles}
				alt="articles image"
				className="h-80 rounded-xl"
			/>
		</div>
	);
};

export default Articles;
