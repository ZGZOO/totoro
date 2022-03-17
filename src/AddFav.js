import * as React from "react";
import AddToFavIcon from "./asset/toFav.svg";
import RemoveFromFavIcon from "./asset/removFav.gif";

function AddFav() {
	return (
		<div className="AddFav">
			<img
				src={AddToFavIcon}
				alt="add the movie to your favorite by clicking the icon"
			/>
			<img
				src={RemoveFromFavIcon}
				alt="remove the movie from your favorite by clicking the icon"
			/>
		</div>
	);
}

export default AddFav;
