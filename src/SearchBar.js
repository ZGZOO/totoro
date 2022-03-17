import * as React from "react";
import "./SearchBar.css";
import searchIcon from "./asset/search.svg";

function SearchBar() {
	return (
		<div className="SearchBar">
			<button class="searchTab">
				<img
					src={searchIcon}
					alt="click the search icon to look for anything in the totoro world"
				/>
			</button>
		</div>
	);
}

export default SearchBar;
