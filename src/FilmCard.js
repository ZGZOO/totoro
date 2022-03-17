import React from "react";
import AddFav from "./AddFav";
import "./FilmCard.css";

function FilmCard({ films, setBannerFilm }) {
	function handleClick(filmObj) {
		console.log("onclick, ", filmObj);
		setBannerFilm(filmObj);
	}

	let displayFilmCards = films ? (
		films.map((film) => {
			return (
				<div
					className={`FilmCard`}
					key={`FilmCard-${film.title}`}
					onClick={() => handleClick(film)}
				>
					<div className="filmImg">
						<img src={film.image} />
					</div>
				</div>
			);
		})
	) : (
		<div>no films</div>
	);

	return <>{displayFilmCards}</>;
}
export default FilmCard;
