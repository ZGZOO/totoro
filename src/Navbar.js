import * as React from "react";
import "./Navbar.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import logo from "./asset/logo.png";
import filmsSvg from "./asset/film.svg";
import characterSvg from "./asset/character.svg";
import SearchBar from "./SearchBar";
import AccountMenu from "./AccountMenu";

function Navbar() {
	const primaryNav = (
		<ul class="primaryNav">
			<li className="navTab">
				<NavLink
					to="/films"
					title="Click to visit the Films page"
					className={({ isActive }) =>
						isActive ? "activeNavTab" : "normalNavTab"
					}
				>
					<img src={filmsSvg} id="filmsSvg" />
					Films
				</NavLink>
			</li>
			<li className="navTab">
				<NavLink
					to="/people"
					title="Click to visit the People page"
					className={({ isActive }) =>
						isActive ? "activeNavTab" : "normalNavTab"
					}
				>
					<img src={characterSvg} id="characterSvg" />
					People
				</NavLink>
			</li>
			{/* <li className="navTab">
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
			</li> */}
		</ul>
	);

	return (
		<>
			<nav className="Navbar">
				<div className="navWrap">
					<Link to="/films" title="Click the logo to visit the Films page">
						<img src={logo} alt="logo" id="logo" />
					</Link>
					{primaryNav}
					<div className="secondaryNav">
						<div className="nav-element">{/* <SearchBar /> */}</div>
						{/* <div className="nav-element">
							<AccountMenu />
						</div> */}
					</div>
				</div>
			</nav>
		</>
	);
}
export default Navbar;
