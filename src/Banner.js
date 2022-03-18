import * as React from "react";
import "./Banner.css";

function Banner({ bannerFilm }) {
	const covertRunningTime = (mins) => {
		let rawHrs = mins / 60;
		let hours = Math.floor(rawHrs);
		let rawMins = (rawHrs - hours) * 60;
		let minutes = Math.round(rawMins);
		return hours + "h " + minutes + "m";
	};

	// const getPeople = async (api) => {
	// 	let res = await fetch(api);
	// 	let rawPeople = await res.json(); //[{},{},{}]
	// 	return rawPeople;
	// };

	// const showPeopleInFilm = (peopleApis) => {
	// 	peopleApis.map((api) => {
	// 		return (
	// 			<>
	// 				<div>{getPeople(api).name}</div>
	// 			</>
	// 		);
	// 	});
	// };

	return (
		<>
			<div
				className="Banner"
				style={{
					backgroundImage: `url(${bannerFilm.movie_banner})`,
					backgroundRepeat: `no-repeat`,
					backgroundSize: `cover`,
					backgroundPosition: `center`,
				}}
			>
				<div className="bannerCanvas">
					<div className="bannerContent">
						<div className="movieInfo">
							<h1 className="engTitle">{bannerFilm.title}</h1>
							<h3 className="ogTitle">
								{bannerFilm.original_title}{" "}
								<span>({bannerFilm.original_title_romanised})</span>
							</h3>

							<div className="director">
								Director: <span>{bannerFilm.director}</span>
							</div>

							<div className="timeAndScore">
								<div>{bannerFilm.release_date}</div>
								<div>{covertRunningTime(bannerFilm.running_time)}</div>
								<div>{bannerFilm.rt_score}%</div>
							</div>

							<div className="description">{bannerFilm.description}</div>
						</div>
						{/* <div className="extraInfo"> */}
						{/* <div>People:{showPeopleInFilm(bannerFilm.people)}</div> */}
						{/* <div>Locations:</div>
							<div>Species:</div>
							<div>Vehicles:</div> */}
						{/* </div> */}
					</div>
				</div>
			</div>
		</>
	);
}

export default Banner;
