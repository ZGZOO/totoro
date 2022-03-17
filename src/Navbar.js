import * as React from "react";
import "./Navbar.css";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./asset/totoroFace.png";
import SearchBar from "./SearchBar";
import AccountMenu from "./AccountMenu";

function Navbar() {
	return (
		<>
			<nav className="Navbar">
				<div className="navWrap">
					<Link to="/films" title="Click the logo to visit the Films page">
						<img src={logo} alt="logo" width="100" height="auto" />
					</Link>
					<ul class="primaryNav">
						<li className="navTab"></li>
						<li className="navTab">
							<Link to="/films" title="Click to visit the Films page">
								Films
							</Link>
						</li>
						<li className="navTab">
							<Link to="/people" title="Click to visit the People page">
								People
							</Link>
						</li>
						<li className="navTab">
							<Link to="/locations" title="Click to visit the Locations page">
								Locations
							</Link>
						</li>
						<li className="navTab">
							<Link to="/species" title="Click to visit the Species page">
								Species
							</Link>
						</li>
						<li className="navTab">
							<Link to="/vehicles" title="Click to visit the Vehicles page">
								Vehicles
							</Link>
						</li>
					</ul>
					<div className="secondaryNav">
						<div className="nav-element">
							<SearchBar />
						</div>
						<div className="nav-element">
							<AccountMenu />
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
export default Navbar;
