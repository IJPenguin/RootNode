import Card from "./Card";
import streaming from "../../../assets/streaming.svg";
import archive from "../../../assets/archive.svg";
import execute from "../../../assets/execute.svg";

const Features = () => {
	const streamingText =
		"Stream your coding sessions live for real-time interaction and feedback. Build, debug, or teach while sharing your screen with a collaborative community.";
	const archiveText =
		"Create, manage, and track your repositories with seamless version control. Simplify code commits, branching, and merging for efficient project management.";
	const executeText =
		"Run your code instantly in the browser with our integrated sandbox—no setup needed. Supports multiple languages, perfect for quick demos, testing, or sharing projects.";
	const streamingHeading = "Stream Live Coding";
	const archiveHeading = "Create Code Archives";
	const executeHeading = "Execute Code Instantly";
	return (
		<div className="flex justify-between bg-background px-72 py-16">
			<Card
				image={streaming}
				heading={streamingHeading}
				content={streamingText}
			/>
			<Card
				image={archive}
				heading={archiveHeading}
				content={archiveText}
			/>
			<Card
				image={execute}
				heading={executeHeading}
				content={executeText}
			/>
		</div>
	);
};

export default Features;
