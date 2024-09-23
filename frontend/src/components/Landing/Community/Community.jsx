import community from "../../../assets/community.png";

const Community = () => {
	return (
		<div className="flex items-center justify-between bg-background px-72 py-16">
			<img
				src={community}
				alt="articles image"
				className="h-96 rounded-xl"
			/>
			<div className="max-w-xl">
				<h3 className="text-2xl text-purple">
					Collaborate with the Developer Community for Feedback,
					Support, and Growth
				</h3>
				<p className="text-sans py-4 text-base text-white">
					Become part of a dynamic community where collaboration
					sparks creativity and advancement.
				</p>
				<ul className="max-w-md list-inside list-disc space-y-2 text-white">
					<li>
						Share ideas and get feedback to refine your projects.
					</li>
					<li>
						Join discussions that boost your skills and knowledge.
					</li>
					<li>
						Exchange insights through comments and peer reviews.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Community;
