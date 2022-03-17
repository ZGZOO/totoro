import React, { useState, useEffect } from "react";
import "./Films.css";
import Banner from "./Banner";
import FilmsDeck from "./FilmsDeck";
import loadingGif from "./asset/loading.gif";

function Films() {
	const [listOfFilms, setListOfFilms] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();
	const [bannerFilm, setBannerFilm] = useState({});

	const getAllFilms = async () => {
		try {
			setLoading(true);
			let res = await fetch("https://ghibliapi.herokuapp.com/films");
			let rawFilms = await res.json(); //[{},{},{}]
			setListOfFilms(rawFilms);
			setBannerFilm(rawFilms[0]);
			setTimeout(() => {
				setLoading(false);
			}, 788);
		} catch (err) {
			setError(err);
		}
	};

	useEffect(() => {
		getAllFilms();
	}, []);

	if (loading) {
		return (
			<>
				<div className="loadingDiv">
					{/* <div className="loadingWrapper"> */}
					<p>Loading films...</p>
					<img src={loadingGif} />
					{/* </div> */}
				</div>
			</>
		);
	}

	if (error || !Array.isArray(listOfFilms)) {
		return <p>There was an error loading the data!</p>;
	}

	return (
		<>
			<div className="Films">
				<Banner bannerFilm={bannerFilm} />
				<FilmsDeck films={listOfFilms} setBannerFilm={setBannerFilm} />
			</div>
		</>
	);
}
export default Films;
