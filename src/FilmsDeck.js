import React from "react";
import "./FilmsDeck.css";
import FilmCard from "./FilmCard";

const FilmsDeck = ({ films, setBannerFilm }) => {
	return (
		<div className="FilmsDeck">
			<div className="deckWrapper">
				<FilmCard films={films} setBannerFilm={setBannerFilm} />
			</div>
		</div>
	);
};

export default FilmsDeck;
