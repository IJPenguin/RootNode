import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { useState } from "react";

const Streampage = () => {
	return <h1>Stream hai</h1>;
};

export default Streampage;

// const Streampage = () => {
// 	const [editorState, setEditorState] = useState(() =>
// 		EditorState.createEmpty(),
// 	);

// 	return <Editor editorState={editorState} onChange={setEditorState} />;
// };

// export default Streampage;
