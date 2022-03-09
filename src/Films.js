import React, { useState, useEffect } from "react";
import FilmCard from "./FilmCard";

function Films() {
	const [listOfFilms, setListOfFilms] = useState([]);
	const [listOfFilmUrls, setListOfFilmUrls] = useState([]);

	const getAllFilms = () => {
		fetch("https://ghibliapi.herokuapp.com/films?limit=3")
			.then((res) => res.json())
			.then((data) => {
				setListOfFilms(data);
			});
	};

	const setUrlsArr = () => {
		listOfFilms.map((filmItem) =>
			setListOfFilmUrls((listOfFilmUrls) => [...listOfFilmUrls, filmItem.url])
		);
	};

	useEffect(() => {
		getAllFilms();
	}, []);

	useEffect(() => {
		setUrlsArr();
	}, [listOfFilms]);

	let displayFilms = listOfFilms ? (
		listOfFilms.map((film) => {
			return <div>{film.title}</div>;
		})
	) : (
		<h1>loading...</h1>
	);

	return (
		<>
			<div>
				{displayFilms}
				<FilmCard filmUrls={listOfFilmUrls} />
			</div>
		</>
	);
}
export default Films;
