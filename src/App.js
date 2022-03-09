import * as React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Films from "./Films";
import People from "./People";
import Locations from "./Locations";
import Species from "./Species";
import Vehicles from "./Vehicles";

function App() {
	return (
		<div className="App">
			<h1>App Title</h1>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/films">Films</Link>
				<Link to="/people">People</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="films" element={<Films />} />
				<Route path="people" element={<People />} />
			</Routes>
		</div>
	);
}

export default App;
