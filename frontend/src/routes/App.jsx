import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LearnRoute from "./pages/LearnRoute";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import ArticleDetail from "../components/article/ArticleDetail";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/learn" element={<LearnRoute />} />
				<Route path="/login" element={<Loginpage />} />
				<Route path="/register" element={<Registerpage />} />
				<Route path="/articles/:id" element={<ArticleDetail />} />
			</Routes>
		</Router>
	);
}

export default App;
