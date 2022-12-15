import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Palettes from "./pages/Palettes";
import NewPalette from "./pages/NewPalette";
import Themes from "./pages/Themes";
import Register from "./pages/Register";
import Header from "./components/Header";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/new" element={<NewPalette />} />
				<Route path="/palettes" element={<Palettes />} />
				<Route path="/themes" element={<Themes />} />
			</Routes>
			<footer></footer>
		</Router>
	);
}

export default App;
