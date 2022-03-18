import React, { useState } from "react";
import "./FilmsDeck.css";
import FilmCard from "./FilmCard";

const FilmsDeck = ({ films, setBannerFilm }) => {
	const [activeFilmCard, setActiveFilmCard] = useState("");

	return (
		<div className="FilmsDeck">
			<div className="deckWrapper">
				<FilmCard
					films={films}
					setBannerFilm={setBannerFilm}
					activeFilmCard={activeFilmCard}
					setActiveFilmCard={setActiveFilmCard}
				/>
			</div>
		</div>
	);
};

export default FilmsDeck;
