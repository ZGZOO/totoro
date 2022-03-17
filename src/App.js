import * as React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Home from "./Home";
import Films from "./Films";
import People from "./People";
import Locations from "./Locations";
import Species from "./Species";
import Vehicles from "./Vehicles";

function App() {
	return (
		<div className="App">
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="films" element={<Films />} />
				<Route path="people" element={<People />} />
				<Route path="locations" element={<Locations />} />
				<Route path="species" element={<Species />} />
				<Route path="vehicles" element={<Vehicles />} />
			</Routes>
		</div>
	);
}

export default App;
