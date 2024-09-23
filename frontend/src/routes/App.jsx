import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LearnRoute from "./pages/Learnroute";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/learn" element={<LearnRoute />} />
				<Route path="/login" element={<Loginpage />} />
				<Route path="/register" element={<Registerpage />} />
			</Routes>
		</Router>
	);
}

export default App;
